var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "Avleen30";
var GITHUB_TOKEN = "5c8c07a0740e3ff76a56cca63e4daa6d3b853ab7";

function getRepoContributors(repoOwner, repoName, cb) {

}

var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
console.log(requestURL);

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});