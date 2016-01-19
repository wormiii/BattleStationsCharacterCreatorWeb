define(
["knockout"], 
function(ko) 
{

function characterItemsViewModel(indexViewModel, characterPageViewModel)
{
    var self = this;
    self.indexViewModel = indexViewModel;
    self.characterPageViewModel = characterPageViewModel;
    self.sectionLabel = ko.observable("character.section.items.label");

    self.ccc = ko.observable("333xxx");
}

return characterItemsViewModel;

});
