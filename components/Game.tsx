import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import react, {useState, useEffect} from 'react'
import { Colors } from '../styles/colors'
import  'react-native-gesture-handler';
import { GestureEventType } from '../types/typs';
import { Direction, Coordinate } from '../types/typs';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Snake from './Snake';
import CheckGameOver from './CheckGameOver';
import Food from './Food';
import {randomFoodPosition} from '../components/randomFoodPosition';
import Header from './Header';

const Game = () : JSX.Element => {

    const SNAKE_INITIAL_POSITION =[{ x:10, y:15 }];
    const FOOD_INITIAL_POSITION ={ x : 10 , y : 19 };                              
    const GAME_BOUNDS = { xMin : 0 , xMax : 34 , yMin : 0 , yMax : 62 } ;
    const MOVE_INTERVAL = 500 ;
    const SCORE_INCREMENT = 10 ;
  
    const [direction, setDirection] = useState<Direction>(Direction.Right);
    const [snake, setSnake] = useState<Coordinate[]>(SNAKE_INITIAL_POSITION);
    const [food, setFood] = useState<Coordinate>(FOOD_INITIAL_POSITION);
    const [isGameOver, setisGameOver] = useState<boolean>(false);
    const [isPaused, setisPaused] = useState<boolean>(false);
    const [score, setscore] = useState<number>(0);


    useEffect(()=>{
      
        if (!isGameOver)
        {
            const intervalId = setInterval(()=>{
                !isPaused && moveSnake()
            }, MOVE_INTERVAL)
            return () => clearInterval(intervalId)

        }
    }, [isGameOver, isPaused, snake])


  
   

    const handkeGesture = (e : GestureEventType) => {
        const {translationX, translationY} = e.nativeEvent;
        if ( Math.abs ( translationX ) > Math.abs ( translationY ) ) {

            if ( translationX > 0 ) {
                setDirection(Direction.Right)
            } else {
                setDirection(Direction.Left)
           }
          }
           else {
            if ( translationY > 0 ) {
                setDirection(Direction.Down)
           } else {
            setDirection(Direction.Up)
        }}
    }

    const moveSnake = () => {
        const snakeHead = snake[0];
        const newHead = {...snakeHead};
        if (CheckGameOver(snakeHead, GAME_BOUNDS))
        {
            setisGameOver(prev => !prev)
            return;
        }
        switch ( direction ) {
          
             case Direction.Left:
             newHead.x -=1;
             break ;
             case Direction.Right:
                newHead.x +=1;
                break ;
                case Direction.Up:
                    newHead.y += 1;
                    break;
                    case Direction.Down:
                       newHead.y -= 1;
                    break;
            default:
                
             break ;
    }
        
    if (checkEatsFood(newHead, food, 2))
    {
        setFood(randomFoodPosition(GAME_BOUNDS.yMax, GAME_BOUNDS.xMax))
        setSnake([newHead, ...snake])
        setscore(prev => prev + SCORE_INCREMENT)
    }
    else{
        setSnake([newHead, ...snake.slice(0,-1)])
        }
}

const checkEatsFood = (head: Coordinate, food :Coordinate, area: number) : boolean => {
    let headDistanceFromX : number = Math.abs(head.x -food.x);
    let headDistanceFromY : number = Math.abs(head.y-food.y);

   
  return headDistanceFromX <= area && headDistanceFromY < area
}

    const pauseGame = ():void=>
    {
        setisPaused(prev=>!prev)
    }
    const reloadGame = (): void => {
        setSnake(SNAKE_INITIAL_POSITION);
        setFood(FOOD_INITIAL_POSITION);
        setisGameOver(false);
        setisPaused(false);
        setscore(0);
    
    }

  return (
    <PanGestureHandler onGestureEvent={handkeGesture}>
    <SafeAreaView style={styles.cotainer}>
        <Header reloadGame={reloadGame} pauseGame={pauseGame} score={score} isPaused={isPaused}/>
      <View style={styles.boundaries}>
        <Snake snake={snake} />
        <Food x={food.x} y={food.y} />
      </View>
    </SafeAreaView>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
    cotainer: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: 40
    },
    boundaries: {
        flex : 1 ,
        borderColor : Colors.primary ,
        borderWidth : 12 ,
        borderBottomLeftRadius : 30 ,
        borderBottomRightRadius : 30 ,
        backgroundColor : Colors.background ,
        marginBottom: 20,
        marginTop: 10
    },
    score: {
        fontSize: 30,
        color: "red",
        textAlign: "center"

    }
})

export default Game