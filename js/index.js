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
['knockout', 'jquery', 'lodash', './js/indexViewModel', './js/starterPage', './js/characterPage'], 
function(ko, $, _, indexViewModel, starterPageViewModel, characterPageViewModel) 
{
    var vm = new indexViewModel();


    var textToLocalizedText = function(text)
    {
        var thetext = vm.selectedlanguage()[text];
        return thetext;
    }
    ko.bindingHandlers.localizedtext = 
    {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext)
        {
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext)
        {
            var value = ko.unwrap(valueAccessor());
            var localizedText = textToLocalizedText(value);
            $(element).text(localizedText);
        }
    };

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

    ko.components.register('characterpage', 
    {
        viewModel: 
        {
            createViewModel: function(params, componentInfo) 
            {
                return new characterPageViewModel(vm);
            }
        },
        template: {require: "text!./html/characterPage.html" }
    });

    /*
    var selectpage = function(index)
    {
        _.forEach(vm.pages(),
            function(item)
            {
                item.visible(false);
            }
        );
        var itemtoshow = _.find(vm.pages(),
            function(item)
            {
                return item.index == index;
            }
        );
        itemtoshow.visible(true);
    }

    vm.pages().push(new page1vmctor(vm, 0, selectpage));
    vm.pages().push(new page2vmctor(vm, 1, selectpage));

    ko.components.register('page1stuff', 
    {
        viewModel: 
        {
            createViewModel: function(params, componentInfo) 
            {
                return vm.pages()[0];
            }
        },
        template: {require: "text!./page1.html" }
    });

    ko.components.register('page2stuff', 
    {
        viewModel: 
        {
            createViewModel: function(params, componentInfo) 
            {
                return vm.pages()[1];
            }
        },
        template: {require: "text!./page2.html" }
    });
    */

    ko.applyBindings(vm);
});
