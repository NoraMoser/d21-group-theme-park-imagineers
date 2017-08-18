"use strict";
console.log ("search");
let Fuse = require("../lib/node_modules/fuse.js/dist/fuse.min.js");

let attractionsArray = [];
let Search = {};

var options = {
    tokenize: true,
    shouldSort: true,
    threshold: 0.0,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 4,
    keys: ["name"]
};

Search.storeData = function (array) {
    attractionsArray = array;
};

Search.searchFunction = function(value) {
    var fusejs = new Fuse(attractionsArray, options);
    var result = fusejs.search(value);
    $(".grid-box-data").removeClass("selected-border");    
    for(let i = 0; i < result.length; i++){
        $(`#grid--${result[i].area_id}`).addClass("selected-border");
    }
    return result;
};

module.exports = Search;