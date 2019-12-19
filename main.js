"use strict"

//converting table to div
function renderCoffee(coffee){
    var html = '<div><h2>' + coffee.name + '</h2>' + '<p>' + coffee.roast + '</p>' +'</div>';
    return html
}

//displays coffee in ascending order by id
function renderCoffees( coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//choosing roast type with "submit" function
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if(coffee.allroasts===selectedRoast){
            filteredCoffees.push(coffee);
        }

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
    coffeeInput.innerHTML = renderCoffees(filteredCoffees);
}


//shows coffee options based off of search
function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var searchInput = coffeeInput.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        var currentRoast = coffee.roast.toLowerCase();//
        var currentName = coffee.name.toLowerCase();
        if (currentRoast.includes(searchInput) || currentName.includes(searchInput)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
    coffeeInput.innerHTML = renderCoffees(filteredCoffees);
}


function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var searchInput = coffeeInput.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        var currentRoast = coffee.roast.toLowerCase();//
        var currentName = coffee.name.toLowerCase();
        if (currentRoast.includes(searchInput) || currentName.includes(searchInput)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
    coffeeInput.innerHTML = renderCoffees(filteredCoffees);
}


function allRoasts() {
    var selectAll =
}




// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light' allroasts: "all roast"},
    {id: 2, name: 'Half City', roast: 'light',allroasts: "all roast"},
    {id: 3, name: 'Cinnamon', roast: 'light',allroasts: "all roast"},
    {id: 4, name: 'City', roast: 'medium',allroasts: "all roast"},
    {id: 5, name: 'American', roast: 'medium',allroasts: "all roast"},
    {id: 6, name: 'Breakfast', roast: 'medium',allroasts: "all roast"},
    {id: 7, name: 'High', roast: 'dark',allroasts: "all roast"},
    {id: 8, name: 'Continental', roast: 'dark',allroasts: "all roast"},
    {id: 9, name: 'New Orleans', roast: 'dark',allroasts: "all roast"},
    {id: 10, name: 'European', roast: 'dark',allroasts: "all roast"},
    {id: 11, name: 'Espresso', roast: 'dark',allroasts: "all roast"},
    {id: 12, name: 'Viennese', roast: 'dark',allroasts: "all roast"},
    {id: 13, name: 'Italian', roast: 'dark',allroasts: "all roast"},
    {id: 14, name: 'French', roast: 'dark',allroasts: "all roast"},


];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeInput = document.querySelector('#coffee-input');

tbody.innerHTML = renderCoffees(coffees);
//
submitButton.addEventListener('click', updateCoffees);
coffeeInput.addEventListener('keyup', searchCoffees);