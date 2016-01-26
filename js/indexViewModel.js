define(
['knockout', '../js/character', 'text!../language/en-us', 'text!../language/pg-lt'], 
function(ko, characterViewModel, en_ustext, pg_lttext) 
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
        self.indexViewModel.character().saveToFile(); 
    };

    // localization stuff
    var currentlanguage;
    self.languages = ko.observableArray();
    self.selectedlanguage = ko.observable();

    // load languages
    var defaultLanguage = loadLanguage(en_ustext)
    self.languages().push(defaultLanguage);
    self.selectedlanguage(defaultLanguage);
    self.languages().push(loadLanguage(pg_lttext));

    // helpers
    function loadLanguage(jsonText)
    {
        return $.parseJSON(jsonText);
    }

    function loadCharacter(characterText)
    {
        var character = new characterViewModel();
        if (characterText != null)
        {
            character.loadFromFile(self.filetext());
        }
        self.character(character);
        self.showStarterPage(false);
        self.filetext("");
    }
}

return indexViewModel;

});

