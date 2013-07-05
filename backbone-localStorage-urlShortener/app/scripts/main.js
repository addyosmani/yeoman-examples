/*global backbone, $*/
'use strict';


window.backbone = {
    Models: {a:'s'},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        console.log('Hello from Backbone!');

        new backbone.Routers.UrlRouter();
        Backbone.history.start();
    }
};

$(document).ready(function () {
    backbone.init();
});
