"use strict";

let Handlebars = require('hbsfy/runtime');
let imaginationFactory = require('../javascripts/imagination-factory.js');


Handlebars.registerHelper("findAreaName", (value) => {
    let allAreas = imaginationFactory.getAreaArray();
    let theArea = "";
    for (let i = 0; i < allAreas.length; i++) {
        if (value === allAreas[i].id) {
            // console.log ("dataFromFactory[i].name", dataFromFactory[i].name);
                theArea = allAreas[i].name;
                // console.log("theArea", theArea);
        }
    }
    return theArea;
});

imaginationFactory.loadTypes();

Handlebars.registerHelper("findType", (value) => {
    let allTypes = imaginationFactory.getAllTypes();
    console.log (allTypes);
    let theType = "";
    for (let i = 0; i < allTypes.length; i++) {
        if (value === allTypes[i].id) {
            // console.log ("allTypes", allTypes[i]);
                theType = allTypes[i].name;
                // console.log("theArea", theArea);
        }
    }
    return theType;
});
