import styled from "styled-components";
import { theme } from "../../../../theme/Theme";
import { IYoutubeStyleProps } from "../types/types";
import { IStyledProps, IStyledWithDimensionsProps } from "../../../../interfaces/types";

//Main Container for the page
export const ProjectContainer = styled.div`
  display: flex;
  overflow: hidden;

  height: 100%;

  // Media
  flex-direction: ${(props: IStyledWithDimensionsProps) => (props.dimensions.width < 800 ? "column" : "row")};
`;

// Left side of page
export const ImageSideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    height: 400px;
  }

  @media (max-width: 500px) {
    height: 200px;
  }
`;

// Top image section
export const MediaAreaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  padding: ${(props: IStyledWithDimensionsProps) =>
    props.dimensions.width < 800 ? theme.spacing.space.medium : theme.spacing.space.large};
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: ${(props: IStyledWithDimensionsProps) => (props.dimensions.width < 800 ? "100%" : "80%")};

  border: solid 5px ${(props: IYoutubeStyleProps) => props.themeState.borderColor};
  border-radius: 15px;

  filter: ${(props: IYoutubeStyleProps) => (!props.hovered ? "grayscale(100%)" : "grayscale(0%)")};
`;

export const IFrameContainer = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const TextSideContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: ${(props: IStyledWithDimensionsProps) =>
    props.dimensions.width < 800 ? theme.spacing.space.small : theme.spacing.space.medium};

  // Controls all text besides the title.
  /* font-size: ${(props: IStyledWithDimensionsProps) =>
    props.dimensions.width < 900 ? theme.font.fontsizes.xSmall : theme.font.fontsizes.text}; */

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: hidden;

  border-top: solid 5px
    ${(props: IStyledWithDimensionsProps) => (props.dimensions.width < 800 ? props.themeState.borderColor : "none")};

  border-left: solid 5px
    ${(props: IStyledWithDimensionsProps) => (props.dimensions.width > 800 ? props.themeState.borderColor : "none")};
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: max-content;

  padding: ${theme.spacing.space.small};
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border-bottom: solid 1px black;
`;

// Text descritpion section
export const DescriptionContainer = styled.div`
  width: 100%;
  padding: ${theme.spacing.space.small};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export const MainTitleContainer = styled.div`
  overscroll-behavior: none;
  width: 100%;
  height: 1px;

  padding: ${theme.spacing.space.small};
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: ${theme.spacing.space.medium};
  margin-bottom: ${theme.spacing.space.medium};
`;

export const TitleText = styled.h5`
  font-size: ${theme.font.fontsizes.h5};
  color: ${(props: IStyledProps) => props.themeState.textColor};
`;

export const LogoContainer = styled.div`
  width: max-content;
  height: min-content;
  display: flex;
`;

export const LinkContainer = styled.div`
  width: 100%;
  height: max-content;

  padding: ${theme.spacing.space.small};
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  
  border-bottom: solid 1px black;
`;