# Web push demo
Demo project for donig web push using Vapid as preparation for implementing it in [SigmaChat](https://github.com/SigmaProductions/SigmaChatClient)

Dependent on:
- web-push (TODO remove that since I have to do that on F# which doesn't have webpush lib)
- express

## Running:
Change `test@gmail.com` in server.js

```bash
npm i
node server.js
```

On page click enable notifications first then send push notification (it subscribes and per one subscription sends one notifiation since i didint want to deal with storing sub and for demo it sufficed)
