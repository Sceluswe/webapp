"use strict";

var m = require("mithril");

var Nobel = require("../model/nobel");

module.exports = {
    oninit: function (vnode) {
        Nobel.load(vnode.attrs.year);
    },

    view: function () {
        // The array with all HTML elements.
        var arr_vnodes = [];

        console.log(Nobel.current.categories);

        // The object solution.
        Nobel.current.categories.forEach(function (category) {
            // Vnode category name.
            arr_vnodes.push(m("h2", category.name));

            // Get lenght of the arrays.
            var len = category.winnerNames.length;

            for (var i = 0; i < len; i++) {
                if (i === len -1) {
                    arr_vnodes.push(m("h3", category.winnerNames[i]));
                    arr_vnodes.push(m("p.lastp", category.winnerMotivations[i]));
                }
                else {
                    arr_vnodes.push(m("h3", category.winnerNames[i]));
                    arr_vnodes.push(m("p", category.winnerMotivations[i]));
                }
            }
        });

        return m("div", [
            m("h1", "Nobel winners of " + Nobel.current.year),
            m("div", arr_vnodes)
        ]);
    }
};
