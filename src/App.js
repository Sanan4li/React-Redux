import React , {Component} from 'react';
import {BrowserRouter , Switch , Route} from "react-router-dom";
import './App.css';

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import News from "./Components/News";
import Posts from "./Components/Posts";
import Post from "./Components/Post";
import AddNewPost from "./Components/AddNewPost";
import NotFound from "./Components/NotFound";




class App extends Component {
 
    render(){
    return (
            <BrowserRouter>    
             
                    
                        <NavBar />
                           <Switch>
                                <Route path="/home" component={Home} exact={true}/>
                                <Route path="/news" component={News} />
                                <Route path="/about" component={About} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/posts" component={Posts} />
                                <Route path="/post/:id" component={Post} />
                                <Route path="/addNew" component={AddNewPost} />
                                 <Route component={NotFound} />
                          </Switch>
                        
          
        </BrowserRouter>
  );
    }
}

export default App;
