export default function({types: t }) {
    return {
        visitor: {
            Literal() {
                console.log('found a literal')
            }
        }
    }
}