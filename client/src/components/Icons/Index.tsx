import React, { useState, useEffect, FunctionComponent, useContext } from "react";
import { isMobile } from "react-device-detect";
import { onPageView } from "../../utils/googleAna";
import { IconContainer, IconText } from "./styles/styled";
import IconSquare from "./IconSquare";
import { IIconProps } from "./types/interfaces";

import ThemeContext from "../../context/theme/themeContext";
import WindowContext from "../../context/window/windowContext";

const IconMain: FunctionComponent<IIconProps> = ({
  pageName,
  text,
  data,
  windowType,
  isWeb,
  aniDelay,
  selectedIcon,
  setSelectedIcon,
  isProject,
}) => {
  const { createNewWindow } = useContext(WindowContext);
  const { theme } = useContext(ThemeContext);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    if (selectedIcon === text) setIsSelected(true);
    if (selectedIcon !== text) setIsSelected(false);
  }, [selectedIcon, text]);

  // ON one click - change the color of the text background
  const onClickHandler = (e: React.MouseEvent) => {
    if (isWeb) {
      // if (isWeb.includes("twitter")) onPageView("twitter");
      // if (isWeb.includes("linkedin")) onPageView("linkedin");
      // if (isWeb.includes("github")) onPageView("github");
    }

    if (isWeb) return window.open(isWeb, "_blank");

    //pageName: string,// id: number,// windowType: string, // data: any,// isProject: boolean
    createNewWindow(pageName, windowType, data, false);
  };

  return (
    <IconContainer
      onMouseDown={onClickHandler}
      initial={{ opacity: 0, y: -20 }}
      transition={{ delay: aniDelay, duration: 0.5 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <IconSquare themeState={theme} label={pageName} name={text} isProject={isProject} />

      <IconText themeState={theme} isSelected={isSelected}>
        {text}
      </IconText>
    </IconContainer>
  );
};

export default IconMain;
