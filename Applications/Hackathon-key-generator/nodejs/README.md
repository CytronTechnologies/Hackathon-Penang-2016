# Hackathon Key Generator using Node JS

This Node JS application is to generate security keys for devEUI of your LoRa device. 

Keys generated:
* DevAddr
* AppEUI
* AppKey
* NwkSKey
* AppSKey

Every LoRa shield/device has a unique devEUI. Please ask assistance from authorities if fail to retrieve devEUI.

## Prerequisite
* NodeJS - [See here for how to install](https://nodejs.org/en/)

## To obtain the keys

In this directory, run the following command:
```c
node hackathon-key-generator.js <your_deveui_here>
```
> For example, `node hackathon-key-generator.js 0004A30B001B92CA`
