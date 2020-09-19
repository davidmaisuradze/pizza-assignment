'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    createOrder: _joi2.default.object({
        name: _joi2.default.string().required(),
        surname: _joi2.default.string().required(),
        mobile: _joi2.default.string().required(),
        address: _joi2.default.string().required(),
        totalPrice: _joi2.default.number().required(),
        orderedPizzas: _joi2.default.string()
    })
};
//# sourceMappingURL=order.validators.js.map