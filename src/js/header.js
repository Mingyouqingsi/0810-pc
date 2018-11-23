/**
 * Created by 王翔 on 2018-11-23.
 // */
//头部模块js
export default function () {
  //logo导航区的切换

  const navLiNodes = document.querySelectorAll('.nav li');
  const arrowNode = document.querySelector('.arrow');
  for (let i = 0; i < navLiNodes.length; i++) {
    navLiNodes[i].onclick = function () {
      for (let j = 0; j < navLiNodes.length; j++) {
        navLiNodes[j].className = ''
      };
      navLiNodes[i].className = 'active';
      //切换小箭头的位置
      arrowNode.style.left = navLiNodes[i].getBoundingClientRect().left + navLiNodes[i].offsetWidth/2-arrowNode.offsetWidth/2+'px'
    };
  }
//白色小箭头来到第一个的li下面
  arrowNode.style.left = navLiNodes[0].getBoundingClientRect().left + navLiNodes[0].offsetWidth/2-arrowNode.offsetWidth/2+'px'
}