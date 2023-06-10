import React from 'react'
import ReactDOM from 'react-dom/client'
import router from 'router/router'
import { MantineProvider } from '@mantine/core'
import { NavigationProgress } from '@mantine/nprogress'
import { RouterProvider } from 'react-router-dom'
import ripple from 'utils/keyframes/ripple'
import 'assets/scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
          '.slick-slider': {
            overflow: 'hidden',
            cursor: 'pointer',
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
        defaultGradient: { deg: 90, from: 'violet', to: 'blue' },
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
        },
      }}
    >
      <NavigationProgress autoReset={true} />
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
)
