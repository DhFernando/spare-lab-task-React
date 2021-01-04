import React , {useState }from 'react'
import { useHistory } from "react-router";
import axios from 'axios'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



//custom style
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


  //component
  function CopyrightComponent() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Spare Labs
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Login = () => {

    const classes = useStyles();
    const history = useHistory();

    const intLoginDetails = {
        username:null,
        password:null
    }
    const [LoginDetails , setLoginDetails] = useState(intLoginDetails);

    const login = () => {
        if( LoginDetails.username != null &&  LoginDetails.password != null){
            if(LoginDetails.username.length > 0 &&  LoginDetails.password.length > 0){
                axios.post("http://localhost:2000/user/authentication" , LoginDetails )
                .then( res => {
                    localStorage.setItem('Token', res.data.token)
                    history.push({ pathname: "/" })
                } ).catch(e => {
                    alert("username or password incorrect")
                })
            }
        }
    }
 
    return (
        <div>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5"> Login </Typography>
                        <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth name="UserNameOrEmail" label="UserName"
                                 onChange={e=>  setLoginDetails({ ...LoginDetails , username : e.target.value })}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth name="Password" label="Password"
                                type="password" onChange={e=>  setLoginDetails({ ...LoginDetails , password : e.target.value })}
                            />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit" fullWidth  variant="contained" color="primary"
                            className={classes.submit} onClick={(e)=>{
                                login()
                                e.preventDefault();
                            }} > Login </Button>
                        </form>
                    </div>
                    <Box mt={5}>
                        <CopyrightComponent />
                    </Box>
                </Container>
        </div>
    )
}

export default Login
