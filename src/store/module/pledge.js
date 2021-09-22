import content from "../../api/content.json";
// import axios from "axios";

const state = {
  options: [],
  statistics: [],
  showMenu: false,
};

const getters = {
  allOptions: state => state.options,
  allStatistics: state => state.statistics,
};

const actions = {
  fetchOptions({ commit }) {
    const options = content[0]["options"];
    commit("setOptions", options);
  },

  fetchStatistics({ commit }) {
    const statistics = content[0]["statistics"];
    commit("setStatistics", statistics);
  },
};

const mutations = {
  setOptions(state, options) {
    state.options = options;
  },

  setStatistics(state, statistics) {
    state.statistics = statistics;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

console.log(content[0]["statistics"]);
