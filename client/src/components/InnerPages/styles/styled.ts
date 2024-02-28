import styled from "styled-components";
import { theme } from "../../../theme/Theme";
import { IStyledProps } from "../../../interfaces/types";

export const DesktopContainer = styled.div`
  width: 100vw;
  height: calc(100% - 80px);
  padding: 10px;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

// Texts
export const PaleText = styled.p`
  flex: 1;
  color: #84847e;
  text-align: left;

  margin-bottom: ${theme.spacing.space.xsmall};
`;

export const Text = styled.p`
  flex: 2;
  color: ${(props: IStyledProps) => props.themeState.textColor};
  line-height: ${theme.font.lineheights.h5};
`;

export const DescriptionText = styled.p`
  flex: 2;
  color: ${(props: IStyledProps) => props.themeState.textColor};
  margin-bottom: ${theme.spacing.space.medium};
  line-height: ${theme.font.lineheights.h5};
`;

export const LinkUrl = styled.a`
  flex: 2;
  color: ${(props: IStyledProps) => props.themeState.textColor};
  line-height: ${theme.font.lineheights.h5};
`;
