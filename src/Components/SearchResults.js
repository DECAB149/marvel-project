import React from 'react';
import SubmitBtn from './Buttons';
import { responsiveFontSizes, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import Grid from '@material-ui/core/Grid';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function SearchResults ({info, img, charName, togglePreview, showPage}) {

    return (
        <div className='cards'>
            <Grid container spacing={2}>
                <ThemeProvider theme={theme}>
                    <Grid item xs={10}>
                        <Typography variant='h6'>
                            <h1 className='cardName' > {charName} </h1> 
                        </Typography>
                    </Grid>

                    <Grid item xs={8}>
                        <p> {info} </p>
                    </Grid>

                    <Grid item xs={2}>
                        <img src={img} alt=''></img>
                    </Grid>

                    

                        <div className='submitbtnWrapper'onClick={togglePreview}>
                        <SubmitBtn />
                        </div>
                </ThemeProvider>
            </Grid>
        </div>
    )
}

export default SearchResults;

// then cedit this component so it displays the info in the same container