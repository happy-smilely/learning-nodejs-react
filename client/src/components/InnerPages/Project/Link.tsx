import { FunctionComponent } from "react";
import { PaleText, LinkUrl } from "../styles/styled";
import { LinkContainer } from "./styles/styled";
import { ILinkProps } from "./types/types";

//! This double text thing is weird. WOrking but not good check it out later.
const PrismicLink: FunctionComponent<ILinkProps> = ({ data , themeState }) => {
  const { url, target, link_type } = data.data.link;
  return (
    <LinkContainer>
      <PaleText>Career Management</PaleText>
      <LinkUrl themeState={themeState} href={url} target={target}>· Github Pages 로 만든 경력관리 페이지 이동</LinkUrl>
    </LinkContainer>
  );
};

export default PrismicLink;
