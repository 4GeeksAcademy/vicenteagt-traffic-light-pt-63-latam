import React, { useState } from "react";

export const TrafficLight = () => {
    let [redLight, setRedLight] = useState("primary");
    let [yellowLight, setYellowLight] = useState("primary");
    let [greenLight, setGreenLight] = useState("primary");

    // let cambiarcolor = () => {
    //     if (redLight === "primary") {
    //         setRedLight("danger")
    //     }
    //     else if (redLight === "danger") {
    //         setYellowLight("warning")
    //     } 
    //     else if (yellowLight === "warning")
    //         setGreenLight("danger")
    // }
    let cambiarcolor = () => {
 setRedLight("danger")
 setYellowLight("primary")
setGreenLight("primary")
    }
    let cambiarcolor2 = () => {
setRedLight("primary")
 setYellowLight("warning")
setGreenLight("primary")
    }
     let cambiarcolor3 = () => {
 setRedLight("primary")
 setYellowLight("primary")
setGreenLight("success")
    }


    return (
        <div className="d-flex flex-column m-auto">
            <div className="row">
            <button type="button" className={"btn " + "btn-" + redLight} onClick={cambiarcolor}>A</button>
            <button type="button" className={"btn " + "btn-" + yellowLight} onClick={cambiarcolor2}>B</button>
            <button type="button" className={"btn " + "btn-" + greenLight} onClick={cambiarcolor3}>C</button>
        
        </div>
</div>
    )

}

/*{ <button 
            type="button" 
            className={"btn " + "btn-" + redLight} 
            onClick={() => cambiarcolor('red')} // <-- Pasa 'red'
        >A</button> */

    //     if (lightPressed === 'red') {
    //     setRedLight("danger");
    // } else if (lightPressed === 'yellow') {
    //     setYellowLight("warning");
    // } else if (lightPressed === 'green') {
    // )
    //     setGreenLight("success"); 
