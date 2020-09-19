'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    createPizza: _joi2.default.object({
        userEmail: _joi2.default.string().email().allow(null, ''),
        title: _joi2.default.string().required(),
        price: _joi2.default.number().required(),
        description: _joi2.default.string().required(),
        type: _joi2.default.string().required()
    }),
    updatePizza: _joi2.default.object({
        _id: _joi2.default.string().required(),
        userEmail: _joi2.default.string().email().allow(null, ''),
        title: _joi2.default.string().required(),
        price: _joi2.default.number().required(),
        description: _joi2.default.string().required(),
        type: _joi2.default.string().required()
    }),
    deletePizza: _joi2.default.object({
        pizzaId: _joi2.default.string().required()
    })
};
//# sourceMappingURL=pizza.validators.js.map