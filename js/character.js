define(
['jquery', 'knockout', 'knockoutmapping'], 
function($, ko, kom) 
{

function characterViewModel()
{
    var self = this;

    self.player = ko.observable("");
    self.name = ko.observable("");
    self.rank = ko.observable(1);
    self.credits = ko.observable(0);
    self.xp = ko.observable(0);
    self.prestige = ko.observable(0);

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