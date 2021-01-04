import MainComponent from './components/MainComp.jsx'
import Home from './components/Home'
import Header from './components/Header'

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
                <Home />
                {/* <Route exact path="/" component={ Home } />
                <Route path="/KnowledgeBase_index" component={ KnowledgeBase_index } />
                <Route path="/CreateArticle"  component={ () => isLogin() ? <CreateArticle /> :<UserLogin /> } />
                <Route path="/article/:articleId"  component={   Article   } />


                <Route path="/User" component={ () => isLogin() ? <UserIndex /> :<UserLogin /> } />
                <Route path="/UserRegistration" component={ () => isLogin() ? <UserRegistration /> :<UserLogin /> } />
                <Route path="/UserLogin" component={ () => isLogin() ? <UserLogin /> :<UserLogin /> } />
                <Route path="/CreateTicket" component={ () => isLogin() ? <CreateTicket /> :<UserLogin /> } />
                <Route path="/MyProfile" component={ () => isLogin() ? <MyProfile /> :<UserLogin /> } />
                <Route path="/Company" component={ () => isLogin() ? <Company /> :<UserLogin /> } />
                <Route path="/Product" component={ () => isLogin() ? <Product /> :<UserLogin /> } />
                <Route path="/Module" component={ () => isLogin() ? <Module /> :<UserLogin /> } />
                <Route path="/Category" component={ () => isLogin() ? <Category /> :<UserLogin /> } />
                <Route path="/Brand" component={ () => isLogin() ? <Brand /> :<UserLogin /> } />
                <Route path="/TestComponent" component={ () => isLogin() ? <TestComponent /> :<UserLogin /> } />
                
                <Route path="/Tickets/:ticketId" component={ () => isLogin() ? <DetailTicket /> :<UserLogin /> } />
                <Route path="/Tickets" component={ () => isLogin() ? <ListTickets /> :<UserLogin /> } /> 
                <Route path="/Dashboard" component={ () => isLogin() ? <Dashboard /> :<UserLogin /> } />  */}
                 
              </Switch>
            </Container>
          </Router>
        </div>
  );
}

export default App;
