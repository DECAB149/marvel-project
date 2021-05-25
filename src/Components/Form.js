import React from 'react';


export default function Form (props) {



    return(
    <div>
        <form >
            <label>Search Characters Here</label>
            <input
                name='marvelSearch'
                type='text'
                onChange={props.handleChange}>
            </input>

            <button
            className="submitButton"
            onClick={props.handleSubmit} >
                Search
            </button>
        </form>
    </div>
    )
}