import { IThemeStateProps } from "../../../../interfaces/types";
import { IStyledProps } from "../../../../interfaces/types";

export interface IDescriptionProps {
  data: any;
  themeState: IThemeStateProps;
}

export interface IImageSideProps {
  data: any;
  themeState: IThemeStateProps;
  dimensions: { width: number; height: number };
}

export interface IMediaAreaProps {
  data: any;
  themeState: IThemeStateProps;
  dimensions: { width: number; height: number };
}

export interface ISubTitleProps {
  leftText: string;
  rightText: string;
  themeState: IThemeStateProps;
}

export interface ITextSideProps {
  data: any;
  dimensions: { width: number; height: number };
  themeState: IThemeStateProps;
}

export interface ITitleProps {
  text: string;
  github: string | null;
  website: string | null;
  themeState: IThemeStateProps;
}

export interface IYoutubeEmbed {
  id: string;
  themeState: IThemeStateProps;
  dimensions: { width: number; height: number };
}

export interface IYoutubeStyleProps extends IStyledProps {
  hovered: any;
  dimensions: { width: number; height: number };
}

export interface ILinkProps {
  data: any;
  themeState: IThemeStateProps;
}