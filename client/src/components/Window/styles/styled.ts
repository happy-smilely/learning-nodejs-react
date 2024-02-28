import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { theme } from "../../../theme/Theme";
import { motion } from "framer-motion";
import { IStyledProps } from "../../../interfaces/types";
import { ReactComponent as Resize } from "../../../svg/resize.svg";

const windowWidth = (props: any) => {
  if (!isMobile) {
    return props.pageName === "image" ? "max-content" : props.dimensions.width ? props.dimensions.width + "px" : "80vw";
  } else {
    return "calc(100% - 15px)";
  }
};

const windowHeight = (props: any) => {
  if (!isMobile) {
    return props.dimensions.height ? props.dimensions.height + "px" : "83vh";
  } else {
    // If it is the 3D image page, use the content height?
    return props.pageName === "image" ? "60%" : "calc(100% - 15px)";
  }
};

// Used element.attrs as when you put it inside style it doesnt computer each instance.
// Was getting slow on moving too much.
export const WindowContainer = styled(motion.div).attrs((props: IStyledProps) => ({
  style: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    minWidth: `${isMobile ? "200px" : "500px"}`,
    borderRadius: theme.iconSize.borderRadius,
    backgroundColor: props.themeState.terminalColor,
    border: `${theme.sizing.borderThickness} solid ${props.themeState.borderColor}`,
    boxShadow: isMobile ? `5px 5px 0 ${props.themeState.borderColor}` : `20px 20px 0 ${props.themeState.borderColor}`,
  },
}))`
  z-index: ${(props: any) => (props.windowList.length > 0 ? props.windowList.length * 10 + 100 : 100)};
  top: ${(props: any) => (isMobile ? "5px" : props.position.top + "px")};
  left: ${(props: any) => (isMobile ? "5px" : props.position.left + "px")};
  width: ${(props: any) => windowWidth(props)};
  height: ${(props: any) => windowHeight(props)};
`;

export const MainWindow = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};

  border-radius: 0px 0px 0px 15px;

  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const CornerButton = styled.div`
  width: 34px;
  height: 34px;

  position: absolute;
  top: 10px;
  right: 20px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border: ${theme.sizing.borderThickness} solid ${(props) => props.themeState.borderColor};
  color: ${(props: IStyledProps) => props.themeState.textColor};

  box-shadow: 2px 2px 0 ${(props) => props.themeState.borderColor};

  transition: all 0.4s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

export const WindowContextContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};

  border-radius: 0 0 15px 0;

  display: flex;
  flex-direction: column;
`;

export const SideBar = styled.div`
  width: 100px;
  min-width: 200px;
  height: 100%;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border-right: ${theme.sizing.borderThickness} solid ${(props) => props.themeState.borderColor};
  border-radius: 15px 0 0 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopBar = styled.div`
  width: 100%;
  height: 50px;

  background-color: ${(props: IStyledProps) => props.themeState.terminalColor};
  border-radius: 15px 15px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResizeSVG = styled(Resize)`
  color: ${(props: IStyledProps) => props.themeState.borderColor};
  fill: ${(props: IStyledProps) => props.themeState.borderColor};
  width: 20px;
  height: 20px;

  filter: brightness(420%);
  transform: rotate(90deg);

  position: absolute;
  bottom: 5px;
  right: 5px;
`;
