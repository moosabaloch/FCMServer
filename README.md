Application URLS<br>
1, Home page: https://fcmserver.herokuapp.com/ <br>
2, Check Json Format: https://fcmserver.herokuapp.com/fcm/jsonformat<br>
3, Check Json Post Request: https://fcmserver.herokuapp.com/jsonpost<br>
4, POST Notification: https://fcmserver.herokuapp.com/notify<br>
At home page its simple page
In 2nd link you can take help how the data should be sent to 4 link to notify user.
in 3rd link you you can post json data and it'll return your json in response 
first you must have to test 3rd link if the data will be reflected as you sent then you can continue to 4th link .
<br><br>
<br>


JSON Format Should be : 

  <pre>{
  "server_key": "your_server_key",
  "user_id": "4567m4mn5646",
  "data_json": {
    "your_data": "dummy_data",
    "img_url": "img.png",
    "description": "description"
  },
  "notify_title": "New Message",
  "notify_body": "Friend Commented on post"
}
