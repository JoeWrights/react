/**
 * 将虚拟DOM变成真实DOM
 * @params vnode 虚拟DOM
 * @return 返回DOM
 */
function _render() {
  //递归来做 将结点转化成DOM，子节点递归，出口文本结点
  //结点类型 三种:
  //1.文本节点 return createTextNode()
  //2.标签结点 createElement attr children设置（递归_render）
  //3.Component  render(return jsx)
}

export function render(vnode, container) {  //通过render方法转化成真实dom
  // console.log(vnode, container);
  return container.appendChild(_render(vnode));
}