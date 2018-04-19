import React from 'react';

const Card = ({name, email, id}) => {
  return (
    <div className='tc bg-light-blue w-20 dib br2 pa3 ma1 shadow-2'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
