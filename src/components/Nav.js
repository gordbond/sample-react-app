import React, { useContext, useState, useEffect } from "react";

function Nav(props){
    useEffect(() => {
        console.log("Are my props available: ", props)
    }, [])
    
    return (
        <nav>
            {props.cities.map((city) => (
                <div key={city}>{city}</div>
            ))}
        </nav>
    )
}

export default Nav;