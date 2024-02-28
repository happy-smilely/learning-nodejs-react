export const SET_LIGHT_THEME = "SET_LIGHT_THEME";
export const SET_DARK_THEME = "SET_DARK_THEME";
export const SET_PINK_THEME = "SET_PINK_THEME";
export const SET_BLUE_THEME = "SET_BLUE_THEME";
export const SET_PURPLE_THEME = "SET_PURPLE_THEME";
export const SET_PEACH_THEME = "SET_PEACH_THEME";
export const SET_TURQUOISE_THEME = "SET_TURQUOISE_THEME";

export interface IPropsState {
  children: React.ReactNode;
}

export interface IThemeState {
  backgroundColor: string;
  terminalColor: string;
  borderColor: string;
  shadowColor: string;
  textColor: string;
}

export interface ICommandObject {
  args: Array<string>;
  commandFunc: Function;
  commandName: string;
  fullSentence: string;
  passwordRef: string;
}
