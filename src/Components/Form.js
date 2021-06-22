import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 600,
        },
    },
    input: {
        background: 'white',
        color: 'blue',
        width: 400,
    }
}));

export default function Form ({handleChange, handleSubmit, showPage, props }) {
    const classes = useStyles();

    return(
    
        <div className='formItems'>
            <div >
                <Grid container>
                    <Container maxWidth='md'>
                         
                            <form className={classes.root} noValidate autoComplete='off' id='form' onSubmit={handleSubmit}>
                                <Grid container >
                                    <Grid item xs={5}>
                                    </Grid>
                                    <Grid item xs={6} > 
                                        <Input 
                                            placeholder='Search for Characters' 
                                            inputProps={{ className: classes.input, 'aria-label': 'description', }} 
                                            onChange={handleChange} 
                                            endAdornment={
                                                <InputAdornment position='end'>
                                                    <IconButton 
                                                    onClick={handleSubmit}>
                                                    <SearchIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </Grid>
                                    
                                </Grid>
                            </form>
                    </Container>
                </Grid>
            </div>
        </div>

    )
}