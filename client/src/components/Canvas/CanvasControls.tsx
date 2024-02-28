import React, { FunctionComponent } from "react";
import { ControlContainer, Button } from "./styled/styled";
import { uploadDrawing } from "./services/dbService";

interface IPropsCanvasController {
  canvasRef: React.MutableRefObject<any>;
  setCanDraw: React.Dispatch<React.SetStateAction<boolean>>;
  setPopupMessage: React.Dispatch<React.SetStateAction<string[]>>;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const CanvasControls: FunctionComponent<IPropsCanvasController> = ({
  canvasRef,
  setCanDraw,
  setPopupMessage,
  setShowPopup,
}) => {
  const saveDrawingToDB = async () => {
    const drawingPaths = await canvasRef.current.exportPaths();
    const drawingString = await JSON.stringify(drawingPaths);
    const uploadedDrawing = await uploadDrawing(drawingString);

    // If uploaded
    if (uploadedDrawing.data.status === "success") {
      showSavedMessage();
    } else {
      showErrorMessage();
    }
  };

  const eraseDrawing = async () => {
    await canvasRef.current.resetCanvas();
  };

  // Popups
  const showSavedMessage = () => {
    setShowPopup(true);
    setPopupMessage([
      "서버에 저장하였습니다!",
    ]);
  };

  const showErrorMessage = () => {
    setShowPopup(true);
    setPopupMessage(["Sorry, error uploading the image to the server", "Try again?"]);
  };

  const closeCanvas = () => {
    setPopupMessage([
      `마우스로 그림을 그려보세요!`,
      `지우기 버튼은 전체 그림을 지우고, 저장 버튼은 업로드하고 덮어쓸 것이며, 종료 버튼은 이 모드를 종료합니다!`,
      `즐겁게 이용하세요.`,
    ]);

    setCanDraw(false);
  };

  return (
    <ControlContainer>
      <Button onClick={eraseDrawing}>지우기</Button>
      <Button onClick={saveDrawingToDB}>저장</Button>
      <Button onClick={closeCanvas}>종료</Button>
    </ControlContainer>
  );
};

export default CanvasControls;
