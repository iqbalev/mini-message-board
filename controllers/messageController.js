import messages from "../database/db.js";
import getFormattedDateTime from "../utils/getFormattedDateTime.js";

export async function getMessageList(req, res) {
  res.render("index", { messages: messages });
}

export async function getMessageForm(req, res) {
  res.render("form");
}

let nextId = 4;
export async function postNewMessage(req, res) {
  const { messageText, username } = req.body;

  messages.push({
    id: nextId++,
    username: username,
    date: getFormattedDateTime(),
    text: messageText,
  });

  res.redirect("/");
}
