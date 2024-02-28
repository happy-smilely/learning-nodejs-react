import { FunctionComponent, useContext, useState } from "react";
import { StartMenuButton, StartMenuContainer } from "./styles/styled";
import { IStartMenuProps } from "./types/interfaces";
import { isMobile } from "react-device-detect";
import ThemeContext from "../../context/theme/themeContext";

const StartMenu: FunctionComponent<IStartMenuProps> = ({ themeState }) => {
  const { themeChangeMap, setLightTheme, setDarkTheme } = useContext(ThemeContext);
  const [drawingText, setDrawingText] = useState("click the wallpaper?");
  const [isDark, setIsDark] = useState<boolean>(false);

  // Little hacky..
  const selectAndChangeRandomColor = () => {
    setLightTheme();
    const mapToArray: [string, Function][] = Object.entries(themeChangeMap);
    const randomChoice = Math.floor(Math.random() * mapToArray.length);
    mapToArray[randomChoice][1]();
  };

  const toggleDarkMode = () => {
    !isDark ? setDarkTheme() : setLightTheme();
    setIsDark(!isDark);
  };

  const checkDesignFile = () => {
    const link = "https://xd.adobe.com/view/dde78e26-b2ec-4262-a760-77ebb29270c8-88b4/";
    return window.open(link, "_blank");
  };

  return (
    <StartMenuContainer themeState={themeState}>
      {/* {!isMobile ? (
        <StartMenuButton onClick={() => setDrawingText("the wallpaper, not me :|")} themeState={themeState}>
          {drawingText}
        </StartMenuButton>
      ) : null} */}

      <StartMenuButton onClick={selectAndChangeRandomColor} themeState={themeState}>
        feeling colorful?
      </StartMenuButton>
      <StartMenuButton onClick={toggleDarkMode} themeState={themeState}>
        opposite of light?
      </StartMenuButton>
      <StartMenuButton onClick={checkDesignFile} themeState={themeState}>
        see draft site design?
      </StartMenuButton>
    </StartMenuContainer>
  );
};

export default StartMenu;
