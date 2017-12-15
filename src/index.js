export default function({types: t }) {
    return {
        visitor: {
            StringLiteral() {
                console.log('found a StringLiteral')
            }
        }
    }
}