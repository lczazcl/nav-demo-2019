var keys = {
  '0' : {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
  '1' : {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
  '2' : {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
  'length' : 3
}

var hash = {
  'q' : 'qq.com',
  'w' : 'weibo.com',
  'e' : 'ele.me',
  'r' : 'renren.com',
  'y' : 'yahoo.cn',
  'u' : 'uuu9.com',
  'i' : 'iqiyi.com',
  'o' : 'opera.com',
  'p' : undefined,
  'a' : 'acfun.tv',
  's' : 'sohu.com',
  'z' : 'zhihu.com',
  'm' : 'mi.com'
}

//取出 localStorage 中的 zzz 对应的 hash
var hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
if(hashInLocalStorage){
  hash = hashInLocalStorage
}

var index = 0
while(index < keys.length){ //index = 0 1 2
  var div = document.createElement('div')
  div.className = 'row'
  main.appendChild(div)

  var row = keys[index] //第一个数组 第二个数组 第三个数组
  console.log(row)

  var index2 = 0
  while(index2 < row.length){ //0-9 0-8 0-6
    var kbd = document.createElement('kbd')
    var span = document.createElement('span')
    span.className = 'text'
    span.textContent = row[index2]
    kbd.className = 'key'
    var button = document.createElement('button')
    button.id = row[index2]
    var img = document.createElement('img')
    if(hash[row[index2]]){
      img.src = 'http://' + hash[row[index2]] + '/favicon.ico'
    }else{
      img.src = '//i.loli.net/2019/01/18/5c41e7cac5f65.png'
    }
    img.onerror = function(ev){
      ev.target.src = '//i.loli.net/2019/01/18/5c41e7cac5f65.png'
    }

    button.textContent = '编辑'
    button.onclick = function(asdlkujsdmjkfg){
      var button2 = asdlkujsdmjkfg.target
      var img2 = button2.previousSibling
      var key = button2.id  //q,w,e,r,t ...
      var x = prompt('给我一个网址')       //qq.com
      hash[key] = x   //hash变更
      img2.src = 'http://' + x + '/favicon.ico'
      img2.onerror = function(ev){
        ev.target.src = '//i.loli.net/2019/01/18/5c41e7cac5f65.png'
      }
      localStorage.setItem('zzz',JSON.stringify(hash))
    }
    kbd.appendChild(span)
    kbd.appendChild(img)
    kbd.appendChild(button)
    div.appendChild(kbd)
    index2 = index2 + 1
  }

  index = index + 1
}

document.onkeypress = function(asdlkujsdmjkfg){
  //console.log(asdlkujsdmjkfg['key'])
  var key = asdlkujsdmjkfg['key'] //q w e ...
  var website = hash[key]         //hsah[q,w,e,r ...]
  //location.href = 'http://' + website
  window.open('http://' + website,'_blank')
}