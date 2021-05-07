import React from 'react';
import MD5 from 'crypto-js/md5';

var privateKey = "f1f3a993968d5473641680b62ecda40bc69337ef"; 
var publicKey = '80465148c83b1065bca44bc3e6fd3e83';

// Makes time stamp and converts that and the keys into a string for each request
function GetResponse () {
    let baseUrl = 'https://gateway.marvel.com/v1/public/characters';
    var timeStamp = 1
    var stringtoHash = timeStamp + privateKey + publicKey;
    const hash = MD5(stringtoHash);

    var marvelUrl = baseUrl + '&ts=' + timeStamp + '&apikey=' + publicKey + '&hash=' + hash;

    console.log(marvelUrl);
    
    fetch(marvelUrl, {mode: 'no-cors'})
        .then(response => {
            console.log(response)
        })
        

    return (
        <div>
            hi
        </div>
    )
}



export default GetResponse;

// figure out hashing
//review calling json data
// double check that api is actually being called