"use strict";

var m = require("mithril");

var Nobel = {
    list: [],

    loadList: function () {
        return m.request({
            method : "GET",
            url : "http://api.nobelprize.org/v1/prize.json?year=1990&yearTo=2010",
        })
        .then(function (result) {
            // Get result
            var years = [];
            result.prizes.forEach(function (item, index, array) {
                // Put each unique year into the list.
                if (index === 0 || array[index - 1].year !== item.year)
                {
                    years.push({year: item.year});
                }
            });

            Nobel.list = years;
            console.log("Nobel list of years:");
            console.log(Nobel.list);
        });
    },

    current: {
        year: undefined,
        categories: []
    },
    load: function (year) {
        return m.request({
            method : "GET",
            url : "http://api.nobelprize.org/v1/prize.json?year=" + year
        })
        .then(function (result) {
            // Save the current year.
            Nobel.current.year = result.prizes[0].year;

            result.prizes.forEach(function (prize) {
                // Create a category object.
                var category = {
                    name: prize.category,
                    winnerNames: [],
                    winnerMotivations: []
                };

                // Put all the winners and the motivation for each winner in obj.
                prize.laureates.forEach( function (currentLau) {
                    category.winnerNames.push(currentLau.firstname);
                    category.winnerMotivations.push(currentLau.motivation);
                });

                // Put the category object in the array of categories.
                Nobel.current.categories.push(category);
            });
        });
    }
};

module.exports = Nobel;
