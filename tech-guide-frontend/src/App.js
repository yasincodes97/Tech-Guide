import React from 'react'; //default import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //named import
import WebDevBasics from './components/WebDevelopmentBasics.js';
import AdvancedConc from './components/AdvancedConcepts.js';
import Exercises from './components/Exercises.js';
import Frameworks from './components/Frameworks.js';
import Navbar from './Navbar.js';

                  // Hauptkomp. wird in index.js gerendert
function App() { //entry point for React-Applications
              // JS is executed directly in the browser
                //JSX extension to JS, JS-XML is transformed to 
                //JS with babel-Transpiler-Tool, React-Component
                return (
                  <Router>  
                     <div className="App"></div>
                      <Navbar/>

                      <Routes> 
                      {/* muss gleich sein wie Link Element
                          bestimmt was gerendert wird bei einer bestimmten URL                                                      
                          path= URL, der diese Route aktiviert
                          element= React komp. was gerendert wird  
                                                    */ }
                      <Route path="webdev" element={<WebDevBasics />} />
                      <Route path="advanced" element={<AdvancedConc />} />
                      <Route path="exercises" element={<Exercises />} />
                      <Route path="frameworks" element={<Frameworks/>} />
                      
                      </Routes>

                    </Router>
                );
                    }

              
export default App; //exporting App.js as default
