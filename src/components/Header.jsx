import React , { useEffect , useState} from 'react';
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

  const [ isLogin , setIsLogin ] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('Token') != null){
        setIsLogin(true)
    }
  }, [ ]);

 


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            < Button color="inherit" component={ Link } to="/" ><h2>Spare Labs</h2></Button>
                
          </Typography>
          
            <Button color="inherit" component={ Link } to="/products"> Products </Button>
            <Button color="inherit" component={ Link } to="/userprofile" > My Profile </Button>
      
        { (isLogin == false)&& <Button color="inherit" component={ Link } to="/register" >Register</Button>}
          { (isLogin == false)&& <Button color="inherit" component={ Link } to="/login" >Login</Button>}

          { (isLogin == true)&& <Button color="inherit" onClick={ () => {
                    setIsLogin(false)
                    history.push({ pathname: "/login" })
                    localStorage.removeItem('Token')
                } } >   Log Out <Box ml={2} mt={1}><ExitToApp /></Box></Button>
            }

        </Toolbar>
      </AppBar>
    </div>
  );
}