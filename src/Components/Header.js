import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Header() {
    return (
        <div>
            <Typography component="div"  style={{ backgroundColor: 'white', height: '12vh', paddingTop: '5px', paddingBottom: '' }}>
            <h1>Marvel Header</h1>
            </Typography>
        </div>
    );
}