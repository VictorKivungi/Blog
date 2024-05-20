import './App.css';
import NavBar from './components/Navbar.js';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import Home from "./components/Home.js";
import Create from "./components/Create.js";
import BlogDetails from './components/BlogDetails.js';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar/>

            <div className='content'>

                    <Switch>

                            <Route exact path="/">
                              <Home/>
                            </Route>

                            <Route exact path="/Create">
                              <Create/>
                            </Route>

                            <Route exact path="/BlogDetails">
                              <BlogDetails/>
                            </Route>

                    </Switch>

            </div>
      
      </div>
  


    </Router>
);
    
}

export default App;
