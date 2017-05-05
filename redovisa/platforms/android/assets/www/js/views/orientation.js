"use strict";

var m = require("mithril");

var Git = require("../modules/git");

module.exports = {
    view: function() {
        var height = window.screen.availHeight;
        var width = window.screen.availWidth;
        var isPortrait = width < height;

        if (isPortrait) {
            isPortrait = "Porträtt";
        }
        else {
            isPortrait = "Landskap";
        }

        return [
            m("p", "width: " + width),
            m("p", "Height: " + height),
            m("p", "Orientation: " + isPortrait)
        ];
    }
};
