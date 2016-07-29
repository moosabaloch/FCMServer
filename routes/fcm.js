/**
 * Created by Moosa on 7/30/2016.
 */
var FCM = require('fcm-push');
var express = require('express');
var router = express.Router();

router.post('/notify', function (req, res, next) {
/*

    {"server_key":"Moosa",
        "user_id":"4567m4mn5646",
        "data_json":{
        "img_url":"img.png",
            "description":"description"
    },
        "notify_title":"New Message",
        "notify_body":"Friend Commented on post"
    }
*/
    var serverKey = req.body.server_key;
    var userId = req.body.user_id;
    console.log("Server Key is: " + req.body.server_key);
    console.log("User Token is: " + req.body.user_id);
    console.log("Data key is: " + req.body.data_json);
    console.log("Notification Title key is: " + req.body.notify_title);
    console.log("Notification Body key is: " + req.body.notify_body);

    var fcm = new FCM(serverKey);

    var message = {
        to: userId, // required

        data: {
            my_data: JSON.parse(JSON.stringify(req.body.data_json))
        },
        notification: {
            title:  req.body.notify_title,
            body: req.body.notify_body
        }
    };

    fcm.send(message, function (err, response) {
        if (err) {
            res.send("Error Sending Notification: !"+err.toString());
        } else {
            req.send("Notification Successfully sent with response: ", response.toString());
        }
    });
});
router.post('/jsonpost', function (req, res, next) {

    res.send(JSON.parse(JSON.stringify(req.body.test1)));
});
router.post('/jsonformat', function (req, res, next) {
    var  data= {"server_key":"your_server_key",
        "user_id":"4567m4mn5646",
        "data_json":{
            "your_data":"dummy_data",
            "img_url":"img.png",
            "description":"description"
    },
        "notify_title":"New Message",
        "notify_body":"Friend Commented on post"
    };
    res.send(JSON.stringify(data));
});

module.exports = router;