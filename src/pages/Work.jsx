import React, { useState } from 'react';
import Gallery from '../Components/Gallery';


function Work() {
  const [loading, setLoading] = useState(true);

  async function skeletonState(){
    setLoading(false);
  }

  return (
    <div>
      <Gallery />
    </div>
  )
};

export default Work;