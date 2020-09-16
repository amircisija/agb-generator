import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    company_info: {
      company_name: "",
      company_url: "",
      company_owner: "",
      company_adress: "",
      company_city: "",
      company_email: "",
      company_phone: "",
      company_fax: "",
      company_str: ""
    },
    company_has_html: false
  },
  getters: {
    getInfoQuery(state) {
      return state.company_info;
    },
    getCheckboxState(state) {
      return state.company_has_html;
    }
  },
  mutations: {
    setInfo(state, company_info) {
      state.company_info = company_info;
    },
    updateCheckbox(state, value) {
      state.company_has_html = value;
    }
  },
  actions: {
    SET_SEARCH_QUERY(context, company_info) {
      context.commit("setInfo", company_info);
    },
  },
  modules: {}
});