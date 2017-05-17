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
            console.log(Nobel.list);
        })
    },

    current: {},
    load: function (year) {
        return m.request({
            method : "GET",
            url : "http://api.nobelprize.org/v1/prize.json?year=" + year
        })
        .then(function (result) {
            Nobel.current.year = result.prizes[0].year;
            Nobel.current.prizes = array(result.prizes);
            console.log(result.prizes[0].category);
            console.log("typeof result.prizes:" + typeof result.prizes);
            console.log("result.prizes:" + result.prizes);
        });
    }
}

module.exports = Nobel;
