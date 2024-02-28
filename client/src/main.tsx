import { useContext, useState, useRef, useEffect } from "react";
import { AppContainer } from "./styles/styled";
import { isMobile } from "react-device-detect";

import ThemeContext from "./context/theme/themeContext";
import WindowContext from "./context/window/windowContext";

import Canvas from "./components/Canvas/Index";

import { IWindowObject } from "./interfaces/types";
import { EWindowTypes } from "./interfaces/types";
import { EPageNames } from "./interfaces/types";

import { DesktopContainer } from "./components/InnerPages/styles/styled";
import Icon from "./components/Icons/Index";
import BottomBar from "./components/BottomBar/Index";
import Window from "./components/Window/Index";
import LoginPage from "./components/Login";

export default function Home() {
  const viewport = window.visualViewport;
  const { theme } = useContext(ThemeContext);
  const { windowState, createNewWindow } = useContext(WindowContext);

  //const [loggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const canvasRef = useRef<any>();
  const [canDraw, setCanDraw] = useState<boolean>(false);

  // Record page view to analytics
  useEffect(() => {
  }, []);

  // So many bad practices up in here!
  useEffect(() => {
    if (loggedIn) {
      setTimeout(() => {
        // (pageName: string, windowType: string, data: any, isProject: boolean)
        createNewWindow("first", "", null, false);
      }, 1800);
    }
  }, [loggedIn]);

  return (
    <AppContainer themeState={theme} mobileHeight={viewport!.height} isMobile={isMobile}>
      {!loggedIn ? (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <DesktopContainer>
            {!isMobile ? <Canvas canvasRef={canvasRef} canDraw={canDraw} setCanDraw={setCanDraw} /> : null}
            <Icon
              pageName={EPageNames.about}
              text={EPageNames.about}
              windowType={EWindowTypes.sidebar}
              aniDelay={0.1}
              isWeb={null}
              isProject={false}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              data={null}
            />

            {/* <Icon
              pageName={EPageNames.projects}
              text={EPageNames.projects}
              windowType={EWindowTypes.sidebar}
              aniDelay={0.4}
              isWeb={null}
              isProject={false}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              data={null}
            /> */}

            <Icon
              pageName={EPageNames.contact}
              text={EPageNames.contact}
              windowType={EWindowTypes.sidebar}
              aniDelay={0.4}
              isWeb={"mailto: hjh70344@gmail.com"}
              isProject={false}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              data={null}
            />

            <Icon
              pageName={EPageNames.github}
              text={EPageNames.github}
              windowType={EWindowTypes.noSidebar}
              aniDelay={0.7}
              isProject={false}
              isWeb={"https://github.com/happy-smilely/"}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              data={null}
            />

            <Icon
              pageName={EPageNames.linkedin}
              text={EPageNames.linkedin}
              windowType={EWindowTypes.noSidebar}
              aniDelay={1.0}
              isProject={false}
              isWeb={"https://www.linkedin.com/in/jaehyuck-heo-6567462b2/"}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              data={null}
            />

            {windowState.windows && windowState.windows.length > 0
              ? windowState.windows.map((w: IWindowObject) => {
                  return (
                    <Window
                      key={w.id}
                      pageName={w.pageName}
                      themeState={theme}
                      id={w.id}
                      windowType={w.windowType}
                      data={w.data}
                      windowList={windowState.windows}
                    />
                  );
                })
              : null}
          </DesktopContainer>
        </>
      )}
    </AppContainer>
  );
}