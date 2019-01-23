// 1.初始化数据
var hashA = init()
var keys = hashA.keys
var hash = hashA.hash

// 2.生成键盘
generateKeyboard(keys,hash)

// 3.监听用户动作
listenToUser(hash)


// 工具函数
function generateKeyboard(keys,hash){
  for (var index = 0; index < keys.length; index++) {
    var div = tag('div', { className: 'row' })
    main.appendChild(div)
  
    var row = keys[index] //第一个数组 第二个数组 第三个数组
  
    for (var index2 = 0; index2 < row.length; index2++) {
      var span = createSpan(row[index2])
  
      var button = createButton(row[index2])
  
      var img = createImg(hash[row[index2]])
  
      var kbd = tag('kbd')
      kbd.className = 'key'
  
      kbd.appendChild(span)
      kbd.appendChild(img)
      kbd.appendChild(button)
  
      div.appendChild(kbd)
    }
  }
}

function tag(tagName, attributes) {
  var element = document.createElement(tagName)
  for (var key in attributes) { // key 为 className、id、textContent
    element[key] = attributes[key]
  }
  return element
}

function createSpan(textContent) {
  var span = tag('span')
  span.className = 'text'
  span.textContent = textContent
  return span
}

function createButton(id) {
  var button = tag('button')
  button.textContent = '编辑'
  button.id = id
  button.onclick = function (asdlkujsdmjkfg) {
    var button2 = asdlkujsdmjkfg.target
    var img2 = button2.previousSibling
    var key = button2.id  //q,w,e,r,t ...
    var x = prompt('给我一个网址')       //qq.com
    hash[key] = x   //hash变更
    img2.src = 'http://' + x + '/favicon.ico'
    img2.onerror = function (ev) {
      ev.target.src = '//i.loli.net/2019/01/18/5c41e7cac5f65.png'
    }
    localStorage.setItem('zzz', JSON.stringify(hash))
  }
  return button
}

function createImg(domain) {
  var img = tag('img')
  if (domain) {
    img.src = 'http://' + domain + '/favicon.ico'
  } else {
    img.src = '//i.loli.net/2019/01/18/5c41e7cac5f65.png'
  }
  img.onerror = function (ev) {
    ev.target.src = '//i.loli.net/2019/01/18/5c41e7cac5f65.png'
  }
  return img
}

function getFormLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name) || 'null')
}

function init() {
  var keys = {
    '0': { 0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10 },
    '1': { 0: 'a', 1: 's', 2: 'd', 3: 'f', 4: 'g', 5: 'h', 6: 'j', 7: 'k', 8: 'l', length: 9 },
    '2': { 0: 'z', 1: 'x', 2: 'c', 3: 'v', 4: 'b', 5: 'n', 6: 'm', length: 7 },
    'length': 3
  }

  var hash = {
    'q': 'qq.com',
    'w': 'weibo.com',
    'e': 'ele.me',
    'r': 'renren.com',
    'y': 'yahoo.cn',
    'u': 'uuu9.com',
    'i': 'iqiyi.com',
    'o': 'opera.com',
    'p': undefined,
    'a': 'acfun.tv',
    's': 'sohu.com',
    'z': 'zhihu.com',
    'm': 'mi.com'
  }

  // 取出 localStorage 中的 zzz 对应的 hash
  var hashInLocalStorage = getFormLocalStorage('zzz')
  if (hashInLocalStorage) {
    hash = hashInLocalStorage
  }

  return {
    "keys" : keys,
    "hash" : hash
  }
}

function listenToUser(hash){
  document.onkeypress = function (asdlkujsdmjkfg) {
    //console.log(asdlkujsdmjkfg['key'])
    var key = asdlkujsdmjkfg['key'] //q w e ...
    var website = hash[key]         //hsah[q,w,e,r ...]
    //location.href = 'http://' + website
    window.open('http://' + website, '_blank')
  }
}