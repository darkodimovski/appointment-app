import React from "react";

export const Tile = (props) => {

  
  return (
    <div className="tile-container" key={props.data.id}>
      <div className='flex-div'>
        <p className='tile-title'>{props.data.itemOneTitle || `${props.data.itemOne} ${props.data.itemTwo}`}</p><button onClick={() => props.removeItem(props.data.id)}>X</button>
      </div>
      <p className='tile-name'>{props.data.itemOneTitle ? `${props.data.itemTwo}` : ''}</p>
      <p className='tile'>{props.data.itemThree}</p>
      <p className='tile'>{props.data.itemFour}</p>
    </div>
  );
};