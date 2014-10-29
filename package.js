Package.describe({
  name: 'urigo:angular-utils-pagination',
  summary: 'Magical automatic pagination for anything in AngularJS',
  version: '1.0.2',
  git: 'https://github.com/Urigo/meteor-angular-utils-pagination.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('urigo:angular@0.5.1', 'client');
  api.use('urigo:angular-ui-router@0.6.1', 'client');
  api.use(['templating'], 'client');

  api.addFiles(['dirPagination.tpl.html', 'dirPagination.js'],'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('urigo:angular-utils-pagination');
  api.addFiles('urigo:angular-utils-pagination-tests.js');
});
