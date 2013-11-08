require.config({
  baseUrl: "lib",
  paths: {
    "jquery": "jquery/jquery",
    "underscore": "underscore-amd/underscore",
    "backbone": "backbone-amd/backbone",
    "app": "../app"
  }
});
require(["app/app"]);