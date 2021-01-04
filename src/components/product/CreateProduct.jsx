import React , { useEffect , useState } from 'react'
import { useHistory } from "react-router";
import axios from 'axios'

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

const CreateProduct = () => {

    const classes = useStyles();
    const history = useHistory();

    const create = async () => {

        if(  newProductDetails.name.length > 0 && newProductDetails.description.length > 0 && newProductDetails.quantity.length > 0 ){
            let res = await axios.post("http://localhost:2000/product" , newProductDetails ,{
                headers: { 'Authorization': `Basic ${ localStorage.getItem("Token") }`  }
            })

            if( res.status === 201 ){ history.push({ pathname: "/products" }) }
            else{ alert( "Something went wrong") }

        }else{
            alert("Some fiels not filled")
        }
        
    }

    const intNewProduct = {
        name:"",
        description:"",
        quantity:""
    }
    const [newProductDetails , setNewProductDetails] = useState(intNewProduct);

    return (
        <div>
           <Container component="main" maxWidth="sm">
                <CssBaseline />
                    <div className={classes.paper}>
                        <h1>Create Product</h1>
                        
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                <TextField variant="outlined" required fullWidth name="Name" label="Name"
                                    onChange={e=>  setNewProductDetails({ ...newProductDetails , name : e.target.value })}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField variant="outlined" required fullWidth name="Description" label="Description"
                                    onChange={e=>  setNewProductDetails({ ...newProductDetails , description : e.target.value })}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField variant="outlined" required fullWidth name="Quantity" label="Quantity"
                                    type ="number" onChange={e=>  setNewProductDetails({ ...newProductDetails , quantity : e.target.value })}
                                />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit" fullWidth  variant="contained" color="primary"
                                className={classes.submit} onClick={(e)=>{
                                    create()
                                    e.preventDefault();
                                }} > Create Product </Button>
                        </form>
                    </div>
                     
                </Container>
        </div>
    )
}

export default CreateProduct
