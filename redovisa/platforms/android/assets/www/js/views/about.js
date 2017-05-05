"use strict";

var m = require("mithril");

module.exports = {
    view: function() {
        return [
            m("h1", "About"),
            m("p", "Denna hemsida skapas för att tillåta mig att enkelt redovisa mina uppgifter i kursen webapp. Målet är att lära sig utveckla mobilappar som fungerar på alla enheter. För att det ska bli så enkelt och resurssnålt som möjligt lär vi oss främst att utveckla med ett hybrid-ramverk, en android emulator och Apache Cordova, ett cross-platform verktyg."),

            m("p", "Apache Cordovas logo:"),
            m("div", {class:"logo"}),

            m("p", "Slutligen för att packa ihop vårt verkty gtill en fil använder vi oss av npm paketet webpack.")
        ];
    }
};
