# react-scrollto
React component that only renders its contents if it's showIf prop is true.

This is designed to make a more readable version of {condition? (<SomeComponentsHere>...</SomeCompnentsHere>): null} were its helpful,
but is not designed to replace that pattern altogether, in particular, that pattern is always better when an else or condition chaining is to be used.

## Installation

Install react-conditionalfragment locally within your project folder, like so:

```shell
npm install react-conditionalfragment
```

Or with yarn:

```shell
yarn add react-conditionalfragment
```

## Basic Usage

Wrap your optional components in a <ConditionalFragment showIf={...}> with showIf={} set to the condition to check before including the components.

### Typescript
```ts
import { ScrollTo } from 'react-conditionalfragment';

// Usage with children
<ConditionalFragment showIf={isOpen}>
    <YourComponentsHere />
    ...
</ConditionalFragment>

```

### Javascript
```js
import { ScrollTo } from 'react-conditionalfragment';

// Usage with children
<ConditionalFragment showIf={isOpen}>
    <YourComponentsHere />
    ...
</ConditionalFragment>
```

## Typescript
This package is written in typescript and comes with its own bindings.

## License

Licensed under the MIT license.
