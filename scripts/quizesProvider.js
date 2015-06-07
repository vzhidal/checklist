define(function(require) {
    'use strict';

    var $ = require('jquery');

    function get(name) {
        return $.ajax('data/' + name + '.json');
    }

    return {
        get: get
    };
});