import React from "react";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'

import '../styles/style.scss';
import Earthquake from '../views/earthquakes';
import Eruptions from '../views/eruptions';
import Avalances from '../views/avalances';


// Component that routes to different components based on users choice (created for future implementation in the project f.ex. Volcanos).
// Example of a stateless component
const Router = () => {
  return (
    <div>
      <BrowserRouter>
          <div className="navbar">            
            <nav className="nav">
              <ul className="list">
                <li ><Link to='/earthquakes'><Button variant="light">Earthquakes</Button></Link></li>
                <li><Link to='/eruptions'><Button variant="light">Eruptions</Button></Link></li>
                <li><Link to='/avalanches'><Button variant="light">Avalances</Button></Link></li>
              </ul>              
            </nav>
          </div>
          <Routes>
          <Route path="/earthquakes/*" element={ <Earthquake></Earthquake>} />
          <Route path="/eruptions/*" element={ <Eruptions></Eruptions>} />
          <Route path="/avalanches/*" element={ <Avalances></Avalances>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;