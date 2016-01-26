define(
["knockout"], 
function(ko) 
{

function characterGeneralViewModel(indexViewModel, labelText)
{
    var self = this;
    self.indexViewModel = ko.observable(indexViewModel);
    self.sectionLabel = ko.observable(labelText);
    self.pageVisible = ko.observable(false);
    self.selectPage = function()
    {
        _.forEach(
            self.indexViewModel().characterAttributes(),
            function(subItem)
            {
                subItem.pageVisible(false);
            }
        );
        self.pageVisible(true);
    };
}

return characterGeneralViewModel;

});
