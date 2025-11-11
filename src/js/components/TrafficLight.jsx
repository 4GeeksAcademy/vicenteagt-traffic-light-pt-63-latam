import React, { useState } from "react";

export const TrafficLight = () => {
    let [redLight, setRedLight] = useState("withoutLightContainerHook");
    let [yellowLight, setYellowLight] = useState("withoutLightContainerHook");
    let [greenLight, setGreenLight] = useState("withoutLightContainerHook");

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
 setRedLight("redLightContainerHook")
 setYellowLight("withoutLightContainerHook")
setGreenLight("withoutLightContainerHook")
    }
    let cambiarcolor2 = () => {
setRedLight("withoutLightContainerHook")
 setYellowLight("yellowLightContainerHook")
setGreenLight("withoutLightContainerHook")
    }
     let cambiarcolor3 = () => {
 setRedLight("withoutLightContainerHook")
 setYellowLight("withoutLightContainerHook")
setGreenLight("greenLightContainerHook")
    }


    return (
        <div>
 <div className="row trafficLightContainer">
				<div className="col-6 trafficLightUpper m-auto mt-4">
					<div className="d-flex flex-column mt-3">
					<button type="button" class={"btn btn-danger redLightContainer " + redLight} onClick={cambiarcolor}></button>
					<button type="button" class={"btn btn-warning yellowLightContainer mt-1 " + yellowLight} onClick={cambiarcolor2}></button>
					<button type="button" class={"btn btn-success greenLightContainer  mt-1 " + greenLight} onClick={cambiarcolor3}></button>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-1 trafficLightLower m-auto">
				</div>
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


    //         <div className="d-flex flex-column m-auto">
//             <div className="row">
//             <button type="button" className={"btn " + "btn-" + redLight} onClick={cambiarcolor}>A</button>
//             <button type="button" className={"btn " + "btn-" + yellowLight} onClick={cambiarcolor2}>B</button>
//             <button type="button" className={"btn " + "btn-" + greenLight} onClick={cambiarcolor3}>C</button>
        
//         </div>
// </div>