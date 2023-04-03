import React from "react";

const Footer = () => {
    return (
        <div style={footer}>
           <h1>Footer</h1>
        </div>
    )
}


export default Footer


const footer = {
    display : "flex",
    background : "#fe024e",
    padding : "0 6rem",
    justifyContent : "center",
    color : "#fff",
    alignItems : "center",
    position : "absolute",
    bottom : "0",
    width : "100%"
}

// const myUl = {
//     listStyle : "none",
//     display : "flex",
//     justifyContent : "space-between",
//     width : "20%"
// }