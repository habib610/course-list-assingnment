import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display/Display';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/Button'
function App() {

  return (
    <div className="App">
      <div className="container">
      <h2 id="logo">ProCourses</h2>
 <Display></Display> 
      </div>

     
    </div>
  );
}

export default App;
