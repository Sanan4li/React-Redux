const initState = {
    posts : [
        {id: 1 , title : "First Post" , body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur amet, similique earum dolores ullam qui adipisci at excepturi dolor ratione repellendus numquam ipsa quae nobis iusto a modi vel deleniti."},  
        {id: 2 , title : "Second Post" , body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur amet, similique earum dolores ullam qui adipisci at excepturi dolor ratione repellendus numquam ipsa quae nobis iusto a modi vel deleniti."}, 
        {id: 3 , title : "Third Post" , body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur amet, similique earum dolores ullam qui adipisci at excepturi dolor ratione repellendus numquam ipsa quae nobis iusto a modi vel deleniti."},
        
    ],
    todos: [
         {id: 3 , title : "Test Post" , body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur amet, similique earum dolores ullam qui adipisci at excepturi dolor ratione repellendus numquam ipsa quae nobis iusto a modi vel deleniti."},
    ]
}

const RootReducer = (state = initState, action)=>{

    if(action.type==="DELETE_POST"){
        let newPosts = state.posts.filter(
                (post)=>{
                    return post.id != action.id
                }
        );
        return{
            ...state,
            posts: newPosts
        }
    }
        if(action.type=="ADD_POST"){
       let post = {
           id : action.id,
           title : action.title,
           body : action.body
       }
       let newPosts = [...state.posts , post];
        console.log(newPosts);
        return{
            ...state,
            posts : newPosts
        }
            console.log(action);
    }
    
    return state
    
}
export default RootReducer;
















