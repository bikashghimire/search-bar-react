import { React, useState } from "react";
import data from "./ListData.json";

function List(props) {
    // create a new array by filtering the original array
    const filteredData = data.filter((e)  => {
        // if no input then return the original 
        if(props.input === ''){
            return e;
        }
        // return the item which contains the user input 
        else {
            return e.text.toLocaleLowerCase().includes(props.input)
        }
    })
  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
export default List;
