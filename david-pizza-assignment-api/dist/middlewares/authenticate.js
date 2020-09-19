'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
        var token, decoded;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        token = req.headers.authorization;

                        if (!token) {
                            _context.next = 10;
                            break;
                        }

                        decoded = _jsonwebtoken2.default.verify(token, process.env.JWT_SECRET);
                        _context.next = 6;
                        return _user2.default.findOne({ email: decoded.email });

                    case 6:
                        req.currentUser = _context.sent;

                        next();
                        _context.next = 11;
                        break;

                    case 10:
                        return _context.abrupt('return', res.status(_httpStatus2.default.UNAUTHORIZED).json('unauthorized'));

                    case 11:
                        _context.next = 16;
                        break;

                    case 13:
                        _context.prev = 13;
                        _context.t0 = _context['catch'](0);
                        return _context.abrupt('return', res.status(_httpStatus2.default.UNAUTHORIZED).json('unauthorized'));

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 13]]);
    }));

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();
//# sourceMappingURL=authenticate.js.map