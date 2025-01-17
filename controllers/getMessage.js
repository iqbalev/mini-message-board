import messages from "../database/db.js";

async function getMessage(req, res) {
  res.render("index", { messages: messages });
}

export default getMessage;
