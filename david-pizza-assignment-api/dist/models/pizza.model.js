'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var pizzaSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    userEmail: { type: String, ref: 'users' }
}, { timestamps: true });

exports.default = _mongoose2.default.model('pizzas', pizzaSchema);
//# sourceMappingURL=pizza.model.js.map