import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';


const headersData = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const useStyles = makeStyles(() => ({
    header: {
       backgroundColor: "red",
       paddingRight: "79px",
       paddingLeft: "118px",
    },

    logo: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },

    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
   },

    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
 }));

export default function Header2() {

    const { header, logo, menuButton, toolbar } = useStyles();

    const displayDesktop = () => {
      return (
      <Toolbar className={toolbar}>
        {MarvelProjectLogo}
        <div>{getMenuButtons()}</div>
        </Toolbar>
      );
    };

    const MarvelProjectLogo = (
        <Typography variant="h6" component="h1" className={logo}>
          Marvel Project
        </Typography>
      );

      const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton
              }}
            >
              {label}
            </Button>
          );
        });
      };

    return (
        <Toolbar>
            <header>
              <AppBar className={header}>{displayDesktop()}</AppBar>
            </header>
        </Toolbar>
      );
    }