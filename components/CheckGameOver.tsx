import { View, Text } from 'react-native'
import React from 'react'
import { Coordinate } from '../types/typs'

const CheckGameOver = (snakeHead: Coordinate, boundaries: any) : boolean => {
  return (
    snakeHead.x < boundaries.xMin ||
    snakeHead.x >  boundaries.xMax ||
    snakeHead.y > boundaries.yMax ||
    snakeHead.y < boundaries.yMin       
  )
}

export default CheckGameOver