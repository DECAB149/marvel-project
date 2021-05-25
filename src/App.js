import React, { useState } from 'react';
import Form from './Components/Form';
import DisplayPage from './Components/CharacterPage';
import MD5 from 'crypto-js/md5';

function App() {
  const [input, setInput] = useState(null);
  const [showPage, setShowPage] = useState(false);
  const [charName, setCharName] = useState(false);
  const [img, setImg] = useState(false);
  const [info, setInfo] = useState(false);


  const handleChange = (e) => {
    setInput(e.target.value);   
}
  
function marvelApi (input) {
  //api keys put her for simplicity
      var privateKey = "f1f3a993968d5473641680b62ecda40bc69337ef"; 
      var publicKey = '80465148c83b1065bca44bc3e6fd3e83';
      let baseUrl = 'https://gateway.marvel.com/v1/public/characters?';
  
  
      var timeStamp = new Date().getTime();
      var stringtoHash = timeStamp+privateKey+publicKey;
      const hash = MD5(stringtoHash);
      var marvelUrl = baseUrl + 'name=' + input + '&ts=' + timeStamp + '&apikey=' + publicKey + '&hash=' + hash;
      console.log(marvelUrl);
      
  
        return fetch(marvelUrl, {mode:'cors'})
        .then(response => response.json())
        .then(response => {
            const name = response.data.results[0].name;
            setCharName(name);
            const img = response.data.results[0].thumbnail.path + '/portrait_small.' + response.data.results[0].thumbnail.extension;
            setImg(img);
            const info = response.data.results[0].description;
            setInfo(info);
            console.log(response.data.results[0]);
            console.log(marvelUrl);
        }); 
  }

  const togglePreview = () => {
    showPage ? setShowPage(false) : setShowPage(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    marvelApi(input);
    togglePreview();
  }

  return (
    <div className="App">
      <Form handleChange={handleChange} input={input} handleSubmit={handleSubmit} togglePreview={togglePreview} />
      <DisplayPage togglePreview={togglePreview} showPage={showPage} img={img} charName={charName} info={info} />
    </div>
  );
}

export default App;


// I need to create state, setstate pairs for all relevant api info
// put into character page
// make sure it displays then remove or search on screen or transform it to a "search again"
// make a container to display character data