import React from "react";
const User = ({ name, location }) => {  
    return (
        <div>
            <h1>NAME: {name}</h1> 
            <h1>LOCATION : {location}</h1>
        </div>
    );
};
export default User;