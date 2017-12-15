'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var t = _ref.types;

    return {
        visitor: {
            StringLiteral: function StringLiteral() {
                console.log('found a StringLiteral');
            }
        }
    };
};