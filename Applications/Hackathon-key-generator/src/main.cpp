#include <stdio.h>
#include <openssl/sha.h>
#include <openssl/md5.h>
#include <string>
#include <ctype.h>

char data[17];
int max_value = 0;

using namespace std;

int main()
{
    printf("\n=============================================================\n");
    printf("Simple security key generator for your LoRa device\n\n");
    printf("You can get devEUI from your LoRa device\n");
    printf("Please refer to authorities if you don't have the devEUI\n");
    printf("=============================================================\n\n");
    printf("Please enter DevEUI:");
    scanf("%16s", data);
    
    //convert to uppercase if needed
    for(int i=0;i<sizeof(data);i++){
	data[i] = toupper(data[i]);
    }

    //size_t length = sizeof(data)-1;
    string tmp = data;

    unsigned char md5_hash[16];
    unsigned char sha1_hash[20];
    unsigned char sha256_hash[32];

    SHA1((const unsigned char*)tmp.c_str(), tmp.length(), sha1_hash);
    SHA256((const unsigned char*)tmp.c_str(), tmp.length(), sha256_hash);
    //print dev address

    printf("\nDevAddr:");
    for(int i=16;i<sizeof(sha1_hash);i++)
    	printf("%02X", sha1_hash[i]);
    
    //Get first 16 hex from sha1 result for appEUI, use md5 to make appkey
    
    unsigned char appEUI[16];
    for(int i=0;i<16;i++){
        appEUI[i] = sha1_hash[i];
    }
    MD5(appEUI, sizeof(appEUI), md5_hash);
    
    //appEUI
    printf("\nAppEUI :");
    for(int i=0;i<sizeof(appEUI)/2;i++)
    	printf("%02X", appEUI[i]);

    //appKey
    printf("\nAppKey :");
    for(int i=0;i<sizeof(md5_hash);i++)
    	printf("%02X", md5_hash[i]);

    //network session key
    printf("\nNwkSKey:");
    for(int i=0;i<16;i++)
    	printf("%02X", sha256_hash[i]);

    //apps session key
    printf("\nAppSKey:");
    for(int i=16;i<sizeof(sha256_hash);i++)
    	printf("%02X", sha256_hash[i]);


    printf("\n\nPress any key to continue");
    getchar();
    getchar();

    return 0;
}
