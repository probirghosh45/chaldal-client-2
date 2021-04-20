import './App.css';
import  {UserProvider}  from './UserContext'
// import UserContext from './userContext';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from "./components/Home/Home"
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import AddProducts from './components/AddProducts/AddProducts';

function App() {


   
  const [user,setUser] = useState({});
  



  return (
    <UserProvider value={[user,setUser]}>
          <Router>
            <Header></Header>
            <Switch>
             <Route exact path="/">
               <Home></Home>
             </Route>
             <Route path="/login">
               <Login></Login>
             </Route>
             <PrivateRoute path="/checkout/:_id">
                <Destination></Destination>
             </PrivateRoute>
             <PrivateRoute path="/product">
                <AddProducts></AddProducts>
             </PrivateRoute>
            </Switch>
          </Router>
    </UserProvider>
  );
}

export default App;
