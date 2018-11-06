// @flow

import React from 'react'

const withProps = (mapper: Function): Function => (WrappedComponent: any) => (props: Object) => {
  const mappedProps = mapper(props)
  return <WrappedComponent {...mappedProps} />
}

export default withProps
