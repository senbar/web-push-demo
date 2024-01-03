const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const webpush = require('web-push')

const app = express();
const port = 3000; // You can use any available port
const privateVapid = "mmM403kbUW3ahXNMxObfJTH1jlwtG6h8tD1DV2Zx3Y0";
const publicVapid = "BBU_Y1fiXCc7oPu0tmeJDNzcGaPRp5q02LUNt3qFP-5zJTOpZ0Weh1BR-7qtrQdaNlhVxXsZVtmJ82CkddTURE8";

app.use(express.static(path.join(__dirname, 'src')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.post('/sub', (req, res) => {
    const sub = req.body;
    sendNotifications([sub])
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


function sendNotifications(subscriptions) {
    const notification = JSON.stringify({
        title: "test notification",
        options: {
            body: `Test body`
        }
    });

    const vapidDetails = {
        subject: 'mailto:test@gmail.com',
        publicKey: publicVapid,
        privateKey: privateVapid
    }

    const options = {
        TTL: 10000,
        vapidDetails: vapidDetails
    };

    subscriptions.forEach(subscription => {
        const endpoint = subscription.endpoint;
        webpush.sendNotification(subscription, notification, options)
            .then(result => {
                console.log(`result ${result.statusCode}`);
            })
            .catch(error => {
                console.log(`error ${error} `);
            });
    });
}