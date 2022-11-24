import productsModule from "./products/index.js";
import cartModule from "./cart/index.js";
import authModule from "./auth/index.js";

import { createStore } from "vuex";

export default createStore({
  modules: {
    products: productsModule,
    cart: cartModule,
    auth: authModule,
  },
});
