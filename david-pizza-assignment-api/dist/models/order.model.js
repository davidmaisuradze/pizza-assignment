'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var orderSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    orderedPizzas: { type: String, required: false },
    totalPrice: { type: Number, required: true },
    userEmail: { type: String, ref: 'users' }
}, { timestamps: true });

exports.default = _mongoose2.default.model('orders', orderSchema);
//# sourceMappingURL=order.model.js.map