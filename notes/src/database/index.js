import Loki from 'lokijs';
//db 配置，初始化，连接，及数据查询
//db 句柄，代表着数据库，new的过程得到了数据库 数据库名（一个项目一个库）
//->collections(table的别称)->rows(数据记录)->columns(列名)
//sql查询是一个典型的一步操作，用promise来封装吧，为什么是异步的呢？
//连接数据库要时间，查询要时间，返回结果要时间

export const db = new Loki('notes', {   //notes:数据库名
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 3000,
  persistenceMethod: 'localStorage'
})

function databaseInitialize() {
  const notes = db.getCollection(notes);  //getCollection(表名)
  if (notes === null) {
    db.addCollection('notes');
  }
}

export function loadCollection(collection) {
  //加载某个记录
  //取数据的操作是一个异步操作,用promise封装一下
  return new Promise(resolve => {
    //加载数据库
    db.loadDatabase({}, () => {
      const _collection = db.getCollection(collection) || db.addCollection(collection);
      resolve(_collection);
    })
  })   
}