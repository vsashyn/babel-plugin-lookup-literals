import * as types from 'babel-types';

export default function({types: t }) {
    return {
        visitor: {
            StringLiteral(path, state) {
                const value = path.node.value;
                if (state.opts.trackStringLiteral) {
                    if (!isEmpty(value)) {
                        console.log(`Found a StringLiteral: ${state.file.opts.filename}, ${path.node.value}`);
                    }
                }

            },
            JSXText(path, state) {
                const value = path.node.value;
                if (state.opts.trackJSXText) {
                    if (!isEmpty(value)) {
                        console.log(`Found a JSXText: ${state.file.opts.filename}, ${path.node.value}`);
                    }
                }
            }
        }
    }
}

const isEmpty = (str) => {
  return str.trim() === ''
};