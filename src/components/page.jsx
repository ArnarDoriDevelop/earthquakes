import React from 'react';

import Earthquakes from '../views/earthquakes';
import Test from './test';

const heading = {
  color: 'pink'
}
// Component that wraps the system into a specific look/style for every component
// Example of a stateless component
const Page = (props) => {
  return (
    <div>
      <div>
        {/* <Earthquakes></Earthquakes> */}
        {/* <Test></Test> */}
        <div>tst</div>
      </div>
    </div>
  );
};

export default Page;