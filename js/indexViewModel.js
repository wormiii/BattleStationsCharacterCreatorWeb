define(
['knockout', '../js/character', '../js/charactersection', 'filesaver'], 
function(ko, characterViewModel, characterSectionViewModel, filesaver) 
{

function indexViewModel()
{
    var self = this;

    // the character - empty to start with
    self.character = ko.observable(new characterViewModel(self));

    // showing startup or character in progress
    self.showStarterPage = ko.observable(true);
    self.filetext = ko.observable("");

    // starter page functions
    self.newCharacter = function()
    {
        loadCharacter(null);
    }

    self.loadCharacter = function()
    {
        loadCharacter(self.filetext());
    }

    // navigation
    self.navigationStartover = function()
    {
        self.filetext = ko.observable("");  
        self.showStarterPage(true);
    };
    
    self.navigationPrintcharacter = function()
    {
        window.open("./print.html");
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
        var jsonText = self.character().saveToJSON(); 
        var blob = new Blob([jsonText], {type: "text/plain;charset=utf-8"});
        var filename = "battlestationscharacter_" + self.player() + "_" + self.name() + ".txt";
        filesaver(blob, filename);
    };

    // character sections
    self.characterAttributes = ko.observableArray([
        new characterSectionViewModel(self, "character.section.general.label"),
        new characterSectionViewModel(self, "character.section.items.label")
    ]);

    _.forEach(
        self.characterAttributes(), 
        function(item)
        {
            item.selectPage = function()
            {
                _.forEach(
                    self.characterAttributes(),
                    function(subItem)
                    {
                        subItem.pageVisible(false);
                    }
                );
                item.pageVisible(true);
            };
        }
    );

    self.characterAttributes()[0].selectPage();

    // helpers
    function loadCharacter(characterText)
    {
        var character = new characterViewModel();
        if (characterText != null)
        {
            character.loadFromJSON(self.filetext());
        }
        self.character(character);
        self.showStarterPage(false);
        self.filetext("");
    }
}

return indexViewModel;

});

