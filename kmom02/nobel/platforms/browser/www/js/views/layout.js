"use strict";

var m = require("mithril");

module.exports = {
    view: function(vnode) {
        return m("main", [
            m("navbar", [
                m("div.container", [
                    m("ul", [
                        m("li", [
                            m("img", {src: "../img/nobel-logo.png", width: "64px", height: "64px"})
                        ]),
                        m("li.home", [
                            m("a", { href: "/", oncreate: m.route.link }, "Home")
                        ]),
                    ])
                ])
            ]),
            m("section.container", vnode.children)
        ]);
    }
};
