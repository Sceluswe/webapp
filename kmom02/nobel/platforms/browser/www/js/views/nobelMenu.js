"use strict";

var m = require("mithril");

var Nobel = require("../model/nobel");

module.exports = {
    oninit: Nobel.loadList,

    view: function (vnode) {
        return m("div", [
            m("div.container", [
                m("ul", Nobel.list.map(function (nobel) {
                    return m("li", [
                        m("a", { href: "/nobelInfo/" + nobel.year, oncreate: m.route.link, year: nobel.year }, nobel.year)
                    ]);
                }))

            ]),
            //m("section.container", vnode.children)
        ]);
    }
};
