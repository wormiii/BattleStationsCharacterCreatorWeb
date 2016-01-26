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
['knockout', 'jquery', 'lodash', './js/indexViewModel', '../js/charactersection'], 
function(ko, $, _, indexViewModel, characterSectionViewModel) 
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




    self.characterAttributes = ko.observableArray([
        new characterSectionViewModel(vm, "character.section.general.label"),
        new characterSectionViewModel(vm, "character.section.items.label")
    ]);

    _.forEach(
        self.characterAttributes(), 
        function(item)
        {
            item.pageVisible = ko.observable(false);
            item.selectPage = function()
            {
                _.forEach(
                    self.characterAttributes(),
                    function(subItem)
                    {
                        subItem.pageVisible(false);
                    }
                );
                item.pageVisible(true);
            };
        }
    );

    self.characterAttributes()[0].selectPage();






    // list of character attributes selectable
    ko.components.register('characterattributelist', 
    {
        viewModel: 
        {
            viewModel: function(params) 
            {
                return vm;
            }
        },
        template: {require: "text!./html/characterattributelist.html" }
    });

    // character - general stuff
    ko.components.register('charactergeneral', 
    {
        viewModel: 
        {
            viewModel: function(params) 
            {
                return vm;
            }
        },
        template: {require: "text!./html/charactergeneral.html" }
    });

    // character - items
    ko.components.register('characteritems', 
    {
        viewModel: 
        {
            viewModel: function(params) 
            {
                return vm;
            }
        },
        template: {require: "text!./html/characteritems.html" }
    });

    // main section that users create character
    ko.components.register('characterpage', 
    {
        viewModel: 
        {
            viewModel: function(params) 
            {
                return vm;
            }
        },
        template: {require: "text!./html/characterpage.html" }
    });

    // navigation section at the bottom
    ko.components.register('navigationsection', 
    {
        viewModel: 
        {
            viewModel: function(params) 
            {
                return vm;
            }
        },
        template: {require: "text!./html/navigationsection.html" }
    });

    // start page - what shows up first
    ko.components.register('starterpage', 
    {
        viewModel: 
        {
            viewModel: function(params) 
            {
                return vm;
            }
        },
        template: {require: "text!./html/starterPage.html" }
    });

    ko.applyBindings(vm);
});
