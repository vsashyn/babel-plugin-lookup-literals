# babel-plugin-lookup-literals

Helps to find string literals in your code. Useful in case of l10n enhancements.

## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-lookup-literals
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["lookup-literals", {
                    "trackStringLiteral": false,
                    "trackJSXText": true
    }]
}
```

### Via CLI

```sh
$ babel --plugins lookup-literals script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["lookup-literals"]
});
```
### Example

Shows found literals in console. Plugin doesn't change source code.
