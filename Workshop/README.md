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

## LoRa Arduino Library Installation
1. Go to **Hackathon-Penang-2016 > Applications > Arduino**.
2. Copy `arduino-device-lib` to Arduino libraries folder.
3. Open `DeviceInfo` example from **File > Examples > TheThingsNetwork**, and upload to CT-ARM.
4. Open Serial Monitor and search for DevEUI shown. Copy the DevEUI at somewhere else because we are going to use it later.

## User Registration
1. Visit this link https://orbiwise-user-registration-bengchet.c9users.io/registration to register a new account.
2. If the account is successfully registered, the webpage will redirect you to main Orbiwise login page, where you can sign in with account username and password.

## Device Registration
1. Once you have login to the account, click `Add Device` to register your LoRa device.
2. In this workshop, we only register `personalized` device.
3. We can use generated keys derived from LoRa shield devEUI via https://orbiwise-user-registration-bengchet.c9users.io/generate. Only 3 keys are required for personalized device: `DevAddr`, `NwkSKey` and `AppSKey`.
4. Register the device as `Class A` device.

## Sending data to Orbiwise

## Node-RED installation
