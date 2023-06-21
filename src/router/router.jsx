import { createBrowserRouter } from 'react-router-dom'
import Root from 'templates/RootTemplate'
import HomePage from 'pages/Home'
import AccountPage from 'pages/Account'
import CartPage from 'pages/Cart'
import DetailPage from 'pages/Detail'
import ShopPage from 'pages/Shop'
import ErrorPage from 'pages/Error'

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
