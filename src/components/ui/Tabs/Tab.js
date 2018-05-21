// @flow

import type { Element } from 'react'

import elem from '../../../utils/elem'

type Props = {
  children?: Element<*> | string
}

const Root = elem.div()

function Tab ({ children }: Props) {
  return Root(children)
}

export default Tab
