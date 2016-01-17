define(
['knockout', '../js/characterattributelist'], 
function(ko, characterAttributeListViewModel) 
{

function characterPageViewModel(indexViewModel)
{
    var self = this;
    self.indexViewModel = indexViewModel;

    // list of character attributes selectable
    ko.components.register('characterattributelist', 
    {
        viewModel: 
        {
            createViewModel: function(params, componentInfo) 
            {
                return new characterAttributeListViewModel(indexViewModel);
            }
        },
        template: {require: "text!./html/characterattributelist.html" }
    });

    // character - general stuff
    ko.components.register('charactergeneral', 
    {
        viewModel: 
        {
            createViewModel: function(params, componentInfo) 
            {
                return new characterAttributeListViewModel(indexViewModel);
            }
        },
        template: {require: "text!./html/charactergeneral.html" }
    });

    // character - items
    ko.components.register('characteritems', 
    {
        viewModel: 
        {
            createViewModel: function(params, componentInfo) 
            {
                return new characterAttributeListViewModel(indexViewModel);
            }
        },
        template: {require: "text!./html/characteritems.html" }
    });
}

return characterPageViewModel;

});
