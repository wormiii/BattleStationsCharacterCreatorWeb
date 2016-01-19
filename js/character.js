define(
["knockout"], 
function(ko) 
{

function characterViewModel(indexViewModel)
{
    var self = this;

    self.player = ko.observable("Bryan");
    self.name = ko.observable("Hex");
    self.rank = ko.observable(3);
    self.credits = ko.observable(4455);
    self.xp = ko.observable(560);
    self.prestige = ko.observable(1000);

    self.saveToJSON = function()
    {

    };

    self.loadFromJSON = function(json)
    {

    }
}

return characterViewModel;

});