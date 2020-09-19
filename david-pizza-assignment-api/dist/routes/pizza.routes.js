'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _authenticate = require('../middlewares/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

var _expressJoiValidation = require('express-joi-validation');

var _pizza = require('../controllers/pizza/pizza.controller');

var PizzaController = _interopRequireWildcard(_pizza);

var _pizza2 = require('../controllers/pizza/pizza.validators');

var _pizza3 = _interopRequireDefault(_pizza2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validator = (0, _expressJoiValidation.createValidator)();

var routes = new _express.Router();

// GET
routes.get('/', _authenticate2.default, PizzaController.getAllPizzas);

// POST
routes.post('/', _authenticate2.default, validator.body(_pizza3.default.createPizza), PizzaController.createPizza);

// PUT
routes.put('/', _authenticate2.default, validator.body(_pizza3.default.updatePizza), PizzaController.updatePizza);

// DELETE
routes.delete('/:pizzaId', _authenticate2.default, validator.params(_pizza3.default.deletePizza), PizzaController.deletePizza);

exports.default = routes;
//# sourceMappingURL=pizza.routes.js.map