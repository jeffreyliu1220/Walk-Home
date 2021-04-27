const functions = require("firebase-functions");
const requestLib = require("request");
const geolib = require('geolib');
var admin = require("firebase-admin");
var cors = require("cors")({
    origin: true,
});

var app = admin.initializeApp();
var db = admin.database();
var ref = db.ref("/buddies");
let buddies = {};
ref.on("value", function(snapshot) {
    buddies = snapshot.val();
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
/*exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
*/

exports.getClosestBuddy = functions.https.onRequest((request, response) => {
    

    //respond to CORS preflight requests
    /*if (req.method === 'OPTIONS') {
        //res.header('Content-Type','application/json');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'POST');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.status(204).send('');
    }
    let headers= {'Access-Control-Allow-Origin':'x'};
    */
    return cors(request, response, () =>{
        const userPos = request.body;
        let minDist = 100000;
        let closeBuddy = "";
        for(let buddy in buddies){
            if(buddies[buddy].status === "waiting"){
                let dist = geolib.getDistance(userPos, buddies[buddy].position);
                if(dist < minDist){
                    minDist = dist;
                    closeBuddy = buddy;
                }
            }
        }
        if(closeBuddy === ""){
            response.send("No one is available right now!");
        }else{
            let resp = {};
            resp.name = closeBuddy;
            resp.position = buddies[closeBuddy].position;
            resp.status = buddies[closeBuddy].status;
            response.send(resp);
        }
    });
    
});

exports.helloFriends = functions.https.onRequest((request, response) => {
    response.send("Enjoy your movie friends: Kushal and Ayaan :)");
});
