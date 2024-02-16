#!/bin/sh

# Change this to the URL where your webhook endpoint lives.
WEBHOOK_URL="https://owncast-addon.glitch.me/owncast"

echo "Sending fake chat message webhook to $WEBHOOK_URL"

curl -X POST -H "Content-Type: application/json" -d '{"type":"CHAT","eventData":{"author":"Cool User","body":"\u003cp\u003eyo yo yo\u003c/p\u003e","rawBody":"yo yo yo","id":"W9YgXTaMR","visible":true,"timestamp":"2021-01-06T16:08:18.563721163-08:00"}}' $WEBHOOK_URL