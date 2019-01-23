// 按键
var keys = {
  '0' : {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
  '1' : {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
  '2' : {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
  'length' : 3
}

// 网址
var hash = {
  'q' : 'qq.com',
  'w' : 'weibo.com',
  'e' : 'ele.me',
  'r' : 'renren.com',
  'y' : 'yahoo.cn',
  'u' : 'uc.com',
  'i' : 'iqiyi.com',
  'o' : 'opera.com',
  'p' : undefined,
  'a' : 'acfun.tv',
  's' : 'sohu.com',
  'z' : 'zhihu.com',
  'm' : 'mi.com'
}

// 取出localStorage中存储的数据
var hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
if(hashInLocalStorage){
  hash = hashInLocalStorage
}

index = 0
while (index < keys.length){
  div1 = document.createElement('div')
  mainXXX.appendChild(div1)
  
  index2 = 0
  row = keys[index]
  while(index2 < row.length){
    kbdXXX = document.createElement('kbd')
    kbdXXX.textContent = row[index2]
    div1.appendChild(kbdXXX)

    buttonX = document.createElement('button')
    buttonX.id = row[index2]
    buttonX.textContent = '编辑'
    buttonX.onclick = function(event){
      key = event.target.id     //q w e r t ...
      x = prompt('请输入网址')   //qq.com
      hash[key] = x             //hash 变更
      localStorage.setItem('zzz',JSON.stringify(hash))
      console.log(hash)
    }
    kbdXXX.appendChild(buttonX)
    index2 = index2 + 1
  }
  div1.appendChild(kbdXXX)
  index = index + 1
}

// 按键之后访问网站
document.onkeypress = function(event){
  key = event.key     //q w e ...
  website = hash[key] //hash 中对应的网站
  //console.log(website)
  window.open('http://' + website,'_blank')
}