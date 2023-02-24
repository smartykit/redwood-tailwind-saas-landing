// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <SellingPoints {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import SellingPoints from './SellingPoints'

export const generated = () => {
  return <SellingPoints />
}

export default {
  title: 'Components/SellingPoints',
  component: SellingPoints,
}
