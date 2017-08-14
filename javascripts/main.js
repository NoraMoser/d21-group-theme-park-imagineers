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