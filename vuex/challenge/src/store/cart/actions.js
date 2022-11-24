export default {
  addProductToCart(context, payload) {
    const prodId = payload.id;
    // context also has access to the root state so we can
    // provide the product in actions for the mutation
    const products = context.rootGetters["products/getProducts"];
    const product = products.find((product) => product.id === prodId);
    context.commit("addProductToCart", product);
  },
  removeProductFromCart(context, payload) {
    context.commit("removeProductFromCart", payload);
  },
};
