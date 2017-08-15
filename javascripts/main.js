"use strict";
console.log ("main.js");

let imaginationFactory = require('../javascripts/imagination-factory.js');
let Handlebars = require('hbsfy/runtime');
let attractionTemplate = require("../templates/attractionlist.hbs");

Handlebars.registerHelper("findAreaName", (value) => {
  switch (value) {
    case 1:
        return "Main Street U.S.A.";
    case 2:
        return "Adventureland";
    case 3:
        return "Frontierland";
    case 4:
        return "Liberty Square";
    case 5:
        return "Fantasyland";
    case 6:
        return "Tomorrowland";
    case 7:
        return "Cinderella Castle";
    }
});
    

imaginationFactory.loadData()
.then(
    (dataFromFactory) => {
        // console.log("factory promise", dataFromFactory);
    },
    (reject) => {
        console.log("something went wrong");
    });



// Ted: Calling loadAreas function to get the areas data.  Promise returns and then calls populateAreas.
imaginationFactory.loadAreas()
.then(
    (dataFromFactory) => {
        // console.log("areas promise", dataFromFactory);
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
		// console.log("descriptions", areasData[i].description);

	}
}

//This is calling the loadAttractions to get data for all 131 attractions
imaginationFactory.loadAttractions()
.then(
    (dataFromFactory) => {
        // console.log("attractions", dataFromFactory);
        populatePage(dataFromFactory);
    },
    (reject) => {
        console.log("something went wrong");
    });


function populatePage(factoryData) {
    console.log ("factoryData from popPage", factoryData);
    let newDiv = document.createElement("div");
    newDiv.innerHTML = attractionTemplate(factoryData);
    $("#attraction-column").append(newDiv);
}

