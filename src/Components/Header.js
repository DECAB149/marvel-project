import React from 'react';
import Typography from '@material-ui/core/Typography';
import MarvelRegularTtf from '../fonts/MarvelRegular-Dj83.ttf';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const marvelFont = {
    fontFamily: 'MarvelRegular',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 200,
    src: `
        local('MarvelRegular'),
        local('MarvelRegular-Dj83'),
        url(${MarvelRegularTtf}) format('ttf')
    `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
    typography:{
        fontFamily: ['MarvelRegular, Serif',].join(','),
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [marvelFont],
            },
        },
    },
});

export default function Header() {
    return (
        <div className='marvelHeader'>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Typography component="div"  style={{ backgroundColor: '#EC1D24', height: '12vh', paddingTop: '5px' }}>
                    <h1 >Marvel Project</h1>
                </Typography>
            </ThemeProvider>
        </div>
    );
}