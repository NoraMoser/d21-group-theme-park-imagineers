"use strict";
console.log ("main.js");

let imaginationFactory = require('../javascripts/imagination-factory.js');
let Handlebars = require('hbsfy/runtime');

imaginationFactory.loadData()
.then(
    (dataFromFactory) => {
        console.log("factory promise", dataFromFactory);
    },
    (reject) => {
        console.log("something went wrong");
    });



// Ted: Calling loadAreas function to get the areas data.  Promise returns and then calls populateAreas.
imaginationFactory.loadAreas()
.then(
    (dataFromFactory) => {
        console.log("areas promise", dataFromFactory);
        populateAreas(dataFromFactory);
    },
    (reject) => {
        console.log("something went wrong");
    });

// Takes the data loaded above and populates the grid with names/descriptions, and changes background color based on colorTheme.
function populateAreas(areasData) {
	let gridBoxes = $(".grid-box-data");
	// console.log("grid boxes", gridBoxes);
	for (let i = 0; i < areasData.length; i++) {
		// console.log("each area", areasData[i]);
		// console.log("the stuff", $(".grid-box").html());
		gridBoxes[i].innerHTML =`
		 					<h3>${areasData[i].name}</h3>
							<p>${areasData[i].description}</p>`;
		gridBoxes[i].setAttribute('style', `background-color: #${areasData[i].colorTheme}`);
		console.log("descriptions", areasData[i].description);

	}
}