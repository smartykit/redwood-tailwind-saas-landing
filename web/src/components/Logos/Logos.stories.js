// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Logos {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Logos from './Logos'

export const generated = () => {
  return <Logos />
}

export default {
  title: 'Components/Logos',
  component: Logos,
}
