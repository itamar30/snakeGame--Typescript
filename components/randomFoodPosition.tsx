import { View, Text } from 'react-native'
import React from 'react'
import { Coordinate } from '../types/typs'

export const randomFoodPosition = (maxX: number, maxY :number ) : Coordinate => {
    let xPos = Math.floor(Math.random() * maxX);
    let yPos = Math.floor(Math.random() * maxY);
    let xPos2 =( xPos < 30 &&  xPos > 0) ? xPos : 10
    let yPox2 = (yPos < 55 &&  yPos > 0) ? yPos : 10
  return (
    {
        x: xPos2,
        y: yPox2
    }
  )
}

