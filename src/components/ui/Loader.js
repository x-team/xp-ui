// @flow

import elem from '../../utils/elem'

const Img = elem.img('', {
  src: require('../../assets/x-loader.gif'),
  alt: 'Loading...'
})

function Loader () {
  return (
    Img()
  )
}

export default Loader
