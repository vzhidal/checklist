define(function(require) {
    'use strict';

    var ko = require('knockout');
    var $ = require('jquery');
    var codemirror = require('codemirror');

    var formatter = require('js-beautify');

    require('codemirror/mode/css/css');
    require('codemirror/mode/htmlmixed/htmlmixed');

    ko.bindingHandlers.codemirror = {
        init: function(element, valueAccessor, allBindingsAccessor) {
            var defaults = {
                lineNumbers: true
            };

            var editor = codemirror.fromTextArea(element, ko.utils.extend(defaults, valueAccessor()));

            $(element).data('editor', editor);
        },
        update: function(element, valueAccessor) {
            var editor = $(element).data('editor');

            var options = valueAccessor();

            var value = options.value;

            switch(options.mode) {
                case 'htmlmixed':
                    value = formatter.html_beautify(value);
                    break;
                case 'css':
                    value = formatter.css_beautify(value);
                    break;
                case 'javascript':
                    value = formatter.js_beautify(value);
                    break;
            }

            editor.doc.setValue(value);

        }
    };
});