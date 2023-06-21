import React from 'react'
import ReactDOM from 'react-dom/client'
import router from 'router/router'
import { Button, MantineProvider, Text } from '@mantine/core'
import { NavigationProgress } from '@mantine/nprogress'
import { RouterProvider } from 'react-router-dom'
import { ripple } from 'utils/keyframes'
import { Provider } from 'react-redux'
import store from 'services/redux/configStore'
import { ModalsProvider } from '@mantine/modals'
import 'assets/scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          globalStyles: (theme) => ({
            '*, *::before, *::after': {
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
              outline: 'none',
              textDecoration: 'none',
              listStyle: 'none',
            },
            html: {
              scrollBehavior: 'smooth',
            },
            body: {
              color: theme.white,
            },
          }),
          breakpoints: {
            xs: 480,
            sm: 768,
            md: 992,
            lg: 1200,
            xl: 1440,
          },
          colorScheme: 'dark',
          primaryColor: 'violet',
          primaryShade: 8,
          shadows: {},
          activeStyles: {
            transform: 'scale(0.95)',
          },
          defaultGradient: { deg: 90, from: 'violet', to: 'indigo' },
          components: {
            Button: {
              styles: {
                root: {
                  '&:hover': {
                    animation: `${ripple} 3s ease-in-out infinite`,
                  },
                },
              },
            },
            Avatar: {
              styles: (theme) => ({
                root: {
                  border: `${theme.fn.rgba(
                    theme.fn.primaryColor(),
                    0.3
                  )} 2px solid`,
                },
              }),
            },
          },
        }}
      >
        <ModalsProvider>
          <NavigationProgress autoReset={true} />
          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </Provider>
  </React.StrictMode>
)
