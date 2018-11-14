// This file isn't transpiled, therefore we must use CommonJS and ES5

// Register babel to translatge before our tests runs.
require('babel-register')();

// Disable webpack features that Mocha does not understand
// for example the import of.css file in our js file
require.extensions['.css'] = function() {};
