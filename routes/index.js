import { Router } from "express";
import getMessage from "../controllers/getMessage.js";
import getForm from "../controllers/getForm.js";
import postMessage from "../controllers/postMessage.js";

const index = Router();

index.get("/", getMessage);
index.get("/new", getForm);

index.post("/new", postMessage);

export default index;
