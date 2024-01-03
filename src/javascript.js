const publicVapid = "BBU_Y1fiXCc7oPu0tmeJDNzcGaPRp5q02LUNt3qFP-5zJTOpZ0Weh1BR-7qtrQdaNlhVxXsZVtmJ82CkddTURE8";

function askNotificationPermission() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        console.log("This browser does not support notifications.");
    } else {
        Notification.requestPermission().then((permission) => {
            console.log("granted")
        });
    }
}

function registerServiceWorker() {
    navigator.serviceWorker
        .register("serviceworker.js")
        .then((serviceWorkerRegistration) => {
            serviceWorkerRegistration.pushManager.subscribe({ applicationServerKey: publicVapid, userVisibleOnly: true }).then(
                (pushSubscription) => {
                    console.log(JSON.stringify(pushSubscription))
                    fetch('http://localhost:3000/sub', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(pushSubscription)
                    })
                })
                .catch((err) => {
                    console.error(`Error during getSubscription(): ${err}`);
                });
        });
}