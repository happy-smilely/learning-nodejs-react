import dotenv from "dotenv";
dotenv.config();

const Routes = require("./routes/imageRoutes");
import { createServer } from "./utils/createServer";

// From create server file..
const app = createServer();

//Rooooutes
app.use("/folioapi/email", Routes);
app.use("/folioapi/drawing", Routes);

app.listen(process.env.PORT, () => {
  console.log(`Connected to server on port ${process.env.PORT}`);
});