# Build an Owncast addon

## In short

- Edit `views/index.html` to add your web content (for overlays or whatever you want to make).
- Edit `myapp.js` to change your backend handling logic of incoming Owncast messages from webhooks.
- Edit `public/owncastmessage.js` to change your frontend handling of incoming messages passed from the backend.

By adding your own ideas to this starter project you can build some cool stuff on top of Owncast. Here's what to do:

1. In your Owncast admin create a webhook pointing to this URL + `/owncast` that sends chat messages.
1. In your Owncast admin create an access token with system and/or user chat access.
1. Edit the `.env` file and put this new token in the `OWNCAST_ACCESS_TOKEN` field.
1. Edit the `.env` file and add your server URL as `OWNCAST_INSTANCE`.
1. Edit `myapp.js` and fill in the `handleOwncastMessage` function to handle inbound chat messages. Do whatever you want there!
1. If you want to send a message back to the Owncast chat fire `chat.sendOwncastSystemMessage` or `chat.sendOwncastUserMessage` (depending what you're looking to do).
1. If you want to send a message to the browser pass an object to `browserlink.sendDataToBrowser` and it'll be handled in the frontend browser javascript.
1. Fill in `public/owncastmessage.js` function `handleBackendMessage` to handle this message sent from the backend in your browser's javascript.

## See a test request

1. Edit `test/chatMessageTest.sh` and put in the URL of your endpoint.
1. If you're using Glitch go to **tools** -> **terminal** to display the terminal. Otherwise open a terminal.
1. Open the web page for your webhook service, for example https://owncast-addon.glitch.me/.
1. Run `sh test/chatMessageTest.sh` on the terminal.
1. See the message show up on your web page and log out to your server log.

## Environment variables

If you're using Glitch.com then just fill out the `.env` file.

If you're not using Glitch the [environment variables](https://nodejs.dev/learn/how-to-read-environment-variables-from-nodejs) in `env-example` need to be provided to your app, either via a `.env` file or through passing it along to your app on the command line.
If you want to use a `.env` file you can just rename `env-example` to `.env` and fill out the file. Directions on how to pass a `.env` file to your app [can be found here](https://coderrocketfuel.com/article/how-to-load-environment-variables-from-a-.env-file-in-nodejs).
