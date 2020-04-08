export enum Language {
  Norwegian = "Norwegian",
  English = "English"
}

export interface GlobalState {
  loading: boolean;
  language: Language;
}
