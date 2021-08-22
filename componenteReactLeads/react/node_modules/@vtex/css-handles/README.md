# @vtex/css-handles

> Module for handling CSS classes

### Setup

```sh
yarn add @vtex/css-handles
```

### Usage

```jsx
import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

const FooComponent = ({ blockClass }) => {
  const classes = generateBlockClass(styles.container, blockClass)

  return (
    <div className={classes}>
      Hello world!
    </div>
  )
}

export default FooComponent
```

It will render:

```html
<div class="vtex-foo-1-x-container vtex-foo-1-x-container--bar">
  Hello world!
</div>
```

### Development

After installing dependencies, with `yarn`, run:

```sh
yarn run build
```

### Publishing

After installing dependencies, with `yarn`, run:

```sh
yarn run publish
```