import { FunctionComponent, useContext, useState, useEffect } from "react";
import ThemeContext from "../../context/theme/themeContext";
import styled from "styled-components";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { onPageView } from "../../utils/googleAna";
import CanvasControls from "./CanvasControls";
import { getDrawingData } from "./services/dbService";
import PopupComp from "./Popup";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

interface ICanvasProps {
  canvasRef: React.MutableRefObject<any>;
  canDraw: boolean;
  setCanDraw: React.Dispatch<React.SetStateAction<boolean>>;
}

const Index: FunctionComponent<ICanvasProps> = ({ canvasRef, canDraw, setCanDraw }) => {
  const { theme } = useContext(ThemeContext);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string[]>([
    `마우스로 그림을 그려보세요!`,
    `지우개 버튼은 전체 그림을 지우고, 저장 버튼은 업로드하고 덮어쓸 것이며, 닫기 버튼은 이 모드를 종료합니다!`,
    `즐겁게 이용하세요.`,
  ]);

  // Get current drawing state from the DB..
  const getInitialDrawing = async () => {
    const drawingData = await getDrawingData();
    const paths = await JSON.parse(drawingData.data.data[0][0].data);
    await canvasRef.current.loadPaths(paths);
  };

  useEffect(() => {
    // onPageView("canvas");
    getInitialDrawing();
  }, []);

  const onDraw = async () => {
    // On clicking the BG show the drawing mode..
    if (!canDraw) setShowPopup(true);
    if (!canDraw) setCanDraw(true);
  };

  return (
    <Container onClick={() => onDraw()}>
      {showPopup ? <PopupComp setShowPopup={setShowPopup} message={popupMessage} /> : null}

      {canDraw ? (
        <CanvasControls
          canvasRef={canvasRef}
          setCanDraw={setCanDraw}
          setPopupMessage={setPopupMessage}
          setShowPopup={setShowPopup}
        />
      ) : null}

      <ReactSketchCanvas
        ref={canvasRef}
        canvasColor="transparent"
        width={canDraw ? "100vw" : "0"}
        height={canDraw ? "100vh" : "0"}
        strokeWidth={canDraw ? 3 : 0}
        strokeColor={theme.borderColor}
        withTimestamp={true}
      />
    </Container>
  );
};

export default Index;
