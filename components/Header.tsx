import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../styles/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

interface HeaderProps {
    pauseGame: ()=>void,
    reloadGame: ()=>void,
    score: number,
    isPaused: boolean
}

const Header = ({pauseGame, reloadGame , score, isPaused}: HeaderProps) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={pauseGame}>
        {!isPaused ? <FontAwesome5 name="pause-circle" size={40} color={Colors.primary}/> :
        <Entypo name="controller-play" size={40} color={Colors.primary}/>
    }
        </TouchableOpacity>
        <TouchableOpacity onPress={reloadGame}>
        <Ionicons name="reload-circle" size={45} color={Colors.primary}/>
        </TouchableOpacity>
        <Text style={styles.score}>Score : {score}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: Colors.background,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 10,
        borderRadius: 12
    },
    score: {
        fontSize: 24,
        color: Colors.primary,
        fontWeight: "bold"
    }
})

export default Header