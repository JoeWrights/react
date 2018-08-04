function createElement(tag, attrs, ...children) {
  // console.log(tag, attrs, children)
  attrs = attrs || {};

  return {
    tag,
    attrs,
    children,
    key: attrs.key || null
  }
} //返回虚拟DOM

export default createElement;