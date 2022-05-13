import React, {useEffect} from 'react';
import moment from 'moment';
import { Container, Table } from 'react-bootstrap'

const EarthquakeTable = (props) => {

  return(
    <div>
      <div className='data'>
        <Container>
          <Table striped bordered size='sm'>
            <thead>
              <tr>
                <th>Location</th>
                <th>Y cordinate (latitude)</th>
                <th>X cordinate (longitude)</th>
                <th>Quality</th>
                <th>Size</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
                {props.earthquakes.map((e, index) => 
                <tr key={index}>
                  <td>{e.humanReadableLocation} </td> 
                  <td>{e.latitude} </td> 
                  <td>{e.longitude} </td> 
                  <td>{e.quality} </td> 
                  <td>{e.size} </td>
                  <td>{moment(e.timestamp).format('DD.MM.YYYY h:mm:ss')}</td> 
                </tr>
                )}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};

export default EarthquakeTable;