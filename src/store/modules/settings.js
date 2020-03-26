import defaultSettings from "@/settings";

const { tagsView, logo, layout } = defaultSettings;
const state = {
  tagsView: tagsView,
  logo: logo,
  collapse: false,
  layout: localStorage.getItem("BYUI-VUE-LAYOUT") || layout,
};
const mutations = {
  CHANGE_LAYOUT: (state, layout) => {
    if (layout) {
      state.layout = layout;
    }
  },
  CHANGE_COLLAPSE: (state) => {
    state.collapse = !state.collapse;
  },
  FOLD_SIDE_BAR: (state) => {
    state.collapse = true;
  },
  OPEN_SIDE_BAR: (state) => {
    state.collapse = false;
  },
};
const actions = {
  changeLayout({ commit }, menu) {
    commit("CHANGE_LAYOUT", menu);
  },
  changeCollapse({ commit }) {
    commit("CHANGE_COLLAPSE");
  },
  foldSideBar({ commit }) {
    commit("FOLD_SIDE_BAR");
  },
  openSideBar({ commit }) {
    commit("OPEN_SIDE_BAR");
  },
};
export default { namespaced: true, state, mutations, actions };
