const crypto = require('crypto');
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

  var sha1_data = crypto.createHash('sha1').update(input).digest('hex');
  appEUI = sha1_data.substring(0, 16).toUpperCase();
  devAddr = sha1_data.substring(32, 40).toUpperCase();
  var md5_data = crypto.createHash('md5').update(new Buffer(sha1_data, "hex").slice(0, 16)).digest('hex');
  appKey = md5_data.toUpperCase();
          
  var sha256_data = crypto.createHash('sha256').update(input).digest('hex');
  nwksKey = sha256_data.substring(0, 32).toUpperCase();
  appsKey = sha256_data.substring(32, 64).toUpperCase();

  console.log("DevAddr: "+devAddr.toUpperCase());
  console.log("AppEUI : "+appEUI.toUpperCase());
  console.log("AppKey : "+appKey.toUpperCase());
  console.log("NwkSKey: "+nwksKey.toUpperCase());
  console.log("AppSKey: "+appsKey.toUpperCase());
  console.log();

}

else{
  console.log("[ERROR] Please enter DevEUI!\n");
}
