import { validationResult } from "express-validator";
import { fetchMessages, addMessage } from "../database/queries.js";

export async function getMessageList(req, res) {
  const messages = await fetchMessages();
  res.render("index", { messages: messages });
}

export async function getMessageDetails(req, res) {
  const { messageId } = req.params;
  const messages = await fetchMessages();
  const messageDetails = messages.find(
    (message) => message.id === Number(messageId)
  );

  if (!messageDetails) {
    console.log("Error: Path not found.");
  }

  res.render("messageDetails", { message: messageDetails });
}

export async function getMessageForm(req, res) {
  res.render("form", { errors: [] });
}

export async function postNewMessage(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(401).render("form", { errors: errors.array() });
  }

  const { username, messageText } = req.body;
  addMessage(username, messageText);
  res.redirect("/");
}
