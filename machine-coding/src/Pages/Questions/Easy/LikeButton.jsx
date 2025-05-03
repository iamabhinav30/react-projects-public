import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // make sure this is imported globally if not already

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Compose the final style based on state
  let style = { ...baseStyle };
  if (liked) {
    style = { ...style, ...likedStyle };
  } else if (hovered) {
    style = { ...style, ...hoverStyle };
  }

  return (
    <div className=''>
        <button className=''
      style={style}
      onClick={() => setLiked((prev) => !prev)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <i className={`bi ${liked ? 'bi-heart-fill' : 'bi-heart'} ${liked ? 'text-white' : 'text-danger'}`}></i>
      Like
    </button>
    </div>
  );
}

export default LikeButton;


const baseStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    border: '1px solid gray',
    color: 'gray',
    background: 'white',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const hoverStyle = {
    border: '1px solid red',
    color: 'red',
  };

  const likedStyle = {
    border: '1px solid red',
    background: 'red',
    color: 'white',
  };