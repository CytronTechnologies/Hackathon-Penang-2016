module.exports = function (RED) {
  "use strict";

  function Orbiwise (config) {
    RED.nodes.createNode(this, config);

    var node = this

    node.app = config.app;
    node.config = RED.nodes.getNode(node.app);

    var client = node.config.client
    if (!client) {
      node.error('No app set');
      node.status({
        fill:  'red',
        shape: 'dot',
        text:  'error',
      });
      return
    }

    client.on('open', function () {
      node.log('Connected to Orbiwise application ')
      node.status({
        fill:  'green',
        shape: 'dot',
        text:  'connected',
      });
    });

    // get a message from a device
    client.on('message', function (msg) {
      node.log("Received data on Orbiwise websocket");
      node.send(JSON.parse(msg));
    });

    client.on('error', function (err) {
      node.error('Error on connection to Orbiwise ' + ': ' + err);
      node.status({
        fill:  'red',
        shape: 'dot',
        text:  'error',
      });
    });
  }

   RED.nodes.registerType("orbiwise", Orbiwise)
}
