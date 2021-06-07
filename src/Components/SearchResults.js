import React from 'react';
import SubmitBtn from './Buttons';

function SearchResults ({info, img, charName, togglePreview }) {




    return (
        <div >
            <div className='resultsContainer'>
                <img src={img} alt=''></img>
                <p> {charName}</p>
                <p>{info} </p>
                <div className='submitbtnWrapper'onClick={togglePreview}>
                <SubmitBtn />
                </div>
            </div>
        </div>
    )
}

export default SearchResults;