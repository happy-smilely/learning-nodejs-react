import { useState, useEffect, useRef, useContext } from "react";
import { isMobile } from "react-device-detect";
import WindowContext from "../../context/window/windowContext";

// Util functions
import { getMousePositionInDiv, isInsideTopBar, isInsideResize } from "./utils/utilFunctions";

import { TopBar, MainWindow, CornerButton, WindowContainer } from "./styles/styled";

import AboutPage from "../InnerPages/About/Index";
import ProjectPage from "../InnerPages/Project/Index";
import ProjectsPage from "../InnerPages/Projects/ProjectsFolder";
import ImagesPage from "../InnerPages/3d/Index";
import ImagePage from "../InnerPages/3dImage/Index";
import FirstPage from "../InnerPages/FirstWindow/index";

// Component only refreshes on mouse goes to topbar or resize / or on resize / ovement
export default function Window({ pageName, themeState, id, windowType, data, windowList }) {
  const { deleteActiveWindow } = useContext(WindowContext);

  const [dimensions, setDimensions] = useState({});
  const defaultTop = !isMobile ? 10 * windowList.length : 10;
  const defaultLeft = !isMobile ? 40 * windowList.length : 10;
  const [position, setPosition] = useState({ top: defaultTop, left: defaultLeft });

  const container = useRef();
  const [isOnResize, setIsOnResize] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isOnMoving, setisOnMoving] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [movingPoint, setMovingPoint] = useState();
  const [dragStartPoint, setStartDragPoint] = useState();

  useEffect(() => {
    // Get window size on startup - this is for resizing
    if (pageName === "first") {
      setDimensions({ width: container.current.clientWidth / 1.2, height: "600px" });
    } else {
      setDimensions({ width: container.current.clientWidth, height: container.current.clientHeight });
    }
  }, [container]);

  // Check if mouse is in the movement zone
  const checkMouseInMove = (mousePos) => {
    if (isInsideTopBar(mousePos)) {
      document.body.style.cursor = "move";
      setisOnMoving(true);
    } else {
      setisOnMoving(false);
      document.body.style.cursor = "initial";
    }
  };

  // Check if mouse is in the resize zone.
  const checkMouseInResize = (mousePos) => {
    if (isInsideResize(mousePos)) {
      document.body.style.cursor = "move";
      setIsOnResize(true);
    } else {
      setIsOnResize(false);
      document.body.style.cursor = "initial";
    }
  };

  // When clicked on and in position..
  const setStartingPoint = (e) => {
    const mousePos = getMousePositionInDiv(e);
    if (isOnResize && !isMobile) {
      setStartDragPoint({
        x: e.clientX,
        y: e.clientY,
        w: mousePos.rect.width,
        h: mousePos.rect.height,
      });

      setIsResizing(true);
    }

    if (isOnMoving) {
      setIsMoving(true);
      setMovingPoint({ x: mousePos.mouseX, y: mousePos.mouseY });
    }
  };

  // Update position when resizing
  const resizingProcess = (e) => {
    if (isResizing) {
      setDimensions({
        width: dragStartPoint.w + (e.clientX - dragStartPoint.x),
        height: dragStartPoint.h + (e.clientY - dragStartPoint.y),
      });
    }
  };

  // Update position whilst moving
  const movingProcess = (e) => {
    if (isMoving) {
      setPosition({
        left: e.clientX - movingPoint.x,
        top: e.clientY - movingPoint.y,
      });
    }
  };

  //? Checks the mouse position inside the div
  const changeWindowSizeOrPos = (e) => {
    const mousePos = getMousePositionInDiv(e);
    checkMouseInMove(mousePos);
    checkMouseInResize(mousePos);

    if (isMoving) movingProcess(e);
    if (isResizing) resizingProcess(e);
  };

  //? MOUSEUP reset
  const onReset = () => {
    setIsResizing(false);
    setIsMoving(false);
    setIsOnResize(false);
    setisOnMoving(false);
    setMovingPoint(null);
    setStartDragPoint(null);
  };

  return (
    <WindowContainer
      pageName={pageName}
      onMouseMove={changeWindowSizeOrPos}
      onMouseDown={setStartingPoint}
      onMouseUp={onReset}
      onMouseLeave={onReset}
      themeState={themeState}
      dimensions={dimensions}
      position={position}
      windowList={windowList}
      id={id}
      ref={container}
      animate={{ scale: [1, 1.01, 1.01, 1.01, 1] }}
      transition={{ duration: 0.2, delay: 0.1 }}
    >
      <CornerButton themeState={themeState} onClick={() => deleteActiveWindow(id)}>
        X
      </CornerButton>

      <TopBar themeState={themeState} />
      <MainWindow themeState={themeState}>
        {pageName === "about" ? <AboutPage themeState={themeState} dimensions={dimensions} /> : null}
        {pageName === "project" ? <ProjectPage themeState={themeState} data={data} dimensions={dimensions} /> : null}
        {pageName === "projects" ? <ProjectsPage themeState={themeState} /> : null}
        {pageName === "threedee" ? <ImagesPage themeState={themeState} /> : null}
        {pageName === "image" ? <ImagePage themeState={themeState} data={data} /> : null}
        {pageName === "first" ? <FirstPage themeState={themeState} dimensions={dimensions} /> : null}
      </MainWindow>
    </WindowContainer>
  );
}
