"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var t = _ref.types;

    return {
        visitor: {
            StringLiteral: function StringLiteral(node, state) {
                console.log("Found a JSXText: " + state.file.opts.filename + ", " + node.start + ", " + node.end + ", " + node.value);
            },
            JSXText: function JSXText(node, state) {
                console.log("Found a JSXText: " + state.file.opts.filename + ", " + node.start + ", " + node.end + ", " + node.value);
            }
        }
    };
};