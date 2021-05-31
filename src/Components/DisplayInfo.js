import React from 'react';
import SearchResults from './SearchResults';

const DisplayPage = ({showPage, togglePreview, info, img, charName}) => {

    return(
        <div style={{ display: showPage ? 'block' : 'none'}}>
            <SearchResults info={info} img={img} charName={charName} togglePreview={togglePreview} /> 
        </div>
    );
}
export default DisplayPage;