import React , { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router";
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';


// icons
import { 
     ExitToApp
  } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if(localStorage.getItem('Token') != null){
    //   if(JSON.parse(atob(localStorage.getItem("Token").split('.')[1])).exp < new Date().getTime()/1000){
        
    //   }
    }
  }, [ ]);

  function LoginCheck () {
     
    if (localStorage.getItem('Token') == null) {
      return (<Button color="inherit" onClick={ ()=>{localStorage.setItem('Token', "action.payload")} }>Login</Button>)
    } else {
      return (<Button color="inherit" onClick={ () => {
        // history.push({ pathname: "/UserLogin" })
        localStorage.removeItem('Token')
      } } >   Log Out <Box ml={2} mt={1}><ExitToApp /></Box></Button>)
    }
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Spare Labs
          </Typography>
          
          <LoginCheck />

        </Toolbar>
      </AppBar>
    </div>
  );
}