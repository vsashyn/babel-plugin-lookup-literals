import * as types from 'babel-types';

export default function({types: t }) {
    return {
        visitor: {
            StringLiteral(path, state) {
                if (state.opts.trackStringLiteral) {
                    console.log(`Found a StringLiteral: ${state.file.opts.filename}, ${path.node.value}`);
                }

            },
            JSXText(path, state) {
                if (state.opts.trackJSXText) {
                    console.log(`Found a JSXText: ${state.file.opts.filename}, ${path.node.value}`);
                }
            }
        }
    }
}