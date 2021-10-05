import content from "../../api/content.json";

const state = {
  options: [],
  statistics: [],
  links: [],
  showMenu: false,
  showModal: false,
  progressBar: "",
};

const getters = {
  allOptions: state => state.options,
  allStatistics: state => state.statistics,
  allLinks: state => state.links,
  getProgress: state => {
    const total = 100000;

    return (state.statistics[0].value * 100) / total;
  },
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

  fetchLinks({ commit }) {
    const links = content[0]["links"];
    commit("setLinks", links);
  },

  openMobileMenu({ commit }) {
    commit("clickMenu");
  },

  openModal({ commit }) {
    commit("clickModal");
  },
};

const mutations = {
  setOptions(state, options) {
    state.options = options;
  },

  setStatistics(state, statistics) {
    state.statistics = statistics;
  },

  setLinks(state, links) {
    state.links = links;
  },

  clickMenu(state) {
    state.showMenu = !state.showMenu;
  },

  clickModal(state) {
    state.showModal = !state.showModal;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
