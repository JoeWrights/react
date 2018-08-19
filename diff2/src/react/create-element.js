function createElement(tag, attrs, ...children) {
  // console.log(tag, attrs, children);
  return {  //返回虚拟DOM
    tag, 
    attrs,
    children,
    keys: attrs.keys || null
  }
}

export default createElement;