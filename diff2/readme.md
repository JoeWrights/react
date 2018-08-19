## npm init -y
## yarn add babel-core babel-preset-env babel-plugin-transform-react-jsx

```js
"scripts": {
    "start": "parcel ./index.html"
  }
```
## 测试
a.js
```js
const jsx = <div>hello world</div>;
```
```
babel a.js
```

编译成
```js
const jsx = React.createElement(
  "div",
  null,
  "hello world"
);
```

jsx => 虚拟dom => 真实dom

jsx(react-jsx-plugin) => vnode(createElement) => DOM(render)