import React from 'react';


 const Test2 = ({earthquakes}) => {
  return(
    <div>
      <div>
          <table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Y cordinate (latitude)</th>
              </tr>
            </thead>
            <tbody>
                {earthquakes.map((e, index) => 
                <tr key={index}>
                  <td>{e.humanReadableLocation} </td> 
                  <td>{e.latitude} </td> 
                </tr>
                )}
            </tbody>
          </table>
        </div>

    </div>
  );
}

export default Test2;