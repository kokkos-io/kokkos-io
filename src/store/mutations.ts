import { GlobalState, Language } from "./interfaces";

export default {
  setLoading(state: GlobalState, truth: boolean) {
    state.loading = truth;
  },

  toggleLoading(state: GlobalState) {
    state.loading = !state.loading;
  },

  setLanguage(state: GlobalState, language: Language) {
    state.language = language;
  }
};
