import React , { useEffect , useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
 
import CssBaseline from '@material-ui/core/CssBaseline'; 
import Container from '@material-ui/core/Container';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const ProductList = () => {

    const classes = useStyles();

    const [ products ,  setProducts ] = useState([])

    useEffect(async() =>{
        if( localStorage.getItem("Token") != null ){
            let Products = await axios.get("http://localhost:2000/product" , {
                 headers: { 'Authorization': `Basic ${ localStorage.getItem("Token") }`  }
            })

            setProducts(Products.data)
        }
    },[])

    const deleteProduct = async (id) => {
        let res = await axios.delete(`http://localhost:2000/product/${id}` , {
                 headers: { 'Authorization': `Basic ${ localStorage.getItem("Token") }`  }
            })

        if( res.status === 201 ){
            let newProductArray = products.filter( el => el._id != id )
            setProducts(newProductArray)
        }
    }

    var ProductListComponent = () => {
    
        if(products.length == 0){
            
            return (<>
                <StyledTableRow>
                    <StyledTableCell align="right">Loading ...!</StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell> 
                    <StyledTableCell align="right"></StyledTableCell> 
                    <StyledTableCell align="right"></StyledTableCell> 
                </StyledTableRow>
            </>)
        }else{
            return (<>
                {products.map((row) => (
                    <StyledTableRow key={row._id}>
                        <StyledTableCell component="th" scope="row"> {row._id} </StyledTableCell>
                        <StyledTableCell align="right"> {row.name} </StyledTableCell>
                        <StyledTableCell align="right">{row.description}</StyledTableCell>
                        <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                        <StyledTableCell align="right"> {row.userId}</StyledTableCell>
                        <StyledTableCell align="right">
                             <Button variant="contained" color="secondary"
                                onClick={ () => {  deleteProduct(row._id) } }
                             >Delete</Button> 
                             <Button variant="contained" color="primary">Update</Button> 
                        </StyledTableCell> 
                    </StyledTableRow>
                ))}
            </>)
        }
      }

    return (
        <div>

            <Box m={5}>
                <div>
                    <CssBaseline />
                    <Container maxWidth="md" >
                        <Button variant="contained" color="inherit" component={ Link } to="/createproduct"> Create Product </Button>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Product ID</StyledTableCell>
                                    <StyledTableCell align="right">Name</StyledTableCell>
                                    <StyledTableCell align="right">Description</StyledTableCell>
                                    <StyledTableCell align="right">Qty</StyledTableCell>
                                    <StyledTableCell align="right">userId</StyledTableCell>
                                    <StyledTableCell align="right">Actions</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <ProductListComponent />
                            </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                </div>
            </Box >

        </div>
    )
}

export default ProductList
