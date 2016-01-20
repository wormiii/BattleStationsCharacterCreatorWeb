define(
['jquery', 'knockout', 'knockoutmapping', 'filesaver'], 
function($, ko, kom, filesaver) 
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

    self.saveToFile = function()
    {
        var text = ko.toJSON(self);
        var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
        var filename = "battlestationscharacter_" + self.player() + "_" + self.name() + ".txt";
        filesaver(blob, filename);
    };

    self.loadFromFile = function(filename)
    {
/*
        $.ajax(
            {
                url : filename,
                dataType: "text",
                success : function (data) 
                {
                    var asdf = data;
                }
            }
        );

return;

        var reader = new FileReader();
        reader.onload = function(e)
        {
            var text2 = reader.result;
            var text = '{"player":"dude","name":"wherecar","rank":123,"credits":666,"xp":2222560,"prestige":1000}';
            var parsed = JSON.parse(text);
            kom.fromJSON(text, {}, self); 

//            var parsed = JSON.parse(text);
  //          kom.mapping.fromJSON(parsed, character); 
    //        self.indexViewModel.character(character);
      //      self.indexViewModel.showStarterPage(false);
        };


        reader.readAsText(filename);
//            var text = '{"player":"dude","name":"wherecar","rank":123,"credits":666,"xp":2222560,"prestige":1000}';
  //          var parsed = JSON.parse(text);
    //       kom.fromJSON(text, {}, self); 
*/
    }
}

return characterViewModel;

});