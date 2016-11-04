function base64Decode(data){
	if (typeof Buffer.from === "function") {
	    // Node 5.10+
	    return Buffer.from(data, 'base64'); // Ta-da
	} else {
	    // older Node versions
	    return new Buffer(data, 'base64'); // Ta-da
	}
}

//Convert byte Array to hex string
function toHexString(byteArray) {
  return byteArray.map(function(byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('')
}

// conversion function
var conversion = function(data){

        var bytes = base64Decode(data);
	var message = {};

	//Conversion starts here
	//You can start doing conversion and return converted data as message
        //but now we simply return bytes
	message = toHexString(bytes);
	
	return message;
}


module.exports = {
	convert: conversion	
}
