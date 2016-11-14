# Node-RED node for Orbiwise Application
This is Node-RED node which allows user to connect to Orbiwise Server and retrieve data via websocket.

## Prerequisite
* Node-RED - [See here on how to install Node-RED](https://nodered.org/docs/getting-started/installation)

**TIP**: Node JS installation shown in the website no longer exists. Refer [here](https://nodejs.org/en/) to install latest NodeJS package. After Node JS installation, refer to section **[Install Node-RED](https://nodered.org/docs/getting-started/installation#install-node-red)**.

## How to install this node

* After download or git clone Hackathon-Penang-2016.zip, go to **Hackathon-Penang-2016 > Applications > NodeRed > node-red-contrib-orbiwise**. In the directory containing package.json file (as it should be), run this command in command window: 
```c
npm link
```
* Go to Node-RED directory, open command window and run this command: 
```c
npm link node-red-contrib-orbiwise
```
* Install this node in the same Node-RED directory for base64 encode and decode function.
```c
npm install node-red-node-base64
```
> More info on [node-red-node-base64](https://github.com/node-red/node-red-nodes/tree/master/parsers/base64).

## How to use this node

1. Run Node-RED. Navigate to //localhost:1880 at web browser.
2. Drag the **orbiwise** node and **debug** node to the dashboard. Attach these 2 nodes with link.
![alt tag](https://raw.githubusercontent.com/CytronTechnologies/Hackathon-Penang-2016/master/Applications/NodeRed/img/nodered1.png)
3. Double-click the orbiwise node, give a name to the node. Click on 'pencil' icon.
![alt tag](https://raw.githubusercontent.com/CytronTechnologies/Hackathon-Penang-2016/master/Applications/NodeRed/img/nodered2.png)
4. Enter your account username and password and click `Add` after finish. Finally click `Done` to complete configuration for orbiwise node.
![alt tag](https://raw.githubusercontent.com/CytronTechnologies/Hackathon-Penang-2016/master/Applications/NodeRed/img/nodered3.png)
![alt tag](https://raw.githubusercontent.com/CytronTechnologies/Hackathon-Penang-2016/master/Applications/NodeRed/img/nodered4.png)
5. Double-click the **debug** node. Change output from `msg.payload` to `complete msg object`. Click `Done` to complete configuration for debug node.
![alt tag](https://raw.githubusercontent.com/CytronTechnologies/Hackathon-Penang-2016/master/Applications/NodeRed/img/nodered5.png)
6. Click `Deploy` to start the application.
![alt tag](https://raw.githubusercontent.com/CytronTechnologies/Hackathon-Penang-2016/master/Applications/NodeRed/img/nodered6.png)
7. With successful connection to Orbiwise server, 'connected' green dot will be seen underneath orbiwise node.
![alt tag](https://raw.githubusercontent.com/CytronTechnologies/Hackathon-Penang-2016/master/Applications/NodeRed/img/nodered7.png)

With the application running, user should be able to see messages at debug screen if there is any uplink or downlink event of your LoRa device.
