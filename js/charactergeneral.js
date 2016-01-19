define(
["knockout"], 
function(ko) 
{

function characterGeneralViewModel(indexViewModel, characterPageViewModel)
{
    var self = this;
    self.indexViewModel = ko.observable(indexViewModel);
    self.characterPageViewModel = characterPageViewModel;
    self.sectionLabel = ko.observable("character.section.general.label");
}

return characterGeneralViewModel;

});
