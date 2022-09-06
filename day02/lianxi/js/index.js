// 首页轮播图做一下

// 获取导航小圆圈的li们
var navLi = document.querySelectorAll(".banner>ol.nav>li");
// 先获取ul
var oUl = document.querySelector(".banner>ul");
// 一个屏幕宽度
var iW = document.documentElement.clientWidth;
console.log(navLi);
// js 添加
// 复制了一个和第一个li一摸一样的li
var firstLi = oUl.children[0].cloneNode(true);

// 放在最后
oUl.appendChild(firstLi);

// 计数器
var num = 0;

// 开启定时器
var timer = setInterval(function () {
  // 做事情
  num++;
  oUl.style.transition = "0.3s";
  oUl.style.transform = "translateX(" + -iW * num + "px)";
}, 1500);
// transitionend 过渡完成事件
oUl.addEventListener("transitionend", function () {
  console.log("哈哈哈过渡完了");
  console.log(num);
  if (num >= oUl.children.length - 1) {
    num = 0;
    oUl.style.transition = "none";
    oUl.style.transform = "translateX(" + -iW * num + "px)";
  }
  for (var i = 0; i < navLi.length; i++) {
    navLi[i].className = "";
  }
  navLi[num].className = "active";
});
