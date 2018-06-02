# color-this

[![GitHub stars](https://img.shields.io/github/stars/eknowles/color-this.svg?style=for-the-badge)](https://github.com/eknowles/color-this/stargazers)
[![GitHub license](https://img.shields.io/github/license/eknowles/color-this.svg?style=for-the-badge)](https://github.com/eknowles/color-this)
[![GitHub issues](https://img.shields.io/github/issues/eknowles/color-this.svg?style=for-the-badge)](https://github.com/eknowles/color-this/issues)

> Generate a random color from a given string

Add color to graph series names, months of the year, days of the week, super useful to add a unique subtle differentiator.

## Getting Started

Load from npm

```bash
# NPM
npm i @eknowles/color-this

# Yarn
yarn add @eknowles/color-this
```

Now import and use in React, Node or wherever!

```javascript
import React from 'react';
import ct from '@eknowles/color-this';

export const MyLabelComponent = ({text}) => (
  <div style={{background: ct(text)}}>{text}</div>
);
```

## Frameworks

AngularJS - http://eknowles.github.io/angular-color-this/
