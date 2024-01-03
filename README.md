# Web push demo
![image](https://github.com/senbar/web-push-demo/assets/14136582/303425e5-a7f3-4bfb-b63d-9d4337592ac1)

Demo project for doing web push using Vapid as preparation for implementing it in [SigmaChat](https://github.com/SigmaProductions/SigmaChatClient)

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
