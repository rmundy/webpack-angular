/* jshint browser:true */
/* global angular*/

require('./vendor')();

// Load the main app file
const appModule = require('../index');

// Replaces ng-app="appName"

/* eslint-disable prefer-arrow-callback */
angular.element(document).ready(function ab() {
  angular.bootstrap(document, [appModule.name], {
        // strictDi: true
  });
});
/* eslint-enable prefer-arrow-callback */

