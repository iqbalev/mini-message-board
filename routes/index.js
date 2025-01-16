import { Router } from "express";
import getFormattedDateTime from "../utils/getFormattedDateTime.js";

const messages = [
  {
    username: "Geralt_TheWhiteWolf",
    date: getFormattedDateTime(),
    text: "Wind's howling.",
  },
  {
    username: "Dovahkiin",
    date: getFormattedDateTime(),
    text: "Fus-Ro-Dah!",
  },
  {
    username: "davidMartinez_2076",
    date: getFormattedDateTime(),
    text: "I'm gonna take you there myself, fly you to the moon. That's a promise!",
  },
];

const index = Router();

index.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

index.get("/new", (req, res) => {
  res.render("form");
});

index.post("/new", (req, res) => {
  const { messageText, username } = req.body; // this is retrieved from the "name" property of the input field

  messages.push({
    username: username,
    date: getFormattedDateTime(),
    text: messageText,
  });

  res.redirect("/");
});

export default index;
