import styled from "styled-components";
import { theme } from "../../../../theme/Theme";

export const Container = styled.div`
  display: flex;
  padding: ${theme.spacing.space.medium};

  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
`;
