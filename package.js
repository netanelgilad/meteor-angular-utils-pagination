Package.describe({
  name: 'urigo:angular-utils-pagination',
  summary: 'Magical automatic pagination for anything in AngularJS',
  version: '1.0.0',
  git: 'https://github.com/Urigo/meteor-angular-utils-pagination.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.addFiles(['dirPagination.js', 'dirPagination.tpl.html'],'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('urigo:angular-utils-pagination');
  api.addFiles('urigo:angular-utils-pagination-tests.js');
});
