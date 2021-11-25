"use strict"

var items = document.getElementsByClassName('nav-link');

for(let i = 0; i < items.length; i++) {
    items[i].onmouseover = function () {
        this.style.textDecoration = 'underline';
        this.style.color = '#f08492';
    }

    items[i].onmouseout = function () {
        this.style.textDecoration = 'none';
        this.style.color = 'black';
    }
}
var nav2Colors = ['#febdb9','#c1ebfb','#c7c6ff','#ffd7dd','#dec5ed','#aae7e2','#ffeba6','#ecaab4','#ddf1c0'];

var nav2items = document.getElementsByClassName('nav2-item');
for(let i = 0; i <nav2items.length; i++){
    nav2items[i].onmouseover = function () {
        this.style.backgroundColor = nav2Colors[i];
    }
    nav2items[i].onmouseout = function () {
        this.style.backgroundColor = 'rgb(248,248,248)';
    }
}
let nav3 = document.getElementById('nav3');


let mSecond = document.getElementById('m-second');
var flag = 0;
mSecond.addEventListener("mouseover", function () {
    //let nav3 = document.getElementById('nav3');
    nav3.style.visibility = 'visible'
})
document.getElementById('nav1').addEventListener('mouseover', function () {
    nav3.style.visibility = 'hidden';
})
document.getElementById('nav2-item2').addEventListener('mouseover',function (){
  nav3.style.visibility = 'hidden';
})
document.getElementById('nav2-item4').addEventListener('mouseover',function (){
    nav3.style.visibility = 'hidden';
})


var third = document.getElementById('third');
third.addEventListener("mouseover", function () {
    nav3.style.visibility = 'visible'

})
third.addEventListener("mouseout", function () {
    nav3.style.visibility = 'hidden';
})





let newsTime = document.getElementById('news-time');
newsTime.innerText =  '2021 5 7';

let newsContent = document.getElementById('news-content');
newsContent.innerHTML = '<a href="acfun.cn">Acfun</a>现在买了一些物语系列的版权哦！'

let nav3Items = document.getElementsByClassName('nav3-item');

for(let i = 0; i < nav3Items.length; i++) {
    nav3Items[i].addEventListener('mouseover', function () {
        this.style.backgroundColor = nav2Colors[i];
    })
    nav3Items[i].addEventListener('mouseout', function () {
        this.style.backgroundColor = 'rgb(248,248,248)';
    })
}







