"use strict";

console.log ("imagination factory");

let Attractory = {};

Attractory.loadData = () => {
	return new Promise ( function (resolve, reject) {
		let dataLoader = new XMLHttpRequest();
		dataLoader.open("GET", "https://imagine-nation-data.firebaseio.com/.json");
		dataLoader.send();

		dataLoader.addEventListener("load", function () {
			let data = JSON.parse(this.responseText);
			// console.log ("data from json", data);
			resolve(data);
		});
	});
};

// Ted: Load the areas data from firebase
Attractory.loadAreas = () => {
	return new Promise ( function (resolve, reject) {
		let dataLoader = new XMLHttpRequest();
		dataLoader.open("GET", "https://imagine-nation-data.firebaseio.com/areas.json");
		dataLoader.send();

		dataLoader.addEventListener("load", function () {
			let data = JSON.parse(this.responseText);
			// console.log ("areas data on load", data);
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
			// console.log ("attractions data on load", data);
			resolve(data);
		});
	});
};

module.exports = Attractory;