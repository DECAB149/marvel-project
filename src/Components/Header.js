import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function Header() {
    return (
        <div className='marvelHeader'>
                <Typography component="div"  style={{ backgroundColor: '#EC1D24', height: '12vh', paddingTop: '5px' }}>
                    <h1>The Marvel Project</h1>
                </Typography>

        </div>
    );
}

//add a paper underneath later on to make look better