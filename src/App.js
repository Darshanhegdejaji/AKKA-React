import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Welcome from './components/Welcome';
import Hello from './components/Profile';
import Profile from './components/Profile';
import Message from './components/Message';
import Click  from './components/FunctionClick';
import Form from './components/Form';
import NameForm  from './components/NameForm';


class App extends Component {
  render(){
    return (
         <div className="App">
            <NameForm></NameForm>
         </div>
    );
  }
}

export default App;
