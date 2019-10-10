import React, {Component} from "react";
import {NavLink} from "react-router-dom";
class NavBar extends Component{
    
    render(){
        return(
                <div>
                    <ul>
                          <li><NavLink to="/home">Home</NavLink></li>
                          <li><NavLink to="/news">News</NavLink></li>
                          <li><NavLink to="/contact">Contact</NavLink></li>
                          <li><NavLink to="/about">About</NavLink></li>
                          <li><NavLink to="/posts">Posts</NavLink></li>
                          <li><NavLink to="/addNew">Add New Post</NavLink></li>
                    </ul>
                </div>
        );
    }
    
}

export default NavBar;















