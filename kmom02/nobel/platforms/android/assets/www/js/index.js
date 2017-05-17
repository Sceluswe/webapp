"use strict";

var m = require("mithril");

var Layout = require("./views/layout");

var NobelMenu = require("./views/nobelMenu");
var NobelInfo = require("./views/nobelInfo");

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        /*this.onDeviceReady();*/
    },

    onDeviceReady: function() {

        m.route(document.body, "/", {
            "/": { render: function () {
                return m(Layout, m(NobelMenu));
            } },

            "/nobelInfo/:year": { render: function(vnode) {
                return m(Layout, m(NobelInfo, {year: vnode.attrs.year}));
            } },
        });
    }
};

app.initialize();
