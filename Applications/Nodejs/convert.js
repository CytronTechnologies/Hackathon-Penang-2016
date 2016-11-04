function base64Decode(data){
	if (typeof Buffer.from === "function") {
	    // Node 5.10+
	    return Buffer.from(data, 'base64'); // Ta-da
	} else {
	    // older Node versions
	    return new Buffer(data, 'base64'); // Ta-da
	}
}

// conversion function
var conversion = function(data){

        var bytes = base64Decode(data);
	var message = {};

	//conversion starts

	//example

	/*var lat = ((bytes[0] << 24)|(bytes[1] << 16)|(bytes[2] << 8)|bytes[3]) / 10E5;
  	var lng = ((bytes[4] << 24)|(bytes[5] << 16)|(bytes[6] << 8)|bytes[7]) / 10E5;
	message.Lat = lat;
	message.Lng = lng;

  	if(bytes.length > 8){
  		if(String.fromCharCode(parseInt(bytes[8], 10)) == 't'){
			var temp = ((bytes[9] << 8) | bytes[10])/100;
			message.Temp = temp;
  		}
		else if(String.fromCharCode(parseInt(bytes[8], 10)) == 'l'){
  			var light = ((bytes[9] << 8) | bytes[10])/100;
			message.Light = light;
  		}
	}*/
        //simply return bytes
	message = data;

	//return converted data as payload (JSON)
	//return {payload: message};
	return message;
}


module.exports = {
	convert: conversion	
}
