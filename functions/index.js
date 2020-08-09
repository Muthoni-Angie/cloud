const functions = require('firebase-functions')
const superagent = require('superagent')

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.AngelaTest = functions.https.onRequest((request, response) => {

    let url = 'https://api.demo.reja.ai/auth'
    let auth_data = {
        "email": "hello@intelipro",
        "dashboard_id": "interview",
        "password": "interview07August"
    }

    superagent.get(url)
        .set('Content-Type', 'application/json')
        .send(auth_data)
        .then(res => {
            console.log(res.body.access_token)
            return true;
        })
        .catch(error => {
            console.log(error)
        })
    response.send("We have lift off!");
});