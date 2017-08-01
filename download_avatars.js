var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "Avleen30";
var GITHUB_TOKEN = "5c8c07a0740e3ff76a56cca63e4daa6d3b853ab7";

function getRepoContributors(repoOwner, repoName, cb){
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);

  var options = {
  url: requestURL,
  headers: {
    'User-Agent': 'request'
  }
};

  request(options, function(err, response, body) {
    var parse= JSON.parse(body);
    console.log()
    cb(err, parse);
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  result.forEach(function(user){
    console.log(user.avatar_url);

  })
});


function downloadImageByURL(url, filePath) {
  var request = require('request');
  var fs = require('fs');

  request.get(url)
         .on('error', function (err){
          console.log(err);
          })
         .on('response', function (response) {
          console.log('Response Status Code: ', response.statusCode);
          })
         .pipe(fs.createWriteStream(filePath));
    }


