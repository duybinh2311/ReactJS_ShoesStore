import { createBrowserRouter } from 'react-router-dom'
import Root from 'templates/RootTemplate'
import HomePage from 'pages/home'
import AccountPage from 'pages/Account'
import CartPage from 'pages/cart'
import DetailPage from 'pages/detail'
import ShopPage from 'pages/shop'
import ErrorPage from 'pages/error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/account',
        element: <AccountPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/detail/:productId',
        element: <DetailPage />,
      },
      {
        path: '/shop',
        element: <ShopPage />,
      },
    ],
  },
])

export default router
