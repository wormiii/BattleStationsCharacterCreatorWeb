define(
["knockout"], 
function(ko) 
{

function starterPageViewModel(indexViewModel)
{
    var self = this;
    self.indexViewModel = indexViewModel;

    self.newCharacter = function()
    {
        self.indexViewModel.showStarterPage(false);
    }

    self.loadCharacter = function()
    {
        self.indexViewModel.showStarterPage(false);
    }
}

return starterPageViewModel;

});
