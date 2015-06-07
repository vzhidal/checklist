define(function(require) {
    'use strict';

    var ko = require('knockout');
    var $ = require('jquery');
    var ViewModel = require('checkListViewModel');
    var quizesProvider = require('quizesProvider');

    require('bindings/codemirror');

    return {
        init: function() {
//			$(window).focus(function() {
//				console.log('focus');
//			});
//
//			$(window).blur(function() {
//				console.log('blur');
//			});
            quizesProvider.get('css-box-model').then(function(data) {
                ko.applyBindings(new ViewModel(data));
            });
        }
    };
});

