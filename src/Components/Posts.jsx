import React , {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
class Posts extends Component{
    render(){
       
        let posts = this.props.posts.map(
                (post)=>{
                    return(
                         <div key={post.id} className="post">
                            <h2> {post.title} </h2>
                            <p>
                                {post.body}
                            </p>
                            <Link to={"/post/"+post.id} className="deleteButton">Read Full Post</Link>
                        </div>
                    );
                }
        );
        
        
        
        return(
            <div>
               
                {posts}
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        posts : state.posts
    }
}





export default connect(mapStateToProps)(Posts);






