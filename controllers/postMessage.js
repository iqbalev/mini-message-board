import messages from "../database/db.js";
import getFormattedDateTime from "../utils/getFormattedDateTime.js";

async function postMessage(req, res) {
  const { messageText, username } = req.body;

  messages.push({
    username: username,
    date: getFormattedDateTime(),
    text: messageText,
  });

  res.redirect("/");
}

export default postMessage;
