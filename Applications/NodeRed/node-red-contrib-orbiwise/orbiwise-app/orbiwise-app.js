module.exports = function (RED) {
  "use strict";
  var WebSocket = require("ws");

  function OrbiwiseConfig (config) {
    RED.nodes.createNode(this, config);
    var node = this;

    node.username = config.username;
    node.password = config.password;
    node.broker = config.broker;

    var url = "wss://" + node.broker + "/websocket/connect";

    node.client = new WebSocket(url, {
    headers: {
        Authorization: "Basic " + new Buffer(node.username + ":" + node.password).toString("base64")
    }
})

    // clean up
    node.on('close', function (done) {
      node.log('closing websocket connection with Orbiwise');
      node.client.close();
      done();
    })

  }

  RED.nodes.registerType('orbiwise app', OrbiwiseConfig);
}
