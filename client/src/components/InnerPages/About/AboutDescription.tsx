import { FunctionComponent } from "react";
import { PaleText, DescriptionText } from "../styles/styled";
import { DescriptionContainer } from "../Project/styles/styled";
import { IDescriptionProps } from "../Project/types/types";

const AboutDescription: FunctionComponent<IDescriptionProps> = ({ data, themeState }) => {
  return (
    <DescriptionContainer>
      <DescriptionText themeState={themeState}>
        {data.data.description.map((p: any) => {
          return <DescriptionText themeState={themeState}>{p.text}</DescriptionText>;
        })}
      </DescriptionText>
    </DescriptionContainer>
  );
};

export default AboutDescription;
