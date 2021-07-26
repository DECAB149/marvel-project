import React from 'react';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Link } from 'react-router-dom';


export default function Header() {
    return (
        <div className='marvelHeader'>
                <Typography component="div"  style={{ backgroundColor: '#EC1D24', height: '12vh', paddingTop: '5px' }}>
                    <h1>The Marvel Project</h1>
                    
                    <div>
                        <nav className='navWrapper'>
                            <div className='container'>
                                <ul className='rightNav'>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/about'>About</Link></li>
                                    <li><Link to='/contact'>Contact</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </Typography>

        </div>
    );
}

//add a paper underneath later on to make look better