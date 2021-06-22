import React from 'react';
import SubmitBtn from './Buttons';


import Grid from '@material-ui/core/Grid';



function SearchResults ({info, img, charName, togglePreview, showPage}) {




    return (
        <div >
            <Grid container spacing={2}>
                <p> {charName} </p> 
                <img src={img} alt=''></img>
                <p>{info} </p>
                <div className='submitbtnWrapper'onClick={togglePreview}>
                <SubmitBtn />
                </div>
            </Grid>
        </div>
    )
}

export default SearchResults;

// then cedit this component so it displays the info in the same container