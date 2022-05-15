import React from 'react';

import Earthquakes from '../views/earthquakes';

// Component that wraps the system into a specific look/style for every component
// Example of a stateless component
const Page = (props) => {
  return (
    <div>
      <div>
        <Earthquakes></Earthquakes>
      </div>
    </div>
  );
};

export default Page;