import React , {useEffect , useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router";



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
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

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
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
     
  }));

function MyProfile() {

    const history = useHistory();
    const classes = useStyles();
     
    useEffect(()=>{

        //validate if user login or not
        if(localStorage.getItem("Token") == null){
            history.push({
                pathname:  "/login"
            })  
        }
      
    },[])

    const [ user , setUser ] = useState(null)

    function Copyright() {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              Spare labs
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

    // component 
    function ProfileDataComponent (){
        if(user == null && localStorage.getItem("Token") != null){
                let userId = JSON.parse(atob(localStorage.getItem("Token").split('.')[1]))._id
            
                axios.get(`http://localhost:2000/user/${userId}` ,{
                  headers: { 'Authorization': `Basic ${localStorage.getItem("Token")}` }
                }).then((res) =>{ 
                  setUser(res.data)
                })

            return ( <p> Loading ... ! </p> )
        }else{
            return ( 
            <>  
                <Container component="main" maxWidth="md">
                <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                        </Avatar> 
                        <Typography component="h1" variant="h5"> Hii {user.username} !! </Typography>
                        <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                Full name : { user.username}
                            </Grid>
                        
                            <Grid item xs={12} sm={6}>
                                User Type : {user.username }
                            </Grid>
                           
                            <Grid  item xs={12} sm={6}>
                                User Role : {user.username }
                            </Grid>
                            <Grid item xs={12} sm={6}> 
                                    User Name : { user.username }
                                
                            </Grid>
                            <Grid item xs={12} sm={6}>
                               
                                    Phone : { user.username }
                              
                            </Grid>
                            <Grid item xs={12} >
                                
                                    EMail : { user.username }
                                
                            </Grid>
                            <Grid item xs={12}>
                                user Id : {user._id }
                            </Grid>
                        </Grid>
                        </form>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Container>
            </> )
        }
    }

    return (
        <div> 
            { ProfileDataComponent() }
        </div>
    )
}

export default MyProfile
