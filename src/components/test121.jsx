import React, {useEffect, useState} from 'react';

const Test = () => {
  const [earthquakes, setData] = useState([]);
  


  useEffect(() => {
    fetch('https://apis.is/earthquake/is')
    .then(res => {
      return res.json();
    })
    .then(data => {
        setData(data.results);
      })
  }, []);

  return (
    <div>test
      {/* <Test2 earthquakes={earthquakes} /> */}
    </div>
  );
}

export default Test;