define(
['knockout', 'lodash', 'jquery', 'text!../language/en-us', 'text!../language/pg-lt'], 
function(ko, _, $, en_ustext, pg_lttext) 
{

function getLocalizedTextBinding(selectedCode)
{
    var self = this;

    // localization stuff
    var currentlanguage;
    self.languages = ko.observableArray();
    self.selectedlanguage = ko.observable();

    // load languages
    var defaultLanguage = loadLanguage(en_ustext)
    self.languages().push(defaultLanguage);
    self.defaultLanguage = ko.observable(defaultLanguage);
    self.languages().push(loadLanguage(pg_lttext));

    var selectedLanguage = _.find(self.languages(), function(o) { return o.code == selectedCode; });
    self.selectedlanguage(selectedLanguage);

    // helpers
    function loadLanguage(jsonText)
    {
        return $.parseJSON(jsonText);
    }

    var binding = 
    {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext)
        {
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext)
        {
            var value = ko.unwrap(valueAccessor());
            var localizedText = self.selectedlanguage()[value];
            if (localizedText == null)
            {
                localizedText = self.defaultLanguage()[value];
                if (localizedText == null)
                {
                    localizedText = "no localized text for this field, please file a bug report";
                }
            }
            $(element).text(localizedText);
        }
    };

    return binding;
}

return getLocalizedTextBinding;

});