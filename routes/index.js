import { Router } from "express";
import {
  getMessageList,
  getMessageForm,
  postNewMessage,
} from "../controllers/messageControllers.js";

const index = Router();

index.get("/", getMessageList);
index.get("/create-new-message", getMessageForm);

index.post("/create-new-message", postNewMessage);

export default index;
