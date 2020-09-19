'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _errorUtils = require('./error-utils');

var _errorUtils2 = _interopRequireDefault(_errorUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (err, req, res, next) {
    if (!err) {
        return new _errorUtils2.default('Server error', _httpStatus2.default.INTERNAL_SERVER_ERROR);
    }

    var error = {
        message: err.message || 'Internal Server Error.'
    };

    if (err.errors) {
        error.errors = {};
        var errors = err.errors;

        if (Array.isArray(errors)) {
            error.errors = _errorUtils.RequiredError.makePretty(errors);
        } else {
            Object.keys(errors).forEach(function (key) {
                error.errors[key] = errors[key].message;
            });
        }
    }

    res.status(err.status || _httpStatus2.default.INTERNAL_SERVER_ERROR).json(error);

    return next();
};
//# sourceMappingURL=log-error.utils.js.map