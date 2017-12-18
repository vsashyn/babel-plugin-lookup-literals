export default function({types: t }) {
    return {
        visitor: {
            StringLiteral(path, options) {
                // console.log('found a StringLiteral')
                var description = []
                for (let expression of path.node.arguments) {
                    if (description.length === 0) {
                        let relativePath
                        let filePath = this.file.log.filename
                        if (filePath.charAt(0) !== '/') {
                            relativePath = filePath
                        } else {
                            let cwd = process.cwd()
                            relativePath = filePath.substring(cwd.length + 1)
                        }

                        let line = expression.loc.start.line
                        let column = expression.loc.start.column
                        description.push(`${relativePath}:${line}:${column}:${this.file.code.substring(expression.start, expression.end)}`)
                    } else {
                        description.push(this.file.code.substring(expression.start, expression.end))
                    }


                }
                console.log(description.join(','))
            },
            jSXText(path, options) {
                console.log('found a jSXText');
            }
        }
    }
}