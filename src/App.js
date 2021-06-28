import React, { useState } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import DisplayPage from './Components/DisplayInfo';
import MD5 from 'crypto-js/md5';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './App.css';

function App() {
  const [input, setInput] = useState(null);
  const [showPage, setShowPage] = useState(false);
  const [charName, setCharName] = useState(null);
  const [img, setImg] = useState(null);
  const [info, setInfo] = useState(null);


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
            const img = response.data.results[0].thumbnail.path + '/standard_amazing.' + response.data.results[0].thumbnail.extension;
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
      <Header />
      <div className='pageContents'>
      <Typography component="div" align="center" style={{ backgroundColor: 'white', height: '100vh',  }}>        
      <Grid container spacing={2} > 
          <Container maxWidth='md' >
            <Grid container spacing={2} style={{ display: showPage ? 'none' : 'block' }}>
              <Grid item xs={12}>
                </Grid>
              <Grid item xs={12}>
                </Grid>
              <Grid item xs={12}>
                </Grid>
              <Grid item xs={12}>
                </Grid>

              <Grid container spacing={2}>
                  <Grid item xs={4}>
                    </Grid>
                  <Grid item xs={6}>
                    <h1 className='searchHeader'>Marvel Api Search</h1>
                  </Grid>
              </Grid>
              <Form handleChange={handleChange} input={input} handleSubmit={handleSubmit} showPage={showPage} />
            </Grid>
            <DisplayPage togglePreview={togglePreview} showPage={showPage} img={img} charName={charName} info={info} />
          </Container>
      </Grid>
      </Typography>
      </div>
    </div>
  );
}

export default App;
