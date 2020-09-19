'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _logError = require('../utils/log-error.utils');

var _logError2 = _interopRequireDefault(_logError);

var _auth = require('./auth.routes');

var _auth2 = _interopRequireDefault(_auth);

var _pizza = require('./pizza.routes');

var _pizza2 = _interopRequireDefault(_pizza);

var _order = require('./order.routes');

var _order2 = _interopRequireDefault(_order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// middleware to log errors
var routes = new _express.Router();

// register routes


// ROUTES
routes.use('/auth', _auth2.default);
routes.use('/pizza', _pizza2.default);
routes.use('/orders', _order2.default);

routes.all('*', function (req, res, next) {
    res.sendFile(_path2.default.join(__dirname, '../index.html'));
});

routes.use(_logError2.default);

exports.default = routes;
//# sourceMappingURL=index.js.map