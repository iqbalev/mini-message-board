import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";
import { fetchMessages, addMessage } from "../database/queries.js";
import NotFoundError from "../middlewares/customError.js";

export const getMessageList = asyncHandler(async (req, res) => {
  const messages = await fetchMessages();
  res.render("index", { messages: messages });
});

export const getMessageDetails = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  const messages = await fetchMessages();
  const messageDetails = messages.find(
    (message) => message.id === Number(messageId)
  );

  if (!messageDetails) {
    throw new NotFoundError("Message Not Found");
  }

  res.render("messageDetails", { message: messageDetails });
});

export const getMessageForm = asyncHandler(async (req, res) => {
  res.render("form", { errors: [] });
});

export const postNewMessage = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render("form", { errors: errors.array() });
  }

  const { username, messageText } = req.body;
  await addMessage(username, messageText);
  return res.redirect("/");
});
