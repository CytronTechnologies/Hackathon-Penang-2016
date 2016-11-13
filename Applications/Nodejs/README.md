# Node JS Application

This is an example of Node JS application which allows the user to retrieve the data from Orbiwise Server and create his or her own application. 

## Prerequisite

* Node JS - [See here for how to install](https://nodejs.org/en/)

## How to run the example
* After download or git clone Hackathon-Penang-2016, go to **Hackathon-Penang-2016 > Applications > Nodejs**.

* Run the following command in command window to install all library dependancies:
```npm install```
* Open the file <b>ubiq-ws-client-hackathon.js</b>. Change `YOUR_USER_ID` and `YOUR_PASSWORD` to your account username and password. After edit, save the file.<br>
```c
var conf = {
   host: "guestnet-malaysia.orbiwise.com",
   port: null,
   userid: "YOUR_USER_ID",
   password: "YOUR_PASSWORD"
};
```
* Run the following command in command window in the same directory:
```c
node ubiq-ws-client-hackathon.js
```
**OR**
```c
npm start
```
* Navigate to //localhost:8080 in your web browser. 

**NOTE:** The raw data obtained from Orbiwise server are in base64 encoded string. **convert.js** provides a small function to decode the raw data to a byte array. User can use it to tranform to more useful data.

