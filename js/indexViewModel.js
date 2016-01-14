define(
["knockout"], 
function(ko) 
{

function indexViewModel()
{
    var self = this;

    self.showStarterPage = ko.observable(true);



    /*
    self.mainvm = ko.observable(mainvm);
    self.index = index;
    self.visible = ko.observable(false);  
    self.selectpage = function()
    {
        selectthispage(index);
    };
    */
}

return indexViewModel;

});
