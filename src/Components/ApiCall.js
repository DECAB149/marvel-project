import MD5 from 'crypto-js/md5';

//Component for button and call to api
function marvelData (name) {
//api keys put her for simplicity
    var privateKey = "f1f3a993968d5473641680b62ecda40bc69337ef"; 
    var publicKey = '80465148c83b1065bca44bc3e6fd3e83';
    let baseUrl = 'https://gateway.marvel.com/v1/public/characters?';


    var timeStamp = new Date().getTime();
    var stringtoHash = timeStamp+privateKey+publicKey;
    const hash = MD5(stringtoHash);
    var marvelUrl = baseUrl + 'name=' + name + '&ts=' + timeStamp + '&apikey=' + publicKey + '&hash=' + hash;
    console.log(marvelUrl);
    

      return fetch(marvelUrl, {mode:'cors'})
      .then(response => response.json())
      .then(response => {
          const charName = response.data.results[0].name;
          const Img = response.data.results[0].thumbnail.path + '/portrait_small.' + response.data.results[0].thumbnail.extension;
          const Info = response.data.results[0].description;
          console.log(response.data.results[0]);
          console.log(marvelUrl);
      }); 
}

   
export default marvelData;