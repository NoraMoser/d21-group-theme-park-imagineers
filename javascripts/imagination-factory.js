"use strict";

console.log ("imagination factory");

let Attractory = {};

// Ted: Load the areas data from firebase
let areasLoaded = [];

Attractory.loadAreas = () => {
	return new Promise ( function (resolve, reject) {
		let dataLoader = new XMLHttpRequest();
		dataLoader.open("GET", "https://imagine-nation-data.firebaseio.com/areas.json");
		dataLoader.send();

		dataLoader.addEventListener("load", function () {
			let data = JSON.parse(this.responseText);
			areasLoaded = data;
			console.log ("areasLoaded", areasLoaded); 
			// console.log ("areas data on load", data);
			resolve(data);
		});
	});
};

Attractory.getAreaArray = () => {
	return areasLoaded;
};

let typesLoaded = [];

Attractory.loadTypes = () => {
	return new Promise ( function (resolve, reject) {
		let dataLoader = new XMLHttpRequest();
		dataLoader.open("GET", "https://imagine-nation-data.firebaseio.com/attraction_types.json");
		dataLoader.send();

		dataLoader.addEventListener("load", function () {
			let data = JSON.parse(this.responseText);
			typesLoaded = data;
			// console.log ("areas data on load", data);
			resolve(data);
		});
	});
};

Attractory.getAllTypes = () => {
	return typesLoaded;
};
 

//Tyler: Load the specific attractions from firebase
Attractory.loadAttractions = () => {
	return new Promise ( function (resolve, reject) {
		let attractionDataLoader = new XMLHttpRequest();
		attractionDataLoader.open("GET", "https://imagine-nation-data.firebaseio.com/attractions.json");
		attractionDataLoader.send();

		attractionDataLoader.addEventListener("load", function () {
			let data = JSON.parse(this.responseText);
			// console.log ("attractions data on load", data);
			resolve(data);
		});
	});
};

module.exports = Attractory;