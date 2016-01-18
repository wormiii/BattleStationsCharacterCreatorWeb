define(
["knockout"], 
function(ko) 
{

function characterGeneralViewModel(indexViewModel, characterPageViewModel)
{
    var self = this;
    self.indexViewModel = indexViewModel;
    self.characterPageViewModel = characterPageViewModel;
    self.sectionLabel = ko.observable("character.section.general");

    self.bbb = ko.observable("222xxx");
}

return characterGeneralViewModel;

});
