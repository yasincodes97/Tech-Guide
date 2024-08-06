import React from 'react'; //default import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //named import
import Home from './components/Home.js';
import PythonBasics from './components/PythonBasics.js';
import WebDevBasics from './components/WebDevelopmentBasics.js';
import AdvancedConc from './components/AdvancedConcepts.js';
import Exercises from './components/Exercises.js';
import Navbar from './components/Navbar.js';
import './App.css';

function App() { //entry point for React-Applications
                // JS is executed directly in the browser
                //JSX extension to JS, JS-XML is transformed to 
                //JS with babel-Transpiler-Tool, React-Component
                return (
                  <Router>  
                     <div className="App"></div>
                      <Navbar />
                      <Routes> <>  </>
                      <Route path="/" element={<Home />} />
                      <Route path="/python-basics" element={<PythonBasics />} />
                      <Route path="/web-dev-basics" element={<WebDevBasics />} />
                      <Route path="/advanced-concepts" element={<AdvancedConc />} />
                      <Route path="/exercises" element={<Exercises />} />
                      </Routes>
                    </Router>
                );
                    }

              
export default App;
