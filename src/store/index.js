import { createStore } from "vuex";
import pledge from "./module/pledge";

export default createStore({
  modules: {
    pledge,
  },
});
