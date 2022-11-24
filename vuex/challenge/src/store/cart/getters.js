export default {
  getQty(state) {
    return state.cart.qty;
  },
  getItems(state) {
    return state.cart.items;
  },
  getTotal(state) {
    return state.cart.total.toFixed(2);
  },
};
