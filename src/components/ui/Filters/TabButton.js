// @flow

import React from 'react'

import Button from '../Button'

export type Props = {
  text: string,
  onClick: (event: any) => void,
}

const TabButton = (props: Props) => (
  <Button
    wide
    outlined
    color='silver'
    smallRounded
    onClick={props.onClick}
  >
    {props.text}
  </Button>
)

export default TabButton
