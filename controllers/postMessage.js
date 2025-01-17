import messages from "../database/db.js";
import getFormattedDateTime from "../utils/getFormattedDateTime.js";

let nextId = 4;

async function postMessage(req, res) {
  const { messageText, username } = req.body;

  messages.push({
    id: nextId++,
    username: username,
    date: getFormattedDateTime(),
    text: messageText,
  });

  res.redirect("/");
}

export default postMessage;
