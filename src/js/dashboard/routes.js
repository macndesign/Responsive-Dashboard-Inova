'use strict';

/**
 * Route configuration for the Dashboard module.
 */
angular.module('Dashboard').config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/');

    // Application routes
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'dashboard.html'
        })
        .state('tables', {
            url: '/tables', 
            templateUrl: 'tables.html'
        })
        .state('smart-table', {
            url: '/smart-table',
            templateUrl: 'smart-table.html'
        })
        .state('ui-select', {
            url: '/ui-select',
            templateUrl: 'ui-select.html'
        });
}]);
