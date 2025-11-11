import React, { useState } from "react";

export const TrafficLight = () => {
    let [redLight, setRedLight] = useState("withoutLightContainerHook");
    let [yellowLight, setYellowLight] = useState("withoutLightContainerHook");
    let [greenLight, setGreenLight] = useState("withoutLightContainerHook");

    let pushRedLight = () => {
        setRedLight("redLightContainerHook")
        setYellowLight("withoutLightContainerHook")
        setGreenLight("withoutLightContainerHook")
    }
    let pushYellowLight = () => {
        setRedLight("withoutLightContainerHook")
        setYellowLight("yellowLightContainerHook")
        setGreenLight("withoutLightContainerHook")
    }
    let pushGreenLight = () => {
        setRedLight("withoutLightContainerHook")
        setYellowLight("withoutLightContainerHook")
        setGreenLight("greenLightContainerHook")
    }

    let [counter, setCounter] = useState(0);
    const counterToChangeColorButton = () => {

        setCounter((counter + 1) % 3);
        if (counter === 0) {
            pushRedLight();
        } else if (counter === 1) {
            pushYellowLight();
        } else if (counter === 2) {
            pushGreenLight();
        } return
    }

    const clearLights = () => {
        setRedLight("withoutLightContainerHook")
        setYellowLight("withoutLightContainerHook")
        setGreenLight("withoutLightContainerHook")
    }

    return (
        <div>
            <div className="row trafficLightContainer">
                <div className="col-6 trafficLightUpper m-auto mt-4">
                    <div className="d-flex flex-column mt-3">
                        <button type="button" class={"btn btn-danger redLightContainer " + redLight} onClick={pushRedLight}></button>
                        <button type="button" class={"btn btn-warning yellowLightContainer mt-1 " + yellowLight} onClick={pushYellowLight}></button>
                        <button type="button" class={"btn btn-success greenLightContainer  mt-1 " + greenLight} onClick={pushGreenLight}></button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-1 trafficLightLower m-auto">
                </div>
            </div>
            <div className=" col-6 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 d-flex flex-column m-auto mt-2">
                <button type="button" class="btn btn-light" onClick={counterToChangeColorButton}>Change Light</button>
                <button type="button" class="btn btn-info mt-2" onClick={clearLights}>Clear Lights</button>
            </div>
        </div>
    )
}

