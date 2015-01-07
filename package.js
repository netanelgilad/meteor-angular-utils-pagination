Package.describe({
  name: 'urigo:angular-utils-pagination',
  summary: 'Magical automatic pagination for anything in AngularJS',
  version: '1.0.2',
  git: 'https://github.com/Urigo/meteor-angular-utils-pagination.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('urigo:angular@0.6.0-alpha', 'client');

  api.addFiles(['dirPagination.tpl', 'dirPagination.js'],'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('urigo:angular-utils-pagination');
  api.addFiles('urigo:angular-utils-pagination-tests.js');
});
