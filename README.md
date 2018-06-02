# color-this

[![npm](https://img.shields.io/npm/v/@eknowles/color-this.svg?style=for-the-badge)](https://github.com/eknowles/color-this/releases)
[![Travis branch](https://img.shields.io/travis/eknowles/color-this/master.svg?style=for-the-badge)](https://travis-ci.org/eknowles/color-this)
[![Coveralls github branch](https://img.shields.io/coveralls/github/eknowles/color-this/master.svg?style=for-the-badge)](https://coveralls.io/github/eknowles/color-this)
[![GitHub stars](https://img.shields.io/github/stars/eknowles/color-this.svg?style=for-the-badge)](https://github.com/eknowles/color-this/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/eknowles/color-this.svg?style=for-the-badge)](https://github.com/eknowles/color-this/issues)

> Generate a random color from a given string

Add color to graph series names, months of the year, days of the week, super useful to add a unique subtle differentiator.

### Demos

- Basic React Demo https://color-this-demo.stackblitz.io

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
