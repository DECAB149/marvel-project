import React from 'react';

function MarvelApi() {
    const thumbnail = document.querySelector('img');
    return (
    <div>fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=f1f3a993968d5473641680b62ecda40bc69337ef', {mode: "cors"})
        .then(function(response) {
            console.log(response.json());
        })
    </div>
    );

}

export default MarvelApi