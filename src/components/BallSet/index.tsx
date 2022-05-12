import React from 'react'
import { Ball } from '../Ball'

export function BallSet({ numberValues }: {numberValues: number[]}) {
  return (
    <div>
      {numberValues.map((value, id) => <Ball numberValue={value} key={id}/>)}
    </div>
  )
}
