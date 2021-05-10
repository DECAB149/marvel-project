import React, { useState, useEffect } from 'react';
import getResponse from './MarvelApiTest';

function SubmitButton () {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        getResponse();
    }
    const [name, setName] = useState();

    const handleChange = (e) => {
        setName(e.target.value);
    }

 

    return (
        <form onSubmit={e => {handleSubmit(e)}}> 
        <label>Search Here</label>
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