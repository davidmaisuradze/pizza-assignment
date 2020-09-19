'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.register = exports.login = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _constants = require('../config/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(email, password) {
        var user, generatedJWT, userObject, userToAuthJson;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _user2.default.findOne({ email: email });

                    case 3:
                        user = _context.sent;

                        if (user) {
                            _context.next = 6;
                            break;
                        }

                        return _context.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: 'user not found' });

                    case 6:
                        if (!(user && _bcryptjs2.default.compareSync(password, user.passwordHash))) {
                            _context.next = 14;
                            break;
                        }

                        generatedJWT = _jsonwebtoken2.default.sign({
                            email: email
                        }, process.env.JWT_SECRET, { expiresIn: '7d' });
                        userObject = (0, _extends3.default)({}, user.toObject());

                        delete userObject.passwordHash;

                        userToAuthJson = {
                            token: generatedJWT,
                            user: (0, _extends3.default)({
                                email: email
                            }, userObject)
                        };
                        return _context.abrupt('return', { status: _httpStatus2.default.OK, data: userToAuthJson });

                    case 14:
                        return _context.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: 'Invalid credentials' });

                    case 15:
                        _context.next = 21;
                        break;

                    case 17:
                        _context.prev = 17;
                        _context.t0 = _context['catch'](0);

                        console.log(_context.t0, 'err');
                        return _context.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: _context.t0 });

                    case 21:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 17]]);
    }));

    return function login(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var register = exports.register = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(data) {
        var email, password, confirmedPassword, firstName, lastName, user, salt, passwordHash, newUser, result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        email = data.email, password = data.password, confirmedPassword = data.confirmedPassword, firstName = data.firstName, lastName = data.lastName;

                        if (!(password !== confirmedPassword)) {
                            _context2.next = 4;
                            break;
                        }

                        return _context2.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: 'passwords not match' });

                    case 4:
                        _context2.next = 6;
                        return _user2.default.findOne({ email: email });

                    case 6:
                        user = _context2.sent;

                        if (!user) {
                            _context2.next = 9;
                            break;
                        }

                        return _context2.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: 'user already exists' });

                    case 9:
                        _context2.next = 11;
                        return _bcryptjs2.default.genSalt(10);

                    case 11:
                        salt = _context2.sent;
                        passwordHash = _bcryptjs2.default.hashSync(password, salt);
                        newUser = new _user2.default({
                            email: email,
                            firstName: firstName,
                            lastName: lastName,
                            passwordHash: passwordHash,
                            role: _constants.ROLES.User // assign default user role to newly registered user
                        });
                        _context2.next = 16;
                        return newUser.save();

                    case 16:
                        result = _context2.sent;

                        delete result.passwordHash;

                        return _context2.abrupt('return', { status: _httpStatus2.default.OK, data: result });

                    case 21:
                        _context2.prev = 21;
                        _context2.t0 = _context2['catch'](0);

                        console.log(_context2.t0, 'err');
                        return _context2.abrupt('return', { status: _httpStatus2.default.BAD_REQUEST, data: _context2.t0 });

                    case 25:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 21]]);
    }));

    return function register(_x3) {
        return _ref2.apply(this, arguments);
    };
}();
//# sourceMappingURL=auth.service.js.map