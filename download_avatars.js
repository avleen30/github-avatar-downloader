var request = require("request");

console.log("Welcome to the GitHub Avatar Downloader!");

var GITHUB_USER = "Avleen30";
var GITHUB_TOKEN = "5c8c07a0740e3ff76a56cca63e4daa6d3b853ab7";

function getRepoContributors(repoOwner, repoName, cb) {

    //Making Support Command Line Arguments required arguments
    if (!repoOwner  || !repoName) {
    console.log("error")
    return;
    }

    //Creating the requestURL

    var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";
    //console.log(requestURL);

    var options = {
        url: requestURL,
        headers: {
            "User-Agent": "request"
        }
    };

    //parsing the JSON string into an object and pass this object (an array of contributor objects) to the cb function

    request(options, function(err, response, body) {
        var parse = JSON.parse(body);
        console.log()
        cb(err, parse);
    });
}

function callback(err, result) {
    result.forEach(function(user) {
        user.avatar_url;
        downloadImageByURL(user.avatar_url, "avatars/" + user.login + ".jpg")
    })
}


function downloadImageByURL(url, filePath) {
    var request = require("request");
    var fs = require("fs");

    request.get(url)
        .on("error", function(err) {
            console.log(err);
        })
        .on("response", function(response) {
            console.log("Response Status Code: ", response.statusCode);
        })
        .pipe(fs.createWriteStream(filePath));
}

getRepoContributors(process.argv[2], process.argv[3], callback);