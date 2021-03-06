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
            // Reset to avoid filling the array with duplicated content.
            Nobel.current.categories = [];

            // Save the current year.
            Nobel.current.year = result.prizes[0].year;

            result.prizes.forEach(function (prize) {
                var categoryName = prize.category.charAt(0).toUpperCase() + prize.category.slice(1);
                // Create a category object.
                var category = {
                    name: categoryName,
                    winnerNames: [],
                    winnerMotivations: []
                };

                // Put all the winners and the motivation for each winner in obj.
                prize.laureates.forEach( function (currentLau) {
                    category.winnerNames.push(currentLau.firstname + " " + currentLau.surname);
                    category.winnerMotivations.push(currentLau.motivation);
                });

                // Put the category object in the array of categories.
                Nobel.current.categories.push(category);
            });
        });
    }
};

module.exports = Nobel;
