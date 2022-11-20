import auth from "./store/modules/auth/index.js";
import numbers from "./store/modules/numbers/index.js";

import { createStore } from "vuex";

export default createStore({
  modules: {
    auth,
    numbers,
  },
});
