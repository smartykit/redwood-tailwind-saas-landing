// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ProductFeatures {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ProductFeatures from './ProductFeatures'

export const generated = () => {
  return <ProductFeatures />
}

export default {
  title: 'Components/ProductFeatures',
  component: ProductFeatures,
}
