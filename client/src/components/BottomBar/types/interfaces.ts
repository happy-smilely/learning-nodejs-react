import { IThemeStateProps } from "../../../interfaces/types";

export interface IStartButtonProps {
  themeState: IThemeStateProps;
  showStartMenu: boolean;
  setShowStartMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITimeProps {
  themeState: IThemeStateProps;
}

export interface IStartMenuProps {
  themeState: IThemeStateProps;
}
