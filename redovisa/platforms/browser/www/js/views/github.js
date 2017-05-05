"use strict";

var m = require("mithril");

var Git = require("../modules/git");

module.exports = {
    oninit: Git.getRepos(),

    view: function() {
        var length = Git.names.length;
        var htmlNodes = [];

        for (var i = 0; i < length; i++) {
            htmlNodes.push(m("p", {class: "bold"}, Git.getName(i)));
            htmlNodes.push(m("p", {class: "endparagraf"}, Git.getLastUpdate(i)));
        }

        return htmlNodes;
    }
};
