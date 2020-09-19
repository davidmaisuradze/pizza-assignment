'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deletePizza = exports.updatePizza = exports.createPizza = exports.getAllPizzas = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _pizza = require('../../services/pizza.service');

var pizzaService = _interopRequireWildcard(_pizza);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllPizzas = exports.getAllPizzas = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
        var _ref2, status, data;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return pizzaService.getAllPizzas();

                    case 2:
                        _ref2 = _context.sent;
                        status = _ref2.status;
                        data = _ref2.data;
                        return _context.abrupt('return', res.status(status).json(data));

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getAllPizzas(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var createPizza = exports.createPizza = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
        var currentUser, body, _ref4, status, data;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        currentUser = req.currentUser, body = req.body;
                        _context2.next = 3;
                        return pizzaService.createPizza(currentUser.email, body);

                    case 3:
                        _ref4 = _context2.sent;
                        status = _ref4.status;
                        data = _ref4.data;
                        return _context2.abrupt('return', res.status(status).json(data));

                    case 7:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function createPizza(_x4, _x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var updatePizza = exports.updatePizza = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
        var currentUser, body, _ref6, status, data;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        currentUser = req.currentUser, body = req.body;
                        _context3.next = 3;
                        return pizzaService.updatePizza(currentUser.email, body);

                    case 3:
                        _ref6 = _context3.sent;
                        status = _ref6.status;
                        data = _ref6.data;
                        return _context3.abrupt('return', res.status(status).json(data));

                    case 7:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function updatePizza(_x7, _x8, _x9) {
        return _ref5.apply(this, arguments);
    };
}();

var deletePizza = exports.deletePizza = function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res, next) {
        var _ref8, status, data;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return pizzaService.deletePizza(req.params.pizzaId);

                    case 2:
                        _ref8 = _context4.sent;
                        status = _ref8.status;
                        data = _ref8.data;
                        return _context4.abrupt('return', res.status(status).json(data));

                    case 6:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function deletePizza(_x10, _x11, _x12) {
        return _ref7.apply(this, arguments);
    };
}();
//# sourceMappingURL=pizza.controller.js.map