define(
['jquery', 'knockout', 'knockoutmapping'], 
function($, ko, kom) 
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

    self.saveToJSON = function()
    {
        return ko.toJSON(self);
    };

    self.loadFromJSON = function(jsontext)
    {
        kom.fromJSON(jsontext, {}, self); 
    }
}

return characterViewModel;

});