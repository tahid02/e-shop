import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Admin from './components/AdminPanel/Admin';
import CheckOut from './components/CheckOut/CheckOut';
import AllOrder from './components/Orders/AllOrder';
import LogIn from './components/LogIn/LogIn';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const  UserContext = createContext()

function App() {

  const [loggedInUser,setLoggedInUser] = useState({})

  return (
    <div className="App">
      <UserContext.Provider value={ [loggedInUser,setLoggedInUser] }>
       <Router>
     
       <Header name={loggedInUser.name}/>

       
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <PrivateRoute path="/checkOut/:id">
            <CheckOut />
          </PrivateRoute>

          <PrivateRoute path="/orders">
            <AllOrder />
          </PrivateRoute>

          <Route path="/login">
            <LogIn />
          </Route>
          
        </Switch>
      
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
