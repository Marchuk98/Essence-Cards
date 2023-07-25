import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '../src/styles/index.scss'
import type { Preview } from '@storybook/react'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        backgrounds: {
            default: 'twitter',
            values: [
                {
                    name: 'black',
                    value: 'var(--color-dark-300)',
                },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
}

export default preview