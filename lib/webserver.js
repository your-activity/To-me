// Create a web server
const express = require("express");
const webserver = express();
const bodyParser = require("body-parser");
webserver.use(bodyParser.json());

// Websocket
const ws = require("ws");
const wsServer = new ws.Server({ noServer: true });

module.exports.setup = function setup(myApp) {
  // Serve the files from public
  webserver.use(express.static("public"));

  // Listen at the /owncast endpoint for webhooks
  webserver.post("/owncast", (req, res) => {
    const body = req.body;

    if (body.eventData && body.eventData.rawBody) {
      const message = body.eventData;
      myApp.handleOwncastMessage(message);
    }

    res.json({ status: 200 });
  });

  console.log("Listening at /owncast for webhooks");

  return webserver;
};

module.exports.start = function start() {
  const listening = webserver.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listening.address().port);
    listening.on("upgrade", (request, socket, head) => {
      wsServer.handleUpgrade(request, socket, head, socket => {
        wsServer.emit("connection", socket, request);
      });
    });

    // Create websocket server to talk to the browser
    wsServer.on("connection", socket => {
      socket.on("message", message => {
        const payload = JSON.parse(message)
        if (payload.type == "PING") {
          socket.send(JSON.stringify({'type': "PONG"}));
        } else {
          console.log("unhandled message", message);
        }
      });
      console.log("Connection to browser established.");
    });
  });
};

// Send a javascript object to the browsers
// currently viewing index.html.
module.exports.sendDataToBrowser = function sendDataToBrowser(data) {
  wsServer.clients.forEach(function each(client) {
    client.send(JSON.stringify(data));
  });
};
