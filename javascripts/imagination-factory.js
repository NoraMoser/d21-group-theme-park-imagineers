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
			console.log ("data from json", data);
			resolve(data);
		});
	});
};

module.exports = Attractory;