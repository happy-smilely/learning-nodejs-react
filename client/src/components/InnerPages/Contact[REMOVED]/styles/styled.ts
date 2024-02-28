import styled from "styled-components";
import { theme } from "../../../../theme/Theme";
import { IStyledProps } from "../../../../interfaces/types";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  overflow-y: auto;

  font-size: ${theme.font.fontsizes.text};
  color: ${(props: IStyledProps) => props.themeState.textColor};
`;

export const EmailSideBar = styled.div`
  width: 300px;
  height: 100%;

  border-right: solid 5px ${(props: IStyledProps) => props.themeState.borderColor};

  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.space.small};
`;

export const EmailInbox = styled(EmailSideBar)`
  width: 400px;
  padding: ${theme.spacing.space.medium};
  color: gray;
  display: flex;
  align-items: center;
`;

export const EmailContainer = styled(EmailSideBar)`
  width: 100%;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 50px;

  font-size: ${theme.font.fontsizes.text};
  background-color: transparent;

  padding: ${theme.spacing.space.small};

  border: none;
  border-bottom: solid 2px rgba(69, 69, 69, 0.3) !important;
  outline: none;
`;

export const EmailTextBox = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  padding: ${theme.spacing.space.small};

  font-size: ${theme.font.fontsizes.text};
  background-color: transparent;
  border: none;
  border-bottom: solid 2px rgba(69, 69, 69, 0.3) !important;
  outline: none;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const EmailButton = styled.button`
  width: ${theme.spacing.space.xxlarge};
  padding: ${theme.spacing.space.small};

  margin: ${theme.spacing.space.medium};
  background-color: transparent;
  border-radius: 15px;
  border: solid 5px ${(props: IStyledProps) => props.themeState.borderColor};
  box-shadow: 5px 5px 0 ${(props: IStyledProps) => props.themeState.shadowColor};

  &:hover {
    cursor: pointer;
    transform: scale(102%);
    filter: brightness(50%);
    box-shadow: 7px 7px 0 ${(props: IStyledProps) => props.themeState.shadowColor};
  }
`;
