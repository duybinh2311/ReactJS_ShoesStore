import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { NavigationProgress } from '@mantine/nprogress'
import { RouterProvider } from 'react-router-dom'
import router from 'router/router'

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
        }),
        breakpoints: {
          xs: 480,
          sm: 768,
          md: 992,
          lg: 1200,
          xl: 1440,
        },
        colorScheme: 'dark',
      }}
    >
      <NavigationProgress autoReset={true} />
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
)
