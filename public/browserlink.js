import handleBackendMessage from "/owncastmessage.js";

const wsUrl = `${location.protocol === "https:" ? "wss" : "ws"}://${
  location.host
}/websocket`;

const ws = new WebSocket(wsUrl);

ws.onopen = () => {
  setInterval(() => {
    ws.send(JSON.stringify({ type: "PING" }));
  }, 10000);
};

ws.onmessage = evt => {
  try {
    const payload = JSON.parse(evt.data);
    // Don't pass along PONGs.
    if (payload.type === 'PONG') {
      return;
    }
    
    console.log(handleBackendMessage);
    handleBackendMessage(payload);
  } catch {}
};
