define(
['jquery', 'knockout', 'knockoutmapping', 'filesaver'], 
function($, ko, kom, filesaver) 
{

function characterViewModel()
{
    var self = this;

    self.player = ko.observable("Bryan");
    self.name = ko.observable("Hex");
    self.rank = ko.observable(3);
    self.credits = ko.observable(4455);
    self.xp = ko.observable(560);
    self.prestige = ko.observable(1000);

    self.saveToFile = function()
    {
        var text = ko.toJSON(self);
        var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
        var filename = "battlestationscharacter_" + self.player() + "_" + self.name() + ".txt";
        filesaver(blob, filename);
    };

    self.loadFromFile = function(filetext)
    {
        kom.fromJSON(filetext, {}, self); 
    }
}

return characterViewModel;

});