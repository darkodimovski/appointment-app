import React from "react";
import { Tile } from '../tile/Tile'
export const TileList = (props) => {

  if(!props.data) {
    return <div></div>
  }

  return (
    <div>
        {props.data.map(data => {
          return <Tile removeItem={props.removeItem} data={data} key={data.id}/>
        })}
    </div>
  );
};
