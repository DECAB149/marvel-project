import React from 'react';
import SubmitBtn from './Buttons';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 500,
        },
    },
}));

export default function Form ({handleChange, handleSubmit, showPage, props }) {
    const classes = useStyles();

    return(
    
        <div className='formItems'>
            <div style={{ display: showPage ? 'none' : 'block' }}>
                <Grid container spacing={2}> 
                    <form className={classes.root} noValidate autoComplete='off' id='form'>
                        <Grid container spacing={2}>
                            <Grid item xs={7}>
                            </Grid>
                            <Grid item xs={5} > 
                                <Input placeholder='Search for Characters' inputProps={{ 'aria-label': 'description' }} onChange={handleChange} />
                            </Grid>
                            
                            <Grid item xs={6}> 
                                <div className='submitbtnWrapper'onClick={handleSubmit}>     
                                    <SubmitBtn />
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </div>
        </div>

    )
}