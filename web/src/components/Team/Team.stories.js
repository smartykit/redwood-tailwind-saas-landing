// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Team {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Team from './Team'

export const generated = () => {
  return <Team />
}

export default {
  title: 'Components/Team',
  component: Team,
}
