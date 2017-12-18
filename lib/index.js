'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var t = _ref.types;

    return {
        visitor: {
            StringLiteral: function StringLiteral(path, state) {
                var value = path.node.value;
                if (state.opts.trackStringLiteral) {
                    if (!isEmpty(value)) {
                        console.log('Found a StringLiteral: ' + state.file.opts.filename + ', ' + path.node.value);
                    }
                }
            },
            JSXText: function JSXText(path, state) {
                var value = path.node.value;
                if (state.opts.trackJSXText) {
                    if (!isEmpty(value)) {
                        console.log('Found a JSXText: ' + state.file.opts.filename + ', ' + path.node.value);
                    }
                }
            }
        }
    };
};

var _babelTypes = require('babel-types');

var types = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var isEmpty = function isEmpty(str) {
    return str.trim() === '';
};