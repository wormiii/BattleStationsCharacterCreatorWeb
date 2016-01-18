define(
['knockout', 'lodash', '../js/characterattributelist', '../js/charactergeneral', '../js/characteritems'], 
function(ko, _, characterAttributeListViewModel, charactergeneralViewModel, characteritemsViewModel) 
{

function characterPageViewModel(indexViewModel)
{
    var self = this;
    self.indexViewModel = indexViewModel;

    self.characterAttributes = ko.observableArray([
    	new charactergeneralViewModel(indexViewModel, self),
    	new characteritemsViewModel(indexViewModel, self)
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
            createViewModel: function(params, componentInfo) 
            {
                return new characterAttributeListViewModel(indexViewModel, self);
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
            	return self.characterAttributes()[0];
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
            	return self.characterAttributes()[1];
            }
        },
        template: {require: "text!./html/characteritems.html" }
    });
}

return characterPageViewModel;

});
