const state = {
  options: [
    {
      title: "Bamboo Stand",
      linkText: "Pledge $25 or more",
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      quantity: 101,
      url: "/",
    },
    {
      title: "Black Edition Stand",
      linkText: "Pledge $75 or more",
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      quantity: 64,
    },
    {
      title: "Mahogany Special Edition",
      linkText: "Pledge $200 or more",
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      quantity: 0,
    },
  ],
  statistics: [
    {
      value: "$89,914",
      label: "of $100,000 backed",
    },
    {
      value: "5,007",
      label: "total backers",
    },
    {
      value: "56",
      label: "days left",
    },
  ],
};

const getters = {
  getOptions: (state) => state.options,
  getStatistics: (state) => state.statistics,
};

const actions = {};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
