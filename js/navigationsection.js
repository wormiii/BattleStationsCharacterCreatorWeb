define(
["knockout"], 
function(ko) 
{

function navigationSectionViewModel(indexViewModel)
{
    var self = this;
    self.indexViewModel = indexViewModel;

	self.navigationStartover = function()
	{
        self.indexViewModel.showStarterPage(true);
	};
	
	self.navigationPrintcharacter = function()
	{
		//todo
	};

	self.navigationGotogorilla = function()
	{
		window.open("http://www.gorillaboardgames.com/");
	};

	self.navigationBugreport = function()
	{
		window.open("https://github.com/wormiii/BattleStationsCharacterCreatorWeb/issues");
	};

	self.navigationGotoetcher2games = function()
	{
		window.open("http://www.etcher2games.com");
	};
}

return navigationSectionViewModel;

});
