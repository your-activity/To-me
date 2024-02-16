const axios = require("axios");

const MESSAGE_TYPE = {
  USER: "CHAT",
  SYSTEM: "SYSTEM"
};

module.exports.sendOwncastUserMessage = function sendOwncastSystemMessage(
  text
) {
  sendChatMessage(text, MESSAGE_TYPE.SYSTEM);
};

module.exports.sendOwncastUserMessage = function sendOwncastUserMessage(
  text,
  username
) {
  sendChatMessage(text, MESSAGE_TYPE.USER);
};

async function sendChatMessage(message, username) {
  const api = process.env.OWNCAST_INSTANCE + "/api/integrations/chat/system";

  try {
    const response = await axios.post(
      api,
      { body: message, username: username },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.OWNCAST_ACCESS_TOKEN
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
}
