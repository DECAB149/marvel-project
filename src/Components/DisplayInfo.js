import React from 'react';
import SearchResults from './SearchResults';
import Container from '@material-ui/core/Container';

const DisplayPage = ({showPage, togglePreview, info, img, charName}) => {

    return(
        <div style={{ display: showPage ? 'block' : 'none' }}>
            <Container maxWidth='md'>
            <SearchResults info={info} img={img} charName={charName} togglePreview={togglePreview} showPage={showPage}/> 
            </Container>
        </div>
    );
}
export default DisplayPage;