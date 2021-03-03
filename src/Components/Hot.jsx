import React from 'react';
import ActorsMap from './ActorsMap';

const Hot = () => {
  return (
    <div>
      <div className="info">
        {/* <h2>Hot</h2> */}
        <h3>Most popular actors</h3>
      </div>
      <div className="films-map">
        <ActorsMap />
      </div>
    </div>
  );
};

export default Hot;
