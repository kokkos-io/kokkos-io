export default {
  toggleLanguage(context: any) {
    context.commit("setLanguage", context.getters.notLanguage);
  }
};
