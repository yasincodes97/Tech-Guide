import React from 'react'; //standard import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PythonBasics from './components/PythonBasics';
import WebDevBasics from './components/WebDevelopmentBasics';
import AdvancedConc from './components/AdvancedConcepts';
import Exercises from './components/Exercises';
import Navbar from './components/Navbar';

function App() { //entry point for React-Applications
  return (      // JS is executed directly in the browser
                //JSX extension to JS, JS-XML is transformed to 
                //JS with babel-Transpiler-Tool, React-Component
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />


      </Switch>

    </div>
  );
}

export default App;
