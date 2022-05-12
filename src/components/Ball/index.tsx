import React from 'react'
import { BallWrapper } from './styled'

export function Ball({ numberValue }: { numberValue: number }) {
  return (
    <BallWrapper>{numberValue}</BallWrapper>
  )
}
