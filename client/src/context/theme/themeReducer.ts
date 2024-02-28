import {
  SET_DARK_THEME,
  SET_LIGHT_THEME,
  SET_BLUE_THEME,
  SET_PEACH_THEME,
  SET_PINK_THEME,
  SET_PURPLE_THEME,
  SET_TURQUOISE_THEME,
  IThemeState,
} from "./types";

const Reducer = (state: IThemeState, action: any) => {
  switch (action.type) {
    case SET_DARK_THEME:
      return action.payload;

    case SET_LIGHT_THEME:
      return action.payload;

    case SET_PINK_THEME:
      return {
        ...state,
        backgroundColor: action.payload.pink.background,
        terminalColor: action.payload.pink.terminal,
      };

    case SET_BLUE_THEME:
      return {
        ...state,
        backgroundColor: action.payload.blue.background,
        terminalColor: action.payload.blue.terminal,
      };

    case SET_PURPLE_THEME:
      return {
        ...state,
        backgroundColor: action.payload.purple.background,
        terminalColor: action.payload.purple.terminal,
      };

    case SET_PEACH_THEME:
      return {
        ...state,
        backgroundColor: action.payload.peach.background,
        terminalColor: action.payload.peach.terminal,
      };

    case SET_TURQUOISE_THEME:
      return {
        ...state,
        backgroundColor: action.payload.turquoise.background,
        terminalColor: action.payload.turquoise.terminal,
      };

    default:
      return state;
  }
};

export default Reducer;
