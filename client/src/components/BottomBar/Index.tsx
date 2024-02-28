import { useState, useContext, FunctionComponent } from "react";
import ThemeContext from "../../context/theme/themeContext";
import { BottomBarContainer } from "./styles/styled";
import StartButton from "./StartButton";
import StartTime from "./StartTime";
import StartMenu from "./StartMenu";

// import useWindowDimensions from "../../hooks/useCheckWindowSize";

interface IPropsBottomBar {}

const BottomBar: FunctionComponent<IPropsBottomBar> = ({}) => {
  const [showStartMenu, setShowStartMenu] = useState<boolean>(false);
  const { theme } = useContext(ThemeContext);

  return (
    <BottomBarContainer
      initial={{ y: 100 }}
      transition={{ delay: 1.3, duration: 0.3 }}
      animate={{ y: 0 }}
      themeState={theme}
    >
      <StartButton themeState={theme} setShowStartMenu={setShowStartMenu} showStartMenu={showStartMenu} />
      <StartTime themeState={theme} />

      {showStartMenu ? <StartMenu themeState={theme} /> : null}
    </BottomBarContainer>
  );
};

export default BottomBar;
