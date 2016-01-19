"use strict";

requirejs.config({
    baseUrl: '',
    paths: {
        knockout: 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min',
        lodash: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min',
        text: 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
        jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min'
    }
});

require(
['knockout', 'jquery', 'lodash', './js/indexViewModel', './js/starterPage', './js/characterpage', './js/navigationsection'], 
function(ko, $, _, indexViewModel, starterPageViewModel, characterPageViewModel, navigationSectionViewModel) 
{
    var vm = new indexViewModel();

    // localized text binder
    ko.bindingHandlers.localizedtext = 
    {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext)
        {
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext)
        {
            var value = ko.unwrap(valueAccessor());
            var localizedText = vm.selectedlanguage()[value];
            if (localizedText == null)
            {
                localizedText = vm.enus()[value];
                if (localizedText == null)
                {
                    localizedText = "no localized text for this field, please file a bug report";
                }
            }
            $(element).text(localizedText);
        }
    };

    // start page - what shows up first
    ko.components.register('starterpage', 
    {
        viewModel: 
        {
            createViewModel: function(params, componentInfo) 
            {
                return new starterPageViewModel(vm);
            }
        },
        template: {require: "text!./html/starterPage.html" }
    });

    // main section that users create character
    ko.components.register('characterpage', 
    {
        viewModel: 
        {
            createViewModel: function(params, componentInfo) 
            {
                return new characterPageViewModel(vm);
            }
        },
        template: {require: "text!./html/characterpage.html" }
    });

    // navigation section at the bottom
    ko.components.register('navigationsection', 
    {
        viewModel: 
        {
            createViewModel: function(params, componentInfo) 
            {
                return new navigationSectionViewModel(vm);
            }
        },
        template: {require: "text!./html/navigationsection.html" }
    });

    ko.applyBindings(vm);
});
