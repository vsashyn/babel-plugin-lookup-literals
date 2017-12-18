import * as types from 'babel-types';

export default function({types: t }) {
    return {
        visitor: {
            StringLiteral(value, state) {
                console.log(`Found a StringLiteral: ${state.file.opts.filename}, ${value}`);

            },
            JSXText(value, state) {

                console.log(`Found a JSXText: ${state.file.opts.filename}, ${value}`);
            }
        }
    }
}