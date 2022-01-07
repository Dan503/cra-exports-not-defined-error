# Bug replication

This is a demo to replicate the following CRA bug: https://github.com/facebook/create-react-app/issues/11898

I am getting the following error when I try to run this project:

```
Uncaught ReferenceError: exports is not defined
    node_modules time-input-polyfill/utils/npm/common/supportsTime.js@http://localhost:3000/static/js/bundle.js:42653
    factory http://localhost:3000/static/js/bundle.js:43250
    __webpack_require__ http://localhost:3000/static/js/bundle.js:42700
    fn http://localhost:3000/static/js/bundle.js:42921
    node_modules time-input-polyfill/react/src/core/TimeInputPolyfill.js@http://localhost:3000/static/js/bundle.js:873
    factory http://localhost:3000/static/js/bundle.js:43250
    __webpack_require__ http://localhost:3000/static/js/bundle.js:42700
    fn http://localhost:3000/static/js/bundle.js:42921
    node_modules time-input-polyfill/react/index.js@http://localhost:3000/static/js/bundle.js:768
    factory http://localhost:3000/static/js/bundle.js:43250
    __webpack_require__ http://localhost:3000/static/js/bundle.js:42700
    fn http://localhost:3000/static/js/bundle.js:42921
    js http://localhost:3000/static/js/bundle.js:67
    factory http://localhost:3000/static/js/bundle.js:43250
    __webpack_require__ http://localhost:3000/static/js/bundle.js:42700
    fn http://localhost:3000/static/js/bundle.js:42921
    js http://localhost:3000/static/js/bundle.js:195
    factory http://localhost:3000/static/js/bundle.js:43250
    __webpack_require__ http://localhost:3000/static/js/bundle.js:42700
    <anonymous> http://localhost:3000/static/js/bundle.js:43889
    <anonymous> http://localhost:3000/static/js/bundle.js:43891
bundle.js:42653:1
    js http://localhost:3000/static/js/bundle.js:42653
    factory http://localhost:3000/static/js/bundle.js:43250
    __webpack_require__ http://localhost:3000/static/js/bundle.js:42700
    fn http://localhost:3000/static/js/bundle.js:42921
    js http://localhost:3000/static/js/bundle.js:873
    factory http://localhost:3000/static/js/bundle.js:43250
    __webpack_require__ http://localhost:3000/static/js/bundle.js:42700
    fn http://localhost:3000/static/js/bundle.js:42921
    js http://localhost:3000/static/js/bundle.js:768
    factory http://localhost:3000/static/js/bundle.js:43250
    __webpack_require__ http://localhost:3000/static/js/bundle.js:42700
    fn http://localhost:3000/static/js/bundle.js:42921
    js http://localhost:3000/static/js/bundle.js:67
    factory http://localhost:3000/static/js/bundle.js:43250
    __webpack_require__ http://localhost:3000/static/js/bundle.js:42700
    fn http://localhost:3000/static/js/bundle.js:42921
    js http://localhost:3000/static/js/bundle.js:195
    factory http://localhost:3000/static/js/bundle.js:43250
    __webpack_require__ http://localhost:3000/static/js/bundle.js:42700
    <anonymous> http://localhost:3000/static/js/bundle.js:43889
    <anonymous> http://localhost:3000/static/js/bundle.js:43891
```

## Replication steps

This project is the end result of following these steps:

1. Create new cra project `npx create-react-app my-app`
2. Go into the project `cd my-app`
3. Install @time-input-polyfill/react `npm i @time-input-polyfill/react`
4. Update `src/App.js` to use the installed time input polyfill using ES6 import syntax `import TimeInput from '@time-input-polyfill/react'`
5. Run the project `npm run start`

## Expectation

It should run without any errors.

## Reality

I get the error mentioned earlier in the browser console and the page does not load.

## Note

I am aware that this is most likely an issue with the time-input-polyfill code. I need some help understanding what I need to change to make this work.

This was not an issue when using react-scripts v4. It became an issue when v5 was released.
