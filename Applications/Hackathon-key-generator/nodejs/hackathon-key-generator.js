const crypto = require('crypto');
const md5 = crypto.createHash('md5');
const sha1 = crypto.createHash('sha1');
const sha256 = crypto.createHash('sha256');
var devAddr ='';
var appEUI ='';
var appKey ='';
var nwksKey ='';
var appsKey ='';

console.log('\n=============================================================');
console.log('Simple security key generator for your LoRa device\n');
console.log('You can get DevEUI from your LoRa device');
console.log('Please refer to authorities if you don\'t have the DevEUI');
console.log('=============================================================\n');

if(process.argv[2]){

  console.log('DevEUI : '+process.argv[2].toUpperCase());
  
  var input = process.argv[2].toUpperCase();

  sha1.on('readable', () => {
  var sha1_data = sha1.read();
  if (sha1_data){
    
    var str = sha1_data.toString('hex');

    appEUI = str.substring(0, 16);
    devAddr = str.substring(32, 40);
    
    md5.on('readable', () => {
    	var md5_data = md5.read();
	if(md5_data){
		appsKey = md5_data.toString('hex');
		console.log("DevAddr: "+devAddr.toUpperCase());
    		console.log("AppEUI : "+appEUI.toUpperCase());
		console.log("AppKey : "+appsKey.toUpperCase());
	} 	
    });
    md5.write(sha1_data.slice(0, 16));
    md5.end();
  }

  });

  sha256.on('readable', () => {
  var sha256_data = sha256.read();
  if (sha256_data){
    //console.log(sha256_data.toString('hex'));
    var str = sha256_data.toString('hex');

    nwksKey = str.substring(0, 32);
    appsKey = str.substring(32, 64);
    console.log("NwkSKey: "+nwksKey.toUpperCase());
    console.log("AppSKey: "+appsKey.toUpperCase());
  }

  });

  sha1.write(input);
  sha1.end();
  sha256.write(input);
  sha256.end();
  console.log();

}

else{
  console.log("[ERROR] Please enter DevEUI!\n");
}
