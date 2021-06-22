import React from 'react';
import { makeStyles, createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import { lightGreen, purple, } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    margin: {
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    spacer: {
      marginBottom: theme.spacing(10)
    }
  }));

const customTheme = createMuiTheme({
    palette: {
      primary: lightGreen,
      secondary: purple
    }
  });

export default function SubmitBtn() {
    const classes = useStyles();

    return(
        <div className={classes.margin}>
            <ThemeProvider theme={customTheme}>
                <Button color='secondary' variant="contained">Search Again?</Button>
            </ThemeProvider>
        </div>
    );
}