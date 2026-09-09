// 現段階ではJavaScriptを必要とする機能はありません。
// 将来の機能追加用にファイルのみ配置しています。
document.addEventListener('DOMContentLoaded',()=>{const slides=document.querySelectorAll('.about-slideshow img');if(slides.length<2)return;let current=0;setInterval(()=>{slides[current].classList.remove('is-active');current=(current+1)%slides.length;slides[current].classList.add('is-active')},10000)});
