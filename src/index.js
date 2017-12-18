export default function({types: t }) {
    return {
        visitor: {
            StringLiteral(path, options) {
                console.log('found a StringLiteral')
            },
            jSXText(path, options) {
                console.log('found a jSXText');
            }
        }
    }
}