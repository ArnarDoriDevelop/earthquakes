import React, { Component } from "react";
import { Route, Routes, Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'


import { getEarthquakesList } from '../api/earthquakes';
import EarthquakeTable from '../components/earthquakesTable';
import EarthquakeMap from '../components/earthquakesMap';
import MyEarthquakes from '../components/earthquakesMine';


// Component that fetches/gets data (list of earthquakes) from an API.
// Example of a stateful component.
class Earthquakes extends Component {
  mounted = false;

  constructor() {
    super();
    this.state = {
      earthquakes: [],  
      refresh: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    this.mounted = true;
    try{
      setInterval(async () => {
        getEarthquakesList().then(res => {
          if(this.mounted) {
            this.setState({earthquakes: res.data.results.sort(function(a, b) {
              return b.timestamp - a.timestamp;
            })});
          }
        })
      }, this.state.refresh * 60000);
    }catch (e) {
      alert("I'm sorry!")
    }
  };
  componentWillUnmount() {
    this.mounted = false;
  }

  handleChange(event) {
    this.setState({refresh: event.target.value});
  }

  render() {
    return (
      <div> 
        <br />
        <label>
          Refresh:
          <input 
            type="number" 
            min={0}
            max={60}
            value={this.state.refresh} 
            onChange={this.handleChange}
          />
        </label>
        <br />
        <br />
        <br />
          <nav className="nav">
            <ul className="list">
              <li><Link to='/earthquakes/table'><Button variant="light">Table </Button></Link></li>
              <li><Link to='/earthquakes/map'><Button variant="light">Map</Button></Link></li>
              <li><Link to='/earthquakes/myEarthquakes'><Button variant="light">My experience</Button></Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/table" element={ <EarthquakeTable earthquakes={this.state.earthquakes}></EarthquakeTable>} />
            <Route path="/map" element={ <EarthquakeMap earthquakes={this.state.earthquakes}></EarthquakeMap>} />
            <Route path="/myEarthquakes" element={ <MyEarthquakes earthquakes={this.state.earthquakes}></MyEarthquakes>} />
          </Routes>
      </div>
    );
  }
}

export default Earthquakes;