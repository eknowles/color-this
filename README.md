# color-this

> Generate a random color from a given string

Add color to graph series names, months of the year, days of the week etc.

## Getting Started

Load from npm

```bash
# NPM
npm i color-this

# Yarn
yarn add color-this
```

Now import and use in React, Node or wherever!

```javascript
import React from 'react';
import ct from 'color-this';

export const MyLabelComponent = ({text}) => (
  <div style={{background: ct(text)}}>{text}</div>
);
```

