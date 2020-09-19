'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deletePizza = exports.updatePizza = exports.createPizza = exports.getAllPizzas = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _pizza = require('../models/pizza.model');

var _pizza2 = _interopRequireDefault(_pizza);

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllPizzas = exports.getAllPizzas = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var pizzas;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _pizza2.default.find({}).sort('-createdAt');

                    case 3:
                        pizzas = _context.sent;
                        return _context.abrupt('return', { status: _httpStatus2.default.OK, data: pizzas });

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](0);
                        return _context.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: _context.t0 });

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 7]]);
    }));

    return function getAllPizzas() {
        return _ref.apply(this, arguments);
    };
}();

var createPizza = exports.createPizza = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(currentUserEmail, data) {
        var title, description, type, price, userEmail, email, user, newPizza, result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        title = data.title, description = data.description, type = data.type, price = data.price, userEmail = data.userEmail;
                        email = userEmail || currentUserEmail;
                        _context2.next = 5;
                        return _user2.default.findOne({ email: email });

                    case 5:
                        user = _context2.sent;

                        if (user) {
                            _context2.next = 8;
                            break;
                        }

                        return _context2.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: 'user not found' });

                    case 8:
                        newPizza = new _pizza2.default({
                            title: title,
                            description: description,
                            type: type,
                            price: price,
                            userEmail: email
                        });
                        _context2.next = 11;
                        return newPizza.save();

                    case 11:
                        result = _context2.sent;
                        return _context2.abrupt('return', { status: _httpStatus2.default.OK, data: result });

                    case 15:
                        _context2.prev = 15;
                        _context2.t0 = _context2['catch'](0);

                        console.log(_context2.t0, 'err');
                        return _context2.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: _context2.t0 });

                    case 19:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 15]]);
    }));

    return function createPizza(_x, _x2) {
        return _ref2.apply(this, arguments);
    };
}();

var updatePizza = exports.updatePizza = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(currentUserEmail, data) {
        var _id, title, description, type, price, userEmail, email, user, result;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _id = data._id, title = data.title, description = data.description, type = data.type, price = data.price, userEmail = data.userEmail;
                        email = userEmail || currentUserEmail;
                        _context3.next = 5;
                        return _user2.default.findOne({ email: email });

                    case 5:
                        user = _context3.sent;

                        if (user) {
                            _context3.next = 8;
                            break;
                        }

                        return _context3.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: 'user not found' });

                    case 8:
                        _context3.next = 10;
                        return _pizza2.default.findOneAndUpdate({ _id: _id }, {
                            $set: {
                                title: title,
                                description: description,
                                type: type,
                                price: price,
                                userEmail: email
                            }
                        }, { upsert: true, new: true });

                    case 10:
                        result = _context3.sent;
                        return _context3.abrupt('return', { status: _httpStatus2.default.OK, data: result });

                    case 14:
                        _context3.prev = 14;
                        _context3.t0 = _context3['catch'](0);
                        return _context3.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: _context3.t0 });

                    case 17:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[0, 14]]);
    }));

    return function updatePizza(_x3, _x4) {
        return _ref3.apply(this, arguments);
    };
}();

var deletePizza = exports.deletePizza = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(pizzaId) {
        var result;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return _pizza2.default.findOneAndDelete({ _id: pizzaId });

                    case 3:
                        result = _context4.sent;
                        return _context4.abrupt('return', { status: _httpStatus2.default.OK, data: result });

                    case 7:
                        _context4.prev = 7;
                        _context4.t0 = _context4['catch'](0);
                        return _context4.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: _context4.t0 });

                    case 10:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined, [[0, 7]]);
    }));

    return function deletePizza(_x5) {
        return _ref4.apply(this, arguments);
    };
}();
//# sourceMappingURL=pizza.service.js.map