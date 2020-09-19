'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _authenticate = require('../middlewares/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

var _expressJoiValidation = require('express-joi-validation');

var _order = require('../controllers/order/order.controller');

var OrderController = _interopRequireWildcard(_order);

var _order2 = require('../controllers/order/order.validators');

var _order3 = _interopRequireDefault(_order2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validator = (0, _expressJoiValidation.createValidator)();

var routes = new _express.Router();

// GET
routes.get('/', _authenticate2.default, OrderController.getAllOrders);

// POST
routes.post('/', _authenticate2.default, validator.body(_order3.default.createOrder), OrderController.createOrder);

exports.default = routes;
//# sourceMappingURL=order.routes.js.map