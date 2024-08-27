let btnPre = document.querySelector('#btnPre');
let btnNext = document.querySelector('#btnNext');
let slider = document.querySelector('.slider');
let main = document.querySelector('main');
let boxFruit = document.querySelectorAll('.boxFruit');
let sliderLB = document.querySelector('.sliderLB');

let rotate = 90;
const bgColor = ['#00eaff','#ffb948','#5fe871','#ff90eb'];
let currentColor = 0;
let slideWidthLB = -18;

function updateUi(){
    sliderLB.style.transform = `translateX(${slideWidthLB}rem)`;
    slider.style.transform = `rotate(${rotate}deg)`;
    main.style.background = bgColor[currentColor % 4];
    boxFruit.forEach((fruit , i)=>{
        fruit.style.transform = i == currentColor % 4 ? 'scale(1)' : 'scale(0.2)';
    })
    
};

updateUi();

btnPre.addEventListener('click', ()=> {
    currentColor = currentColor < 1 ? 3 : currentColor -1;
    rotate += 90;
    slideWidthLB += 6;
    updateUi();
});

btnNext.addEventListener('click', ()=> {
    currentColor += 1;
    rotate -= 90;
    slideWidthLB -= 6;
    updateUi();
});

sliderLB.addEventListener('transitionend' , ()=>{
    slideWidthLB == -42 ? slideWidthLB = -18: '';
    slideWidthLB == 0 ? slideWidthLB = -24 : '';
    sliderLB.style.transition = 'none';
    sliderLB.style.transform = `translateX(${slideWidthLB}rem)`;
    setTimeout(()=>{
        sliderLB.style.transition = 'transform 0.5s cubic-bezier(0.87, -1.38, 0.3, 1.54)';
    },0)
})
