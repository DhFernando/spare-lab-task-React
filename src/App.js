
import Home from './components/Home'
import Header from './components/Header'
import Product from './components/product/ProductList.jsx'
import CreateProduct from './components/product/CreateProduct'
import MyProfile from './components/user/MyProfile'

import Login from './components/user/Login'

import Container from '@material-ui/core/Container';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const isLogin = () => {
  var Token = (localStorage.getItem("Token") != null ) ? true : false
  if (Token )  return true
  else return false
}

function App() {
  return (
  
      <div className="App">
          <Router>
            <Header /> 
            <Container maxWidth={ "xl" }>
              <Switch>
                <Route exact path="/" component={ Home } />
             
                {/* <Route path="/article/:articleId"  component={   Article   } /> */}

                <Route path="/products" component={ () => isLogin() ? <Product /> :<Login /> } />
                <Route path="/login" component={ () => isLogin() ? <Home /> :<Login /> } />
                <Route path="/createproduct" component={ () => isLogin() ? <CreateProduct /> :<Login /> } />
                <Route path="/myprofile" component={ () => isLogin() ? <MyProfile /> :<Login /> } />
              
              </Switch>
            </Container>
          </Router>
        </div>
  );
}

export default App;
