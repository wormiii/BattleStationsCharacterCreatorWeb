"use strict";

requirejs.config({
    baseUrl: '',
    paths: {
        knockout: 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min',
        knockoutmapping: 'https://cdnjs.cloudflare.com/ajax/libs/knockout.mapping/2.4.1/knockout.mapping.min',
        lodash: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min',
        text: 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
        jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min',
        filesaver: 'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2014-11-29/FileSaver.min'
    }
});

require(
['knockout', 'jquery', 'lodash', './js/localizedtextbinding'], 
function(ko, $, _, localizedtextBinding)
{

ko.bindingHandlers.localizedtext = localizedtextBinding("pg-lt");

function printViewModel()
{
    var self = this;

    self.aaa = ko.observable(111);
    self.bbb = ko.observable(222);
    self.ccc = ko.observable(333);
}


ko.applyBindings(new printViewModel());

});
