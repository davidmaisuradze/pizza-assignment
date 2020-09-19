'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    login: _joi2.default.object({
        email: _joi2.default.string().email().required(),
        password: _joi2.default.string().required()
    }),
    register: _joi2.default.object({
        email: _joi2.default.string().email().required(),
        password: _joi2.default.string().required(),
        confirmedPassword: _joi2.default.string().required(),
        firstName: _joi2.default.string().required(),
        lastName: _joi2.default.string().required()
    })
};
//# sourceMappingURL=auth.validators.js.map