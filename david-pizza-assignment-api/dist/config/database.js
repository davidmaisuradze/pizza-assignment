'use strict';

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

_mongoose2.default.Promise = global.Promise;
try {
    _mongoose2.default.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
} catch (err) {
    console.log(err, 'mongoose connection error');
}

_mongoose2.default.connection.once('open', function () {
    return console.log('MongoDB running');
}).on('error', function (e) {
    throw e;
});
//# sourceMappingURL=database.js.map