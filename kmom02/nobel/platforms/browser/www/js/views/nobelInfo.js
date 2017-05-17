"use strict";

var m = require("mithril");

var Nobel = require("../model/nobel");

module.exports = {
    oninit: function (vnode) {
        console.log("Year we're trying to get the info of: " + vnode.attrs.year);
        Nobel.load(vnode.attrs.year);

        //console.log("oninit year: " + Nobel.current.year);
        //console.log("oninit prizes: " + Nobel.current.prizes[0].category);
    },

    view: function () {
        //console.log("THIS prizes:" + typeof Nobel.current.prizes);
        // Loop through all categories.
        //Nobel.current.prizes.forEach(function (item, index, array) {
            // Get laureates for this category.
            //var currentLaureates = [];
            /*item.laureates.forEach(function (laureate) {
                currentLaureates.push(m("div", [
                    m("h2", laureate.firstname + laureate.lastname),
                    //m("p", laureate.motivation)
                ]));
            });*/

            // Put laureate vnodes into this category.
            /*var content = m("div", [
                m("h1", item.category),
                m("div", currentLaureates)
            ])*/
        //});
        // console.log(Nobel.current.prizes);
        //console.log(Nobel.current.category);
        // console.log(Nobel.current.laureates);
        // console.log(Nobel.current.categories[0]);
        //console.log(Nobel.current.names[0]);
        //console.log(Nobel.current.names[0][0]);

        var thename = "";
        var themotivation = "";
        // The array solution.
        // Nobel.current.names.forEach(function (item) {
        //     thename = item[0];
        // });

        // The object solution.
        Nobel.current.categories.forEach(function (category) {
            thename = category.winnerNames[0];
            themotivation = category.winnerMotivations[0];
        });

        console.log(thename);
        console.log(themotivation);

        return m("div", [
            m("h1", Nobel.current.year),
            m("h2", thename),
            m("p", themotivation),
            // m("h1", Nobel.current.names[0][0]),
            // m("h1", Nobel.current.categories[0].names[0]),
            // m("h1", Nobel.current.names[0]),
            //m("p", Nobel.current.prizes[0].category),
            //m("h2", Nobel.categories[0]),
            //m("p", Nobel.lauretes[0][0].name),
            //m("p", Nobel.lauretes[0][0].motivation),
        ]);
    }
};
