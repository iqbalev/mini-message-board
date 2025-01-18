import getFormattedDateTime from "../utils/getFormattedDateTime.js";

const messages = [
  {
    id: 1,
    username: "Geralt_TheWhiteWolf",
    date: getFormattedDateTime(),
    text: "Wind's howling.",
  },
  {
    id: 2,
    username: "Dovahkiin",
    date: getFormattedDateTime(),
    text: "Fus-Ro-Dah!",
  },
  {
    id: 3,
    username: "davidMartinez_2076",
    date: getFormattedDateTime(),
    text: "I'm gonna take you there myself, fly you to the moon. That's a promise!",
  },
].sort((a, b) => b.id - a.id);

export default messages;
