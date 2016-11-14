# Hackathon Penang 2016 Workshop
**IMPORTANT:** Download this whole folder as zip and extract it into your preferred directory **OR** git clone the folder.

## CT-ARM installation
1. Download the latest Arduino IDE at [Arduino official website](https://www.arduino.cc/en/Main/Software).
2. Open Arduino IDE, go to File > Preferences, paste the following link at **Additional Boards Manager URLs**: `https://raw.githubusercontent.com/CytronTechnologies/Cytron-ARM-Arduino-URL/master/package_cytron_index.json`
3. Click OK, then go to **Tools > Board > Boards Manager**. Find Cytron ARM Boards and click Install. It will take a few minutes.
4. After the installation complete, you should find CT-ARM listed under **Tools > Board**. Select CT-ARM.
5. Next, connect CT-ARM to your PC using Micro USB cable and proceed with FTDI driver installation (Please download the driver [here](http://www.ftdichip.com/Drivers/VCP.htm)). If you already using CT-UNO before, your PC should be able to detect the driver.
6. Once complete, select proper COM port under **Tools > Port**.
7. For testing purpose, open Blink example from **File > Examples > 01.Basics > Blink**, and upload to CT-ARM.

> More detailed info [here](http://tutorial.cytron.com.my/2016/02/15/ct-arm-beta-test/)

## LoRa Arduino Library Installation
1. Download the zip file from <a href="https://github.com/CytronTechnologies/arduino-device-lib" target="_blank">here</a>.
2. Open Arduino IDE, go to **Sketch > Include Library > Add .ZIP Library**, choose the downloaded zip file and click Open.
3. Open `DeviceInfo` example from **File > Examples > TheThingsNetwork**, and upload to CT-ARM.
4. Open Serial Monitor and search for DevEUI shown. Copy the DevEUI at somewhere else because we are going to use it later.

## User Registration
1. Visit this link https://orbiwise-user-registration-bengchet.c9users.io/registration to register a new account.
2. If the account is successfully registered, the webpage will redirect you to [Orbiwise login page](https://guestnet-malaysia.orbiwise.com/welcome.html), where you can sign in with account username and password.

## Device Registration
1. Once you have login to the account, go to **My Devices > List of Devices**.
2. Click `Add Device` to register your LoRa device.
3. Choose `Personalized` as registration type.
4. Fill in DevEUI, AppEUI(optional), Comment(optional), DevAddr, NwkSkey and AppSKey. We can use generated keys derived from LoRa shield devEUI via https://orbiwise-user-registration-bengchet.c9users.io/generate. Copy all the generate keys at somewhere else for later use. 
5. At **LoRa Parameters** tab, register the device as `Class A` device.
6. Click `Add Device` to complete device registration.

## Sending data to Orbiwise
1. Open example sketch `Workshop` from **File > Examples > TheThingsNetwork**.
2. Modify devAddr, nwkSKey and appSKey in the sketch.
3. Modify the payload in the sketch (optional).
4. Upload to CT-ARM.
5. Open Serial Monitor to view the progress of LoRa device.
6. Go to [Orbiwise login page](https://guestnet-malaysia.orbiwise.com/welcome.html) (make sure you have login), access **My Devices > List of Devices**.
7. Choose your registered device, right-click **action**, choose **View Data**.
8. If your device is sending the data properly, you should be able to view the data. Click `refresh` to view any new coming data.

## Node-RED installation
Node-RED allows you to create simple server applications using GUI.
> More details, please refer [here](https://github.com/CytronTechnologies/Hackathon-Penang-2016/tree/master/Applications/NodeRed).
