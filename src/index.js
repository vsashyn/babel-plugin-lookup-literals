export default function({types: t }) {
    return {
        visitor: {
            StringLiteral(node, state) {
                console.log(`Found a JSXText: ${state.file.opts.filename}, ${node.start}, ${node.end}, ${node.value}`);

            },
            JSXText(node, state) {
                console.log(`Found a JSXText: ${state.file.opts.filename}, ${node.start}, ${node.end}, ${node.value}`);
            }
        }
    }
}