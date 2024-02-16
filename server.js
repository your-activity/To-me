// Edit myapp.js to get started.
// After reading the README.  Always read the README.

const webserver = require("./lib/webserver.js");
const myApp = require("./myapp.js");

// Start the server and link between the backend and frontend.
const server = webserver.setup(myApp);
myApp.setup(webserver);

// Hit the /test endpoint to verify things are working.
// Feel free to create more if you'd like.
server.get("/test", (request, response) => {
  response.json({ response: "Things work!" });
});

// Serve index.html
server.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

webserver.start();
