'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createOrder = exports.getAllOrders = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _order = require('../models/order.model');

var _order2 = _interopRequireDefault(_order);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllOrders = exports.getAllOrders = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(currentUserEmail) {
        var user, orders;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _user2.default.findOne({ email: currentUserEmail });

                    case 3:
                        user = _context.sent;

                        if (user) {
                            _context.next = 6;
                            break;
                        }

                        return _context.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: 'user not found' });

                    case 6:
                        _context.next = 8;
                        return _order2.default.find({ userEmail: currentUserEmail }).sort('-createdAt');

                    case 8:
                        orders = _context.sent;
                        return _context.abrupt('return', { status: _httpStatus2.default.OK, data: orders });

                    case 12:
                        _context.prev = 12;
                        _context.t0 = _context['catch'](0);
                        return _context.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: _context.t0 });

                    case 15:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 12]]);
    }));

    return function getAllOrders(_x) {
        return _ref.apply(this, arguments);
    };
}();

var createOrder = exports.createOrder = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(currentUserEmail, data) {
        var name, surname, mobile, address, totalPrice, orderedPizzas, user, newOrder, result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        name = data.name, surname = data.surname, mobile = data.mobile, address = data.address, totalPrice = data.totalPrice, orderedPizzas = data.orderedPizzas;
                        _context2.next = 4;
                        return _user2.default.findOne({ email: currentUserEmail });

                    case 4:
                        user = _context2.sent;

                        if (user) {
                            _context2.next = 7;
                            break;
                        }

                        return _context2.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: 'user not found' });

                    case 7:
                        newOrder = new _order2.default({
                            name: name,
                            surname: surname,
                            mobile: mobile,
                            address: address,
                            totalPrice: totalPrice,
                            orderedPizzas: orderedPizzas,
                            userEmail: currentUserEmail
                        });
                        _context2.next = 10;
                        return newOrder.save();

                    case 10:
                        result = _context2.sent;
                        return _context2.abrupt('return', { status: _httpStatus2.default.OK, data: result });

                    case 14:
                        _context2.prev = 14;
                        _context2.t0 = _context2['catch'](0);

                        console.log(_context2.t0, 'err');
                        return _context2.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: _context2.t0 });

                    case 18:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 14]]);
    }));

    return function createOrder(_x2, _x3) {
        return _ref2.apply(this, arguments);
    };
}();
//# sourceMappingURL=order.service.js.map