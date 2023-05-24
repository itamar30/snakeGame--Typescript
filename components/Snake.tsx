import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Coordinate } from '../types/typs'
import { Colors } from '../styles/colors'

interface snakeProps
{
    snake: Coordinate[]
}

const Snake = ({snake}: snakeProps): JSX.Element => {
  return (
    <>
        {snake.map((segment: Coordinate, index: number)=> {
            const segmentStyle = {
                bottom: segment.y * 10,
                left: segment.x * 10,
            }
            return <View key={Math.random()} style={[styles.snake, segmentStyle]}/>
        })}
    </>
  )
}

const styles = StyleSheet.create({
    snake: {
        width: 15,
        height: 15,
        backgroundColor: Colors.primary,
        borderRadius: 7,
        position: "absolute"
    },


})

export default Snake