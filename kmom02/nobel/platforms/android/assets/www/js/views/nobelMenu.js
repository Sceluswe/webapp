"use strict";

var m = require("mithril");

var Nobel = require("../model/nobel");

module.exports = {
    oninit: Nobel.loadList,

    view: function (vnode) {
        return m("div", [
            m("div.container", [
                m("h1", "Welcome!"),
                m("p", "Here we celebrate and remember the Nobelprize winners of each year for their great benefit to mankind."),
                m("p", "Select a date:"),
                m("ul.nobelyears", Nobel.list.map(function (nobel) {
                    return m("li", [
                        m("a", { href: "/nobelInfo/" + nobel.year, oncreate: m.route.link, year: nobel.year }, nobel.year)
                    ]);
                }))

            ]),
            m("section.container", vnode.children)
        ]);
    }
};
