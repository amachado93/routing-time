import './App.css';

/*
  Link -> sends the user to a url
  Route -> listens for a url, and renders a component
*/

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import About from './components/About';
import AllPosts from './components/AllPosts';
import Post from './components/Post';

// Blog App!
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [
        {
          uid: "Aiejij93Fj",
          title: "My First Post EVER!",
          author: "kewlguy",
          content: "Here is some content for this blog... wow!!"
        }
      ]
    }
  }

  render(){
  return (
      <div className="App">
        <h1>Blooooog</h1>
        <nav>
          <Link to="/">Home</Link><br />
          <Link to="/about">About</Link><br />
          <Link to="/posts">All Posts</Link>
        </nav>
        <main>
          <Route path="/about" render={ () => <About /> } />
          <Route exact path="/posts" render={ () => 
            <AllPosts posts={this.state.posts} /> 
          } />
          <Route path="/posts/:index" render={(props) =>
            <Post posts={this.state.posts} id={props.match.params.index} />
          } />
        </main>
      </div>
    );
  }
}

export default App;
