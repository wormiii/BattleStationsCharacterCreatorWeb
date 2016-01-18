define(
["knockout"], 
function(ko) 
{

function characterAttributeListViewModel(indexViewModel, characterPageViewModel)
{
    var self = this;
    self.indexViewModel = indexViewModel;
    self.characterPageViewModel = characterPageViewModel;

    self.aaa = ko.observable("111xxx");
}

return characterAttributeListViewModel;

});