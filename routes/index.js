import { Router } from "express";
import {
  getMessageList,
  getMessageDetails,
  getMessageForm,
  postNewMessage,
} from "../controllers/messageController.js";
import newMessageValidation from "../middlewares/messageValidator.js";

const index = Router();

index.get("/", getMessageList);
index.get("/message/:messageId/details", getMessageDetails);
index.get("/create-new-message", getMessageForm);

index.post("/create-new-message", newMessageValidation, postNewMessage);

export default index;
