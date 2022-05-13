import React, {useEffect, useState} from 'react';
import Test2 from './test2';

const Test = () => {
  const [earthquakes, setData] = useState([]);
  
  useEffect(() => {
    let mounted = true;
    fetch('https://apis.is/earthquake/is')
    .then(res => {
      return res.json();
    })
    .then(data => {
      if(mounted) {
        setData(data.results);
      }
    })
    return () => mounted = false;
  }, []);

  return (
    <div>test
      <Test2 earthquakes={earthquakes} />
    </div>
  );
}

export default Test;