import React from 'react';

const form = document.querySelector('form');
const submitButton = document.querySelector('.submitButton');
form.addEventListener('submit', handleSubmit);
submitButton.addEventListener('click', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    fetchUserQuery();
}

function fetchUserQuery () {
    var input = document.querySelector('input[type="text"]');
    var userQuery = input.value;
}


function SubmitButton () {
    return (
        <form> 
        <label htmlFor='search'>Search Here</label>
        <input id='search' name='marvelSearch' type='text'></input>
        <button className='submitButton'>Enter</button>
      </form>
    )
}

export default {SubmitButton, handleSubmit};