// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <NewsletterForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import NewsletterForm from './NewsletterForm'

export const generated = () => {
  return <NewsletterForm />
}

export default {
  title: 'Components/NewsletterForm',
  component: NewsletterForm,
}
