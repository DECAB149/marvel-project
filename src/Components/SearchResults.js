import React from 'react';


function SearchResults ({info, img, charName, togglePreview }) {




    return (
        <div >
            <div className='resultsContainer'>
                <img src={img} alt=''></img>
                <p> {charName}</p>
                <p>{info} </p>
                <button onClick={togglePreview}>Search Again?</button>
            </div>
        </div>
    )
}

export default SearchResults;