"use strict";

var m = require("mithril");

module.exports = {
    view: function(vnode) {
        return m("main", [
            m("navbar", [
                m("div.container", [
                    m("ul", [
                        m("li", [
                            m("a", {href: "/me", oncreate: m.route.link}, "Me")
                        ]),
                        m("li", [
                            m("a", {href: "/about", oncreate: m.route.link}, "About")
                        ]),
                        m("li", [
                            m("a", {href: "/report", oncreate: m.route.link}, "Report")
                        ]),
                        m("li", [
                            m("a", {href: "/github", oncreate: m.route.link}, "Github")
                        ]),
                        m("li", [
                            m("a", {href: "/orientation", oncreate: m.route.link}, "Orientation")
                        ])
                    ])
                ])
            ]),
            m("section.container", vnode.children)
        ]);
    }
};
