import React, { useState } from 'react';
import { FaHandHoldingHeart } from 'react-icons/fa6';

const Like = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    if (liked) {
      console.log('unliked');
    } else {
      console.log('liked');
    }
    setLiked(!liked);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <FaHandHoldingHeart color={liked ? 'red' : 'gray'} />
      </button>
    </div>
  );
};

export default Like;
