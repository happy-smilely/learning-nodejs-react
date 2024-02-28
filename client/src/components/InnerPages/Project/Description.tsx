import { FunctionComponent } from "react";
import { PaleText, DescriptionText } from "../styles/styled";
import { DescriptionContainer } from "./styles/styled";
import { IDescriptionProps } from "./types/types";

//! This double text thing is weird. WOrking but not good check it out later.
const Description: FunctionComponent<IDescriptionProps> = ({ data, themeState }) => {
  return (
    <DescriptionContainer>
      <PaleText>description</PaleText>
      <DescriptionText themeState={themeState}>
        {data.data.description.map((p: any) => {
          return (
            <DescriptionText key={p.text} themeState={themeState}>
              {p.text}
            </DescriptionText>
          );
        })}
      </DescriptionText>
    </DescriptionContainer>
  );
};

export default Description;
