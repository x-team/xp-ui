// @flow
/* globals $Shape */

import * as React from 'react'

type Props<S> = {
  initialState: S,
  children: ({
    state: S,
    setState: (updater: (S => $Shape<S>) | $Shape<S>, cb?: () => mixed) => void,
  }) => React.Node,
}

export default class State<S: Object> extends React.Component<Props<S>, S> {
  state: S = this.props.initialState

  _setState = (...args: any) => this.setState(...args)

  render () {
    const { _setState: setState, state } = this
    return this.props.children({ setState, state })
  }
}
