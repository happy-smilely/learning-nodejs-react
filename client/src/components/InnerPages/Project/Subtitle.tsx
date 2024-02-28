import { FunctionComponent } from "react";

import { PaleText, Text } from "../styles/styled";
import { ISubTitleProps } from "./types/types";
import { TitleContainer } from "./styles/styled";

const SubTitle: FunctionComponent<ISubTitleProps> = ({ leftText, rightText, themeState }) => {
  return (
    <TitleContainer>
      <PaleText>{leftText}</PaleText>
      <Text themeState={themeState}>{rightText}</Text>
    </TitleContainer>
  );
};

export default SubTitle;
