import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2 className="f5" >{name}</h2>
        <p className="f6" >{email}</p>
      </div>
    </div>
  );
}

export default Card;

