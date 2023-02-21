# Next-Message

[![travis-ci](https://api.travis-ci.com/lyove/next-message.svg?branch=main)](https://travis-ci.com/github/lyove/next-message)
[![Coverage Status](https://coveralls.io/repos/github/lyove/next-message/badge.svg)](https://coveralls.io/github/lyove/next-message)
[![license](https://img.shields.io/github/license/lyove/next-message)](https://github.com/lyove/next-message/blob/main/LICENSE)
[![release](https://img.shields.io/github/release/lyove/next-message)](https://github.com/lyove/next-message/releases)


A lightweight feedback message appearing at the top of the screen, fading automatically. Has many different options for different situations.

[![Edit new](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/next-message-t7v7vw)


## Features
1. No dependence，lightweight，200 lines of source code，Smaller after compression。
2. UI Beautiful，Reference iview UI styles。

## Install
1. use unpkg cdn [link](https://unpkg.com/browse/next-message@0.0.1/index.js)

```HTML
<script src="https://unpkg.com/next-message/index.js"></script>
<link rel="stylesheet" href="https://unpkg.com/next-message/index.css">
```
2.use npm or yarn install
```bash
$ npm install next-message
$ yarn add next-message
```
## Use
use script，get global variable `$message`。

use npm install，need import The module
```js
import $message from 'next-message';
import 'next-message/index.css';
```

use in page
```js
<!-- global configuration -->
$message.config({ top:85, duration: 4})

<!-- types -->
$message.info('this is a info message')
$message.success('this is a success message')
$message.warning('this is a info warning message')
$message.error('this is a info error message')
$message.loading('loading...')

<!-- onClose -->
$message.info('this is message can close', {
    onClose:() => console.log('close'),
    closable: true,
    duration: 6
})

<!-- destroy -->
$message.destroy()
```

## API
### Message instance
This component can be used with the following static methods:
- `$message.info(config)`
- `$message.success(config)`
- `$message.warning(config)`
- `$message.error(config)`
- `$message.loading(config)`

Parameter config can be string or object. When string, the content will be directly displayed, when object, the detail usage is explained below:

|  Property | Description  | Type|  Default|
|---    |---   |--- | ---   |
|  duration |  Time before prompt dismisses, in seconds. Use 0 to not dismiss	 |Number | 2|
|  onClose |  Function to be called after the prompt is closed		 |Function | -|
|  closable |  Whether to show a close button.		 |Boolean | false|
|  dangerUseHtml |  whether message is treated as HTML string	 |Boolean | false|

Methods for global configuration and disposal are also provided:
- `$message.config(options)`
- `$message.destroy()`

```JS
$Message.config({
    top: 50,
    duration: 3
});
```

|  Property | Description  | Type|  Default |
|---    |---   |--- | ---   |
|  top |  Prompt's distance from top, in pixels.	 |Number | 24|
|  duration |  Default time before prompt dismisses, in seconds.	 |Number | 1.5|
|  singleton |  Singleton Pattern	 |Boolean | false|

## License
Licensed under the MIT License.

