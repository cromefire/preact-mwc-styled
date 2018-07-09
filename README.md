# preact-mwc-styled
[![Build Status](https://travis-ci.com/Cromefire/preact-mwc-styled.svg?branch=master)](https://travis-ci.com/Cromefire/preact-mwc-styled)

Automatically styles preact-material-components (needs to be used with something like webpack)

## Usage
### If you don't use sass:
```javascript
module.exports = {
    // [...]
    rules: [
        {
            test: {
                test: /\.scss$/,
                and: /^node_modules\/precat-mwc-styled/
            },
            use: [
                {loader: "style-loader/usable"},
                {loader: "css-loader"},
                {
                    loader: "postcss-loader", options: {
                        plugins: [
                            require("postcss-custom-properties")({strict: false, preserve: true}),
                            require("autoprefixer")
                        ]
                    }
                },
                {loader: "sass-loader", options: {includePaths: ["./node_modules"]}},
                {loader: "sass-resources-loader", options: {resources: "<path to your theme>"}}
            ]
        }
        // [...]
    ]
    // [...]
}
```

### If you use sass:
```javascript
module.exports = {
    // [...]
    rules: [
        {
            test: {
                test: /\.scss$/,
                and: /^node_modules\/precat-mwc-styled\//
            },
            use: [
                {loader: "style-loader/usable"},
                {loader: "css-loader"},
                {
                    loader: "postcss-loader", options: {
                        plugins: [
                            require("postcss-custom-properties")({strict: false, preserve: true}),
                            require("autoprefixer")
                        ]
                    }
                },
                {loader: "sass-loader", options: {includePaths: ["./node_modules"]}},
                {loader: "sass-resources-loader", options: {resources: "<path to your theme (see Theming)>"}}
            ]
        },
        {
            test: {
                test: /\.scss$/,
                exclude: /^node_modules\//
            },
            use: [
                // Your scss processing
            ]
        }
        // [...]
    ]
    // [...]
}
```

### Notes on webpack
You need to install `style-loader`, `css-loader`, `postcss-loader`, `postcss-custom-properties`, `autoprefixer`,
`sass-loader` and `sass-resources-loader` for this config to work.

You can add more `postcss` plugins or remove `autoprefixer`, removing `postcss-custom-properties` is possible,
but not recommended.

You can remove `style-loader` but it is recommended to use it.
Insert on use (`/usable`) is optional, try what works for you.
You should prerender the site in production
(If this library is good enough for your use case, it's currently not well tested)

### Why do I need to use these loaders?
* `style-loader`: Inserts the css for the components into DOM.
`/usable` is optional and only inserts css an use.
* `css-loader`: See `sass-loader` documentation
* `postcss`:
  * `postcss-custom-properties`: To "compile" your theme into the css 
  (Especially for browsers that do not support CSS custom properties)
  * `autoprefixer`: cross-browser support
* `sass-loader`: This project uses sass, absolutely needed
* `sass-resources-loader`: To insert your theme mixins into the component stylesheets

### Using them in code
Just use them like:
```typescript jsx
import {Component, h} from "preact";
import Button from "preact-mwc-styled/Button";

export default class App extends Component {
    render() {
        return <Button primary ripple>I'm a Button</Button>
    }
}
```
**This project is fully TypeScript compatible!** _(Because it's written in TypeScript)_

For documentation of the components refer to
 [preact-material-components](https://github.com/prateekbh/preact-material-components) and
 [their docs](https://material.preactjs.com/).

## Theming
To use your custom theme, just create a custom theme sass file like this:
```scss
$mdc-theme-primary: #6200ee; // primary color
$mdc-theme-on-primary: #000000; // text color on primary component

$mdc-theme-secondary: #018786; // secondary color
$mdc-theme-on-secondary: #000000; // text color on secondary component

// Uncommon that you need this ones
$mdc-theme-background: #ffffff;

$mdc-theme-surface: #ffffff;
$mdc-theme-on-surface: #000000;
```
And reference it from `sass-resources-loader`. Just insert the variables you need into your theme file.

For assistance on choosing colors there is the [material color tool](https://material.io/tools/color/).

_You can also override material classes in there_.
