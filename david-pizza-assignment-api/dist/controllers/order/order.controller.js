'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createOrder = exports.getAllOrders = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _order = require('../../services/order.service');

var orderService = _interopRequireWildcard(_order);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllOrders = exports.getAllOrders = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
        var currentUser, _ref2, status, data;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        currentUser = req.currentUser;
                        _context.next = 3;
                        return orderService.getAllOrders(currentUser.email);

                    case 3:
                        _ref2 = _context.sent;
                        status = _ref2.status;
                        data = _ref2.data;
                        return _context.abrupt('return', res.status(status).json(data));

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getAllOrders(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var createOrder = exports.createOrder = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
        var currentUser, body, _ref4, status, data;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        currentUser = req.currentUser, body = req.body;
                        _context2.next = 3;
                        return orderService.createOrder(currentUser.email, body);

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

    return function createOrder(_x4, _x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();
//# sourceMappingURL=order.controller.js.map