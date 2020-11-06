import Vue from "vue";
import Vuex from "vuex";

// import modules from './modules'
import field from "./modules/Field.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    field
  }
});
