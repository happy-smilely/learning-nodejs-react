import { isMobile } from "react-device-detect";

// Get current position inside the DIV.
export const getMousePositionInDiv = (e: any) => {
  // Important: currentTarget for parent but target for div -- This is why the math was off -- wrong div..
  const rect = e.currentTarget.getBoundingClientRect();
  const mouseY = e.clientY - rect.top;
  const mouseX = e.clientX - rect.left;
  return { mouseX, mouseY, rect };
};

export const isInsideResize = (mousePos: any) => {
  if (
    mousePos.mouseX < mousePos.rect.width &&
    mousePos.mouseX > mousePos.rect.width - 100 &&
    mousePos.mouseY < mousePos.rect.height &&
    mousePos.mouseY > mousePos.rect.height - 70 &&
    !isMobile
  ) {
    return true;
  } else {
    return false;
  }
};

export const isInsideTopBar = (mousePos: any) => {
  if (mousePos.mouseY > 0 && mousePos.mouseY < 100 && mousePos.mouseX > 0) {
    return true;
  } else {
    return false;
  }
};
