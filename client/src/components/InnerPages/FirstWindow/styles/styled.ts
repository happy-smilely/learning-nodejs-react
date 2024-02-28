import styled from "styled-components";
import { theme } from "../../../../theme/Theme";
import { IStyledProps } from "../../../../interfaces/types";

export const MessageContainer = styled.div`
    width: 100%:
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    text-align: left;

    padding: ${theme.spacing.space.large};
`;

export const Title = styled.div`
  font-size: ${theme.font.fontsizes.h1};
  margin-bottom: ${theme.spacing.space.small};
`;

export const SubTitle = styled.div`
  font-size: ${theme.font.fontsizes.h3};
  margin-bottom: ${theme.spacing.space.large};
`;

export const Text = styled.div`
  font-size: ${theme.font.fontsizes.text};
  margin-bottom: ${theme.spacing.space.medium};
  line-height: ${theme.font.lineheights.text};
`;
