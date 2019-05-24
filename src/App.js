import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Dashboard from './Components/Dashboard'
import Auth from './Components/Auth'
import Form from './Components/Form'
import Post from './Components/Post'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Dashboard/>
      <Auth/>
      <Form/>
      <Post/>
    </div>
  );
}

export default App;
