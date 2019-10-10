import React , {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
class Post extends Component{
    handleClick = ()=>{
      this.props.delete(this.props.match.params.id);
        this.props.history.push("/posts");
    }
    render(){
       console.log(this.props);
        return(
             <div className="posts">
                <div className="post">
                    <h1>
                   {this.props.post.title}
                </h1>
                <p>
                    {this.props.post.body}
                </p>
                <p>
                    <button className="deleteButton" onClick={this.handleClick}>Delete</button>
                </p>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state , ownProps)=>{
    let id = ownProps.match.params.id;
    console.log(id);
     console.log(state.posts);
    return {
        post : state.posts.find(
                (post)=>{
                    return post.id==id
                }
        )
    }
   
}

const deletePost = (dispatch)=>{
    return {
        delete : (id)=>{
            dispatch({type : "DELETE_POST" , id: id});
        }
    }
}





export default connect(mapStateToProps, deletePost)(Post);






