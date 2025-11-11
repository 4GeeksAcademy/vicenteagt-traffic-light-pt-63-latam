import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TrafficLight } from "./TrafficLight.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
         <TrafficLight/>
		</div>
	);
};

export default Home;

//    <div className="row trafficLightContainer">
// 				<div className="col-6 trafficLightUpper m-auto mt-4">
// 					<div className="d-flex flex-column mt-3">
// 					<button type="button" class="btn btn-danger redLightContainer"></button>
// 					<button type="button" class="btn btn-warning yellowLightContainer mt-1"></button>
// 					<button type="button" class="btn btn-success greenLightContainer mt-1"></button>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col-1 trafficLightLower m-auto">
// 				</div>
// 			</div>