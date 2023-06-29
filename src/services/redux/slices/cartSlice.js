import { createSlice } from '@reduxjs/toolkit'
import storage from 'utils/storage'

const initialState = {
  cartUser: '',
  cartList: [],
  totalItem: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    add: (state, action) => {
      if (!state.cartUser) {
        const { user, item } = action.payload
        state.cartUser = user
        state.cartList.push(item)
        state.totalItem = item.quantity
        state.totalPrice = item.total
        storage.save(state.cartUser, state)
        return
      }
      const { item } = action.payload
      const itemInCart = state.cartList.find(
        (cartItem) => cartItem.id === item.id
      )
      if (itemInCart) {
        itemInCart.quantity += item.quantity
        itemInCart.total += item.total
      } else {
        state.cartList.push(item)
      }
      state.totalItem = state.cartList.reduce((total, item) => {
        total += item.quantity
        return total
      }, 0)
      state.totalPrice = state.cartList.reduce((total, item) => {
        total += item.total
        return total
      }, 0)
      storage.save(state.cartUser, state)
    },
    increaseQuantity: (state, action) => {
      const cartItem = state.cartList.find((item) => item.id === action.payload)
      if (cartItem) {
        cartItem.quantity += 1
        cartItem.total += cartItem.price
        state.totalItem += 1
        state.totalPrice += cartItem.price
        storage.save(state.cartUser, state)
      }
    },
    reduceQuantity: (state, action) => {
      const cartItem = state.cartList.find((item) => item.id === action.payload)
      if (cartItem) {
        cartItem.quantity -= 1
        cartItem.total -= cartItem.price
        state.totalItem -= 1
        state.totalPrice -= cartItem.price
        storage.save(state.cartUser, state)
      }
    },
    delete: (state, action) => {
      const itemIndex = state.cartList.findIndex(
        (item) => item.id === action.payload
      )
      if (itemIndex !== -1) {
        state.cartList.splice(itemIndex, 1)
        state.totalItem = state.cartList.reduce((total, item) => {
          total += item.quantity
          return total
        }, 0)
        state.totalPrice = state.cartList.reduce((total, item) => {
          total += item.total
          return total
        }, 0)
        storage.save(state.cartUser, state)
      }
    },
    getCartHistory: (state, action) => {
      const { cartUser, cartList, totalItem, totalPrice } = action.payload
      state.cartUser = cartUser
      state.cartList = cartList
      state.totalItem = totalItem
      state.totalPrice = totalPrice
    },
    reset: (state) => {
      state.cartUser = ''
      state.cartList = []
      state.totalItem = 0
      state.totalPrice = 0
    },
  },
})

export const cartAction = cartSlice.actions

export default cartSlice.reducer
