import { validationResult } from "express-validator";
import messages from "../database/db.js";
import getFormattedDateTime from "../utils/getFormattedDateTime.js";

export async function getMessageList(req, res) {
  res.render("index", { messages: messages });
}

export async function getMessageDetails(req, res) {
  const { messageId } = req.params;

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

let nextId = 4;
export async function postNewMessage(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(401).render("form", { errors: errors.array() });
  }

  const { messageText, username } = req.body;

  messages.push({
    id: nextId++,
    username: username,
    date: getFormattedDateTime(),
    text: messageText,
  });

  messages.sort((a, b) => b.id - a.id);

  res.redirect("/");
}
