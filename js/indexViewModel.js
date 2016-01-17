define(
['knockout', 'text!../language/en-us', 'text!../language/pg-lt'], 
function(ko, en_ustext, pg_lttext) 
{

function indexViewModel()
{
    var self = this;


    //
    // localization stuff
    //
    self.showStarterPage = ko.observable(true);
    var currentlanguage;
    self.languages = ko.observableArray();
    self.selectedlanguage = ko.observable();

    // en-us
    currentlanguage = $.parseJSON(en_ustext);
    self.languages().push(currentlanguage);
    self.selectedlanguage(currentlanguage);
    self.enus = ko.observable(currentlanguage);

    // pg_lt
    currentlanguage = $.parseJSON(pg_lttext);
    self.languages().push(currentlanguage);
}

return indexViewModel;

});
