import defaultSettings from "@/settings";

const { tagsView, logo, layout } = defaultSettings;
const state = {
  tagsView: tagsView,
  logo: logo,
  layout: localStorage.getItem("BYUI-VUE-LAYOUT") || layout,
};
const mutations = {
  CHANGE_LAYOUT: (state, layout) => {
    if (layout) {
      state.layout = layout;
    }
  },
};
const actions = {
  changeLayout({ commit }, menu) {
    commit("CHANGE_LAYOUT", menu);
  },
};
export default { namespaced: true, state, mutations, actions };
