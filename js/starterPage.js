define(
['knockout', '../js/character'], 
function(ko, characterViewModel) 
{

function starterPageViewModel(indexViewModel)
{
    var self = this;
    self.indexViewModel = indexViewModel;

    self.newCharacter = function()
    {
        var character = new characterViewModel(indexViewModel);
        self.indexViewModel.character(character);
        self.indexViewModel.showStarterPage(false);
    }

    self.loadCharacter = function()
    {
        var character = new characterViewModel(indexViewModel);
        //todo: load stuff
        self.indexViewModel.character(character);
        self.indexViewModel.showStarterPage(false);
    }
}

return starterPageViewModel;

});
