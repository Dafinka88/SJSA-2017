import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import { fetchPosts } from "../actions/postsActions";

export class App extends React.Component {

   componentWillMount(){
       console.log(this.props);
       this.props.dispatch(fetchUser());
   }

   fetchPosts(){
       this.props.dispatch(fetchPosts());
   }

   render(){

       if(!this.props.posts.length){
           return <button onClick={this.fetchPosts.bind(this)}>Load Posts</button>
       }

       const mappedPosts = this.props.posts.map((post) =>
           <li key={post.id}>{post.title}</li>
       );

       return(
           <div>
               <h2>{this.props.user.name}</h2>
               <ul>{mappedPosts}</ul>
           </div>
       );
   }
}

function mapStateToProps(state) {
   return {
       user: state.user.user,
       posts: state.posts.posts
   }
}

App = connect(mapStateToProps)(App);