import React from 'react';


const DisplayPage = ({showPage, togglePreview, info, img, charName}) => {

    return(
        <div style={{ display: showPage ? 'block' : 'none'}}>
            <button onClick={togglePreview}>Search Again?</button>
            <img src={img} alt=''></img>
            <p>hi {charName}</p>
            <p>hi {info} </p>
        </div>
    );
}
export default DisplayPage;