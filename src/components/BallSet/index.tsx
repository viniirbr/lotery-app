import React from 'react'
import { Ball } from '../Ball'
import { BallSetWrapper } from './styled'

export function BallSet({ numberValues }: {numberValues: number[]}) {
  return (
    <BallSetWrapper>
      {numberValues.map((value, id) => <Ball numberValue={value} key={id}/>)}
    </BallSetWrapper>
  )
}
