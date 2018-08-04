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

2. Component(render的第三种方式, react-jsx vnode.tag function Counter) -> 标签化组件  -> Counter -> Component类 -> render(jsx) -> reactDOM.render()
3. 响应式setState() 为了达到DOM的更新，将整个DOM片段都替换掉了。
    a. 新生成整个组件DOM树，重新挂载 100行DOM html
    b. 只将setState关联的一小段DOM，在原来DOM的基础上做一下修改，将修改反映到DOM上，1行
    n:1  html树 DOM开销是一般计算开销的100-1000倍 
    重绘, replaceChild
    重排

    React DOM diff算法
    需求是：减少DOM操作
    setState 找到对应的DOM部分
    setState 返回一个新的virtual DOM -> 跟旧的DOM对比   将新的内存（虚拟）DOM
    和旧的DOM 对比？因为是一棵树状结构，采用算法，就可以比较出差异点，在相差的地方，
    进行真实的DOM操作