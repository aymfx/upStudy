import Vue from "vue";
import Vuex from "vuex";
export const AddAGE = "Add_AGE";
Vue.use(Vuex);

const moduleA = {
  state: () => ({
    age: 19,
  }),
  mutations: {
    [AddAGE](state, payload) {
      console.log(payload, "moduleA");
      state.age += 1;
    },
  },
  actions: {},
  getters: {},
};
const moduleB = {
  state: () => ({
    age: 20,
  }),
  mutations: {
    [AddAGE](state, payload) {
      console.log(payload, "moduleB");
      state.age += 1;
    },
  },
  actions: {},
  getters: {},
};

export default new Vuex.Store({
  state: {
    age: 18,
  },
  getters: {
    getAge: (state) => {
      return state.age;
    },
  },
  mutations: {
    [AddAGE](state, payload) {
      console.log(payload, "root");
      state.age += 1;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit(AddAGE);
      }, 1000);
    },
  },
  modules: {
    a: moduleA,
    b: moduleB,
  },
});
