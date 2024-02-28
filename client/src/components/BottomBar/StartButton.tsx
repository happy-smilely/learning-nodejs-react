import { FunctionComponent } from "react";
import { StartButtonContainer, BarText } from "./styles/styled";
import { IStartButtonProps } from "./types/interfaces";

const StartButton: FunctionComponent<IStartButtonProps> = ({ themeState, setShowStartMenu, showStartMenu }) => {
  return (
    <StartButtonContainer themeState={themeState} onClick={() => setShowStartMenu(!showStartMenu)}>
      <BarText themeState={themeState}>{showStartMenu ? "close" : "start"}</BarText>
    </StartButtonContainer>
  );
};

export default StartButton;
