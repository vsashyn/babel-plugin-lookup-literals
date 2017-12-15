# babel-plugin-lookup-literals



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
  "plugins": ["lookup-literals"]
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
