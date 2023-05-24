import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Coordinate } from '../types/typs'

const Food = ({x, y} : Coordinate) : JSX.Element => {
  return (
      <Text style={[ styles.food, {  bottom: y * 10, left: x * 10}]}>
        🍎
      </Text>
  )
}

const styles = StyleSheet.create({
    food: {
        height: 30,
        width: 30,
        borderRadius: 7,
        position: "absolute",
        fontSize: 25
    }
})

export default Food