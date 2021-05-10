import React, { useState } from 'react';
import MD5 from 'crypto-js/md5';

//Component for button and call to api
function SubmitButton (props) {
//api keys put her for simplicity
    var privateKey = "f1f3a993968d5473641680b62ecda40bc69337ef"; 
    var publicKey = '80465148c83b1065bca44bc3e6fd3e83';
    let baseUrl = 'https://gateway.marvel.com/v1/public/characters?';

//state changes for user input
    const [name, setName] = useState();

    const handleChange = (e) => {
        setName(e.target.value);
    }
//makes time stamp per Marvel Documentation and hashes data
//also creates complete url
    var timeStamp = new Date().getTime();
    var stringtoHash = timeStamp+privateKey+publicKey;
    const hash = MD5(stringtoHash);
    var marvelUrl = baseUrl + 'name=' + name + '&ts=' + timeStamp + '&apikey=' + publicKey + '&hash=' + hash;
    console.log(marvelUrl);

//handles the api call and specific json data requested
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(marvelUrl, {mode: 'cors'})
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response.data);
        });
    }
    
    
//basic form with button
    return (
        <form onSubmit={e => {handleSubmit(e)}}> 
        <label>Search Characters Here</label>
        <input
            name='marvelSearch'
            type='text'
            value={name}
            onChange={handleChange}>
            </input>
        <button
            className='submitButton'
            onSubmit={handleSubmit}>
                Enter
            </button>
      </form>
    )
}

export default SubmitButton;