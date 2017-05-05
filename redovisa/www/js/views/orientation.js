"use strict";

var m = require("mithril");

var Git = require("../modules/git");

module.exports = {
    view: function() {
            var height = window.screen.height;
            var width = window.screen.width;
            var isPortrait = width < height;

            if (isPortrait) {
                isPortrait = "Porträtt";
            }
            else {
                isPortrait = "Landskap";
            }

        return [
            m("p", "Width: " + width),
            m("p", "Height: " + height),
            m("p", "Orientation: " + isPortrait)
        ];
    }
};
