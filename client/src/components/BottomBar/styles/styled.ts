import styled from "styled-components";
import { IStyledProps } from "../../../interfaces/types";
import { theme } from "../../../theme/Theme";
import { motion } from "framer-motion";

export const BottomBarContainer = styled(motion.div)`
  z-index: 100;
  position: relative;
  bottom: 0;
  left: 0;

  width: 100vw;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: ${theme.sizing.borderThickness} solid ${(props: IStyledProps) => props.themeState.borderColor};
`;

// Start Button
export const StartButtonContainer = styled.div`
  position: relative;
  z-index: 100;
  width: 150px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border-right: ${theme.sizing.borderThickness} solid ${(props: IStyledProps) => props.themeState.borderColor};

  &:hover {
    cursor: pointer;
    filter: brightness(0.95);
  }
`;

export const TimeContainer = styled.div`
  width: 200px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border-left: ${theme.sizing.borderThickness} solid ${(props) => props.themeState.borderColor};
`;

export const BarText = styled.p`
  margin: 0;
  color: ${(props: IStyledProps) => props.themeState.textColor};
  font-size: ${theme.font.fontsizes.h5};
`;

// Start menu
export const StartMenuContainer = styled.div`
  z-index: 100000;
  position: absolute;
  bottom: 75px;
  left: 1px;

  width: 300px;
  height: max-content;

  border-radius: 15px 15px 0 0;
  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: ${theme.sizing.borderThickness} solid ${(props: IStyledProps) => props.themeState.borderColor};
  border-bottom: none;

  z-index: 50;
`;

// The buttons INSIDE the start menu.
export const StartMenuButton = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 15px 15px 0 0;
  border-bottom: ${theme.sizing.borderThickness} solid ${(props: IStyledProps) => props.themeState.borderColor};

  display: flex;
  align-items: center;
  padding: ${theme.spacing.space.medium};

  font-size: ${theme.font.fontsizes.h5};
  color: ${(props: IStyledProps) => props.themeState.textColor};
  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};

  &:hover {
    cursor: pointer;
    filter: brightness(0.95);
  }
`;
