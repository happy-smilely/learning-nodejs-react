import { FunctionComponent } from "react";
import styled from "styled-components";
import { theme } from "../../../theme/Theme";

interface IImageProp {
  data: any;
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${theme.spacing.space.large};
`;

const Image = styled.img`
  height: 100%;

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
  }
`;

const ImagePage: FunctionComponent<IImageProp> = ({ data }) => {
  return (
    <Container>
      <Image src={data.data.image.url} />
    </Container>
  );
};

export default ImagePage;
