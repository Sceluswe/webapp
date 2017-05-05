"use strict";

var m = require("mithril");

module.exports = {
    view: function() {
        // Create a virtual DOM node, "vnode", it turns into a DOM element when we mount or render it.
        console.log(m("h1", "Emil Mattsson"));
        return [
            m("h1", "Emil Mattsson"),
            m("p", "Jag heter Emil och spenderar mina dagar med att studera, koda och filosofera. Min nuvarande favorit bok är 1984."),
            m("div", {class:"profile"})
        ];
    }
};
