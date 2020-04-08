import { Language, GlobalState } from "./interfaces";

export default {
  notLanguage(state: GlobalState): Language {
    return state.language === Language.English
      ? Language.Norwegian
      : Language.English;
  }
};
