import React from 'react';
import { Typography, Container } from '@material-ui/core/';

export default function AboutSec() {
    
    return(
        <div className='pageContents'>
            <Typography component="div" align="center" style={{ backgroundColor: '#f5f5f5', height: '100vh',  }}>
                <h1>a little about me</h1>
            </Typography>
        </div>
    );
}