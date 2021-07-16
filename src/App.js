import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Read from "./components/Read/Read";
import NotFound from "./components/NotFound/NotFound";
import Create from "./components/Create/Create";
import { UserProvider } from "./components/UserContext/UserContext";
import Delete from "./components/Delete/Delete";
import Edit from "./components/Edit/Edit";
import Login from "./components/Login";

const ProtectedRoute = (props) =>{
  const token = localStorage.getItem("token");

  if(token){
    return  <Route  {...props} />
  }else{
  return  <Redirect to='/login' />
  }
  
  
}


function App() {
  return (
    <UserProvider> 
      <div className="app">
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <ProtectedRoute path="/create">
              <Create />
            </ProtectedRoute>
            <ProtectedRoute path="/read/:id">
              <Read />
            </ProtectedRoute>
            <ProtectedRoute path="/edit/:id">
              <Edit />
            </ProtectedRoute>
            <ProtectedRoute path="/delete/:id">
              <Delete />
            </ProtectedRoute>
            <ProtectedRoute exact path="/">
              <Home />
            </ProtectedRoute>
            <ProtectedRoute path="*">
              <NotFound />
            </ProtectedRoute>
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
