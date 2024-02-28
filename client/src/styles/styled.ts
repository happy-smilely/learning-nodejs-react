import styled from "styled-components";
import { theme } from "../theme/Theme";
import { IStyledProps } from "../interfaces/types";

export interface IStyledWithMobile extends IStyledProps {
  isMobile: boolean;
  mobileHeight: number;
}

export const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: ${(props: IStyledWithMobile) => (!props.isMobile ? "100vh" : props.mobileHeight + "px")};
  position: relative;
  overflow: hidden;

  background-color: ${(props: IStyledWithMobile) => props.themeState.backgroundColor};

  /* width */
  *::-webkit-scrollbar {
    width: 30px;
  }

  /* Track */
  *::-webkit-scrollbar-track {
    background: ${(props: IStyledWithMobile) => props.themeState.borderColor};
  }

  /* Handle */
  *::-webkit-scrollbar-thumb {
    background: ${(props: IStyledWithMobile) => props.themeState.terminalColor};
    border-left: ${theme.sizing.borderThickness} solid ${(props) => props.themeState.borderColor};
  }

  /* Handle on hover */
  *::-webkit-scrollbar-thumb:hover {
    /* cursor: pointer;
    filter: brightness(50%); */
  }
`;
