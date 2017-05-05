"use strict";

var m = require("mithril");
// Load views/layout.js
var Layout = require("./views/layout");
// Load views/me.js
var Me = require("./views/me");
// Load views/about.js
var About = require("./views/about");
// Load views/report.js
var Report = require("./views/report");
// Load views/github.js
var Github = require("./views/github");
// Load views/orientation.js
var Orientation = require("./views/orientation");

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        //this.onDeviceReady();
    },

    onDeviceReady: function() {
        // Render our HTML element ME in the document.body element.
        //m.mount(document.body, Me);

        m.route(document.body, "/", {
            //"/": Me
            "/": {render: function () {return m(Layout , m(Me));}},
            "/about" : {render: function () {return m(Layout , m(About));}},
            "/report" : {render: function () {return m(Layout , m(Report));}},
            "/github" : {render: function () {return m(Layout , m(Github));}},
            "/orientation" : {render: function () {return m(Layout , m(Orientation));}},
        });
    },
};

app.initialize();
