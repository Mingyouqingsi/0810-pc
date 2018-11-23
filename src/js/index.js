//导入less文件
import '../less/index.less';

//logo导航区的切换

const navNodes = document.querySelectorAll('.nav li');
for (let i = 0; i < navNodes.length; i++) {
  navNodes[i].onclick = function () {
    for (let j = 0; j < navNodes.length; j++) {
      navNodes[j].className = ''
};
    navNodes[i].className = 'active';
  };
}