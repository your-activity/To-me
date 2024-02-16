// Fill this in to perform some action based on messages sent
// from the backend.
export default function handleBackendMessage(message) {
  console.log('message from the backend received', message);
  
  document.write(`A message came from the backend: <pre>${JSON.stringify(message)}</pre>`)
}