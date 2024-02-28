import { EWindowTypes, IThemeStateProps } from "../../../interfaces/types";

export interface IIconProps {
  pageName: string;
  text: string;
  windowType: EWindowTypes;
  isWeb: string | null;
  aniDelay: number;
  selectedIcon: string | null;
  setSelectedIcon: any;
  isProject: boolean;
  data: null | any;
}

export interface IIconSquareProps {
  label: string;
  themeState: IThemeStateProps;
  isProject: boolean;
  name: string;
}

export interface IIconMenuContainerProps {
  themeState: IThemeStateProps;
  display: string;
}

export interface IIconTextProps {
  themeState: IThemeStateProps;
  isSelected: boolean;
}

export interface IIconMenuProps {
  top: number | null;
  left: number | null;
  display: any;
  themeState: any;
  onClickHandler: any;
}
