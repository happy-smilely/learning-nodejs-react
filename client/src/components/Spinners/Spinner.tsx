import styled from "styled-components";
import { ReactComponent as Spinner } from "../../svg/spinner.svg";
import { theme } from "../../theme/Theme";

const SpinnerBGContainer = styled.div`
  position: absolute;
  right: ${theme.spacing.space.medium};
  bottom: ${theme.spacing.space.medium};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerSVG = styled(Spinner)`
  width: 50px;
  height: 50px;

  @keyframes SpinningAnimation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(179deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }

  animation-name: SpinningAnimation;
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

//
export default function Loading() {
  return (
    <SpinnerBGContainer>
      <SpinnerSVG />
    </SpinnerBGContainer>
  );
}
