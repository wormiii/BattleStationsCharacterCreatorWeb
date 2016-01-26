define(
["knockout"], 
function(ko) 
{

function characterGeneralViewModel(indexViewModel, labelText)
{
    var self = this;
    self.indexViewModel = ko.observable(indexViewModel);
    self.sectionLabel = ko.observable(labelText);
}

return characterGeneralViewModel;

});
