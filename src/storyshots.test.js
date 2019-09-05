// @flow
/* globals expect */

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import initStoryshots from '@storybook/addon-storyshots'

configure({ adapter: new Adapter() })

initStoryshots({
  storyKindRegex: /^((?!.*?Styleguides).)*$/,
  test: ({ story, context }) => {
    const storyElement = story.render(context)
    const component = storyElement.props.story.props.children
    const shallowTree = shallow(component)
    expect(toJson(shallowTree)).toMatchSnapshot()
  }
})
