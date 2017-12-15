'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var t = _ref.types;

    return {
        visitor: {
            Literal: function Literal() {
                console.log('found a literal');
            }
        }
    };
};