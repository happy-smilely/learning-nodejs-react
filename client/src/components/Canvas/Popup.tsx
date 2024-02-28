import React, { FunctionComponent, useContext } from "react";
import { PopupContainer, Popup, XButton } from "./styled/styled";
import { Text } from "../InnerPages/styles/styled";
import ThemeContext from "../../context/theme/themeContext";

interface IPropsPopup {
  message: string[];
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupComp: FunctionComponent<IPropsPopup> = ({ message, setShowPopup }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <PopupContainer>
      <Popup themeState={theme}>
        {message.map((mess) => {
          return <Text themeState={theme}>{mess}</Text>;
        })}
        <XButton onClick={() => setShowPopup(false)}>X</XButton>
      </Popup>
    </PopupContainer>
  );
};

export default PopupComp;
