// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Hero {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Hero from './Hero'

export const generated = () => {
  return <Hero />
}

export default {
  title: 'Components/Hero',
  component: Hero,
}
