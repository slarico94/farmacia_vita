import Vue from 'vue'
import Vuex from 'vuex'
import productos from '../productos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos,
    snackbar: {
      show: false,
      variant: 'success',
      message: 'Producto añadido al carrito!'
    },
    cart: [] // { itemId, quantity }
  },
  mutations: {
    addItemToCart(state, payload) {
      const { itemId, quantity } = payload
      const idx = state.cart.findIndex((product) => {
        return product.itemId === itemId
      })
      if (idx === -1) {
        state.cart.push({ itemId, quantity })
      } else {
        state.cart[idx].quantity += 1
      }
    },
    updateSnackbar(state, settings) {
      state.snackbar = {
        ...state.snackbar,
        ...settings
      }
    }
  },
  actions: {}
})