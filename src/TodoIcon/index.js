import React from 'react';
import './TodoIcon.css';
import { BiCheckCircle } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const iconTypes = {
    "check": color => (
        <BiCheckCircle size= "35px" color="#4E9F3D"/> 
    ),
    "delete": color => (
        <AiOutlineCloseCircle size= "35px" color="red"/> 
    )
};
function TodoIcon( {type, color, onClick }) {
 return (
     <span 
     className = {`Icon-container Icon-container--${type}`}
     onClick = {onClick}
     >
         {iconTypes[type](color)}
     </span>
 );
}

export { TodoIcon };