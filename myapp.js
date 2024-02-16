// You can use chat.sendOwncastSystemMessage and chat.sendOwncastUserMessage
// to send chat messages into Owncast from your code.
const chat = require("./lib/owncastchat.js");

// Use browserlink.sendDataToBrowser() to send a javascript object to the frontend.
var browserlink;

// Fill in this function for what you want to happen with chat
// messages that come in.
module.exports.handleOwncastMessage = function handleOwncastMessage(message) {
  // Do things here!
  console.log(message);
  browserlink.sendDataToBrowser(message);
};

// No need to touch this
module.exports.setup = function setup(wsServer) {
  browserlink = wsServer;
  console.log("Your app code is ready in myapp.js");
};
