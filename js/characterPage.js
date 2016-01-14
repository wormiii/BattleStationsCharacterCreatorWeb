define(
["knockout"], 
function(ko) 
{

function characterPageViewModel(indexViewModel)
{
    var self = this;
    self.indexViewModel = indexViewModel;

    self.startOver = function()
    {
        self.indexViewModel.showStarterPage(true);
    }
}

return characterPageViewModel;

});
