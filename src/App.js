import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Navbar2 from './Navbar2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './ADD';
import HighlightDetails from './HighlightDetails';
import Buckets from './bucket';
            
           
            function App() {
              return (
                 <Router>
                    <div className="App">
                      <Navbar/>
                      <Navbar2 />
                        <div className="content">
                          <Routes>
                            <Route exact path = "/Highlights" element={<Home/>}>
                            </Route>
                            <Route path = "/Add" element={<Add/>}>
                            </Route>
                            <Route path = "/buckets" element={<Buckets/>}>
                            </Route>
                            <Route path = "/Highlights/:id" element={<HighlightDetails/>}>
                            </Route>
                          </Routes>
                       </div>
                    </div>
                  </Router>
                      );
            }

export default App;