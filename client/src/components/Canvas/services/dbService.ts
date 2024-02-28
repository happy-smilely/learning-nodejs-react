import isDev from "../../../utils/isDev";
import axios from "axios";

export const getDrawingData = async () => {
  const req = await axios.request({
    withCredentials: true,
    method: "GET",
    url: isDev() ? "http://localhost:9743/folioapi/drawing/getData" : "/folioapi/drawing/getData",
  });

  return req;
};

export const uploadDrawing = async (drawingString: string) => {
  const req = await axios.request({
    withCredentials: true,
    method: "POST",
    url: isDev() ? "http://localhost:9743/folioapi/drawing/uploadData" : "/folioapi/drawing/uploadData",
    data: {
      drawing: drawingString,
    },
  });
  console.log(req);
  return req;
};
