'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'library-ui',
    environment,
    rootURL: '/',
    locationType: 'auto',
    fastboot: {
      hostWhitelist: [/^localhost:\d+$/],
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'ember-simple-auth-token': {
      identificationField: 'email',
      passwordField: 'password',
      headers: {
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json',
      },
      // The backend doesn't support refresh of access tokens
      refreshAccessTokens: false,
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.tokenServer = 'http://localhost:3000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;

    ENV['ember-cli-mirage'] = {
      enabled: true,
    };
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV['ember-simple-auth-token'] = {
      serverTokenEndpoint: 'https://elibapi.herokuapp.com/session',
      // The backend doesn't support refresh of access tokens
      refreshAccessTokens: false,
    };
    ENV.apiHost = process.env.API_HOST || 'https://elibapi.herokuapp.com';
    const clientHost = process.env.CLIENT_HOST || 'elibui.herokuapp.com';
    ENV.fastboot.hostWhitelist = [ENV.apiHost, clientHost];
    ENV.tokenServer = ENV.apiHost;
  }

  ENV[
    'ember-simple-auth-token'
  ].serverTokenEndpoint = `${ENV.tokenServer}/session`;

  return ENV;
};
