'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.register = exports.login = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _auth = require('../../services/auth.service');

var authService = _interopRequireWildcard(_auth);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
        var _req$body, email, password, _ref2, status, data;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _req$body = req.body, email = _req$body.email, password = _req$body.password;
                        _context.next = 3;
                        return authService.login(email, password);

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

    return function login(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var register = exports.register = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
        var _ref4, status, data;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return authService.register(req.body);

                    case 2:
                        _ref4 = _context2.sent;
                        status = _ref4.status;
                        data = _ref4.data;
                        return _context2.abrupt('return', res.status(status).json(data));

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function register(_x4, _x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();
//# sourceMappingURL=auth.controller.js.map