import { FunctionComponent } from "react";

import { ITitleProps } from "../Project/types/types";
import { MainTitleContainer } from "../Project/styles/styled";
import { TitleText } from "../Project/styles/styled";

//! Animated the logo to show it can be clicked..
const AboutTitle: FunctionComponent<ITitleProps> = ({ text, themeState }) => {
  return (
    <MainTitleContainer>
      <TitleText themeState={themeState}>{text}</TitleText>
    </MainTitleContainer>
  );
};

export default AboutTitle;
