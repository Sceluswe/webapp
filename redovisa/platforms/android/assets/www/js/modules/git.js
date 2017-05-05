"use strict";

var m = require("mithril");

var Git = {
    names : [],
    lastUpdates: [],

    getRepos: function () {
        m.request({
            method : "GET",
            url : "https://api.github.com/users/Sceluswe/repos"
        }).then(function (result) {
            result.forEach(function (item, index, array) {
                Git.names.push(result[index].name);
                Git.lastUpdates.push(result[index].updated_at);
            });
        });
    },

    getName: function (index) {
        return Git.names[index];
    },

    getLastUpdate: function (index) {
        return Git.lastUpdates[index];
    },

    getRepoInfo: function (index) {
        return "Repo: " + Git.names[index] + "\nLast updated: " + Git.lastUpdates[index];
    }
}

module.exports = Git;
