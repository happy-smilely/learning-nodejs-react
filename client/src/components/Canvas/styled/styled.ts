import styled from "styled-components";
import { theme } from "../../../theme/Theme";
import { IStyledProps } from "../../../interfaces/types";

export const ControlContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;

  padding: ${theme.spacing.space.small};

  display: grid;
  height: 170px;
  align-content: space-between;
`;

export const Button = styled.button`
  padding: ${theme.spacing.space.small};
  background: #ffe1c1;
  border: solid #f8fdcc;
  border-radius: 10px;
  font-size: ${theme.font.fontsizes.text};

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;

export const PopupContainer = styled.div`
  z-index: 100000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Popup = styled.div`
  position: relative;
  width: max-content;
  max-width: 50%;

  padding: ${theme.spacing.space.large};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: ${theme.sizing.borderThickness} solid ${(props: IStyledProps) => props.themeState.borderColor};
  border-radius: 15px;
`;

export const XButton = styled.h5`
  font-size: ${theme.font.fontsizes.h5};

  position: absolute;
  top: ${theme.spacing.space.small};
  right: ${theme.spacing.space.small};

  &:hover {
    transform: scale(105%);
    cursor: pointer;
  }
`;
