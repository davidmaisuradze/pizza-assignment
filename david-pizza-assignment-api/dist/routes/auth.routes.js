'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _authenticate = require('../middlewares/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

var _expressJoiValidation = require('express-joi-validation');

var _auth = require('../controllers/auth/auth.controller');

var AuthController = _interopRequireWildcard(_auth);

var _auth2 = require('../controllers/auth/auth.validators');

var _auth3 = _interopRequireDefault(_auth2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validator = (0, _expressJoiValidation.createValidator)();

var routes = new _express.Router();

// POST
routes.post('/login', validator.body(_auth3.default.login), AuthController.login);
routes.post('/register', validator.body(_auth3.default.register), AuthController.register);

exports.default = routes;
//# sourceMappingURL=auth.routes.js.map