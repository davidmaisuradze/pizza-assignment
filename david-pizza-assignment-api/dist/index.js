'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _middlewares = require('./config/middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

require('./config/database');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// wrap all the middlewares
(0, _middlewares2.default)(app);

// add the apiRoutes
app.use('/api', _routes2.default);
app.use('/static', _express2.default.static(_path2.default.join(__dirname, '../public')));

var port = process.env.PORT || 4500;
app.listen(port, function () {
  return console.log('Running on localhost: ' + port);
});
//# sourceMappingURL=index.js.map