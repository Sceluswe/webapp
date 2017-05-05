"use strict";

var m = require("mithril");

module.exports = {
    view: function(vnode) {
        return m("main", [
            m("navbar", [
                m("div.container", [
                    m("ul", [
                        m("li", [
                            m("h2", "Nobel")
                        ])
                    ])
                ])
            ]),
            m("section.container", vnode.children)
        ]);
    }
};
