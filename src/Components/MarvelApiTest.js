import MD5 from 'crypto-js/md5';


var privateKey = "f1f3a993968d5473641680b62ecda40bc69337ef"; 
var publicKey = '80465148c83b1065bca44bc3e6fd3e83';


// Makes time stamp and converts that and the keys into a string for each request per marvel's documentation
function getResponse () {
    let baseUrl = 'https://gateway.marvel.com/v1/public/characters?';
    var timeStamp = new Date().getTime();
    var stringtoHash = timeStamp+privateKey+publicKey;
    const hash = MD5(stringtoHash);

    
    var marvelUrl = baseUrl + '&ts=' + timeStamp + '&apikey=' + publicKey + '&hash=' + hash;
    console.log(marvelUrl);

// fetches and sifts through data
    fetch(marvelUrl, {mode: 'cors'})
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response.data);
        });
    
    getResponse();     
}

export default getResponse;

