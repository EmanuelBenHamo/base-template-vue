import Vue from "vue";
import Vuex from "vuex";
import entityStore from "./modules/entity.store.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    entityStore
  }
});
