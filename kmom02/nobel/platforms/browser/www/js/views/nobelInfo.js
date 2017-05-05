"use strict";

var m = require("mithril");

var Nobel = require("../model/nobel");

module.exports = {
    oninit: function (vnode) {
        Nobel.load(vnode.attrs.year);
    },

    view: function () {
        console.log("prizes:" + typeof Nobel.current.prizes);
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



        return m("div", [
            m("h1", Nobel.current.year),
            m("p", Nobel.current.prizes[0].category),
            //m("h2", Nobel.categories[0]),
            //m("p", Nobel.lauretes[0][0].name),
            //m("p", Nobel.lauretes[0][0].motivation),
        ]);
    }
};
