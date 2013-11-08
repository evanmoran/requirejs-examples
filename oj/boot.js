require.config({
  baseUrl: "lib",
  paths: {
    "jquery": "jquery/jquery",
    "underscore": "underscore-amd/underscore",
    "backbone": "backbone-amd/backbone",
    "oj": "oj/oj",
    "oj-twitter-button": "oj-twitter-button/oj.TwitterButton",
    "app": "../app"
  }
});
require(["app/app"]);