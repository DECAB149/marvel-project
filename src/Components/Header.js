import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';



export default function Header() {
    return (
        <div className='marvelHeader'>
            <Typography component="div"  style={{ backgroundColor: '#EC1D24', height: '12vh', paddingTop: '5px' }}>
                <Grid container spacing={2} >
                    <Container maxWidth='md'>
                        <Grid item xs={0}>
                            <h1>The Marvel Project</h1>
                        </Grid>
                        

                        <Grid item xs={2}>
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/about'>About</Link></li>
                                    <li><Link to='/contact'>Contact</Link></li>
                                </ul>
                        </Grid>
                    </Container>
                </Grid>
            </Typography>
        </div>
    );
}

//add a paper underneath later on to make look better