define(
['knockout', 'filesaver'], 
function(ko, filesaver) 
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

	self.navigationSaveCharacter = function()
	{
		var character = self.indexViewModel.character(); 
		var text = ko.toJSON(character);
		var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  		var filename = "battlestationscharacter_" + character.player() + "_" + character.name() + ".txt";
  		filesaver(blob, filename);
 	};
}

return navigationSectionViewModel;

});
