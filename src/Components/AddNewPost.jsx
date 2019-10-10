import React , {Component} from "react";
import {connect} from "react-redux";
class AddNewPost extends Component{
    state = {
        title : null,
        body : null
    }
    
    onChangeListener = (e)=>{
        this.setState(
            {
                [e.target.id]: e.target.value
            }
            
        )
    }
    onClickHandler = (e)=>{
        e.preventDefault();
        let id = Math.floor((Math.random() * 100) + 3);
        let data = this.state;
        data.id = id;
       // console.log(data);
        this.props.savePost(data);
    }
    
    render(){
       
        return(
            <div>
                <h1 id="heading">Add New Post</h1>
            <div id="formDiv">
              <form>
                            <label htmlFor="fname">Title</label>
                            <input type="text" id="title" name="title" placeholder="Post Title..." onChange={this.onChangeListener}/>

                            <label htmlFor="lname">Body</label>
                            <input type="text" id="body" name="body" placeholder="Post Text..." onChange={this.onChangeListener} />

                           

                            <input type="submit" value="Submit" onClick={this.onClickHandler}/>
                            
              </form>
            </div>
            </div>
        );
    }
}
const saveData = (dispatch)=>{
    return{
        savePost : (data)=>{
            dispatch({
                type : "ADD_POST",
                id : data.id,
                title : data.title,
                body : data.body
            });
        }
    }
}

export default connect(null, saveData)(AddNewPost);























