"use strict";

console.log ("imagination factory");

let Attractory = {};

let areasLoaded = [];
let typesLoaded = [];

// Ted: Load the areas data from firebase
Attractory.getAllTypes = () => {
	return typesLoaded;
};


Attractory.getAreaArray = () => {
	return areasLoaded;
};


Attractory.loadAreas = () => {
	return new Promise ( function (resolve, reject) {
		let dataLoader = new XMLHttpRequest();
		dataLoader.open("GET", "https://imagine-nation-data.firebaseio.com/areas.json");
		dataLoader.send();
		dataLoader.addEventListener("load", function () {
			let data = JSON.parse(this.responseText);
			areasLoaded = data;
			resolve(data);
		});
	});
};


//Tyler: Load the specific attractions from firebase
Attractory.loadAttractions = () => {
	return new Promise ( function (resolve, reject) {
		let attractionDataLoader = new XMLHttpRequest();
		attractionDataLoader.open("GET", "https://imagine-nation-data.firebaseio.com/attractions.json");
		attractionDataLoader.send();
		attractionDataLoader.addEventListener("load", function () {
			let data = JSON.parse(this.responseText);
			resolve(data);
		});
	});
};


Attractory.loadTypes = () => {
	return new Promise ( function (resolve, reject) {
		let dataLoader = new XMLHttpRequest();
		dataLoader.open("GET", "https://imagine-nation-data.firebaseio.com/attraction_types.json");
		dataLoader.send();
		dataLoader.addEventListener("load", function () {
			let data = JSON.parse(this.responseText);
			typesLoaded = data;
			resolve(data);
		});
	});
};

module.exports = Attractory;