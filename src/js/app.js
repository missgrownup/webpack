require('../css/style.css');
let people = require('./people.js');
let $ = require('jquery');

$('body').append(`<h1>${people[0].name}</h1>`);

console.log(people);