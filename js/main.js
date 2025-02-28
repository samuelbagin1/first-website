
window.sr = ScrollReveal();


sr.reveal('.nav-brand1', {duration:1000, origin: 'bottom', distance: '10px'});
sr.reveal('.home', {duration:1000, delay:200, origin: 'bottom', distance: '10px'});
sr.reveal('.gallery', {duration:1000, delay:400, origin: 'bottom', distance: '10px'});
sr.reveal('.contact', {duration:1000, delay:600, origin: 'bottom', distance: '10px'});


sr.reveal('.sign', {delay: 500, duration:500, origin: 'bottom', distance: '20px'});
sr.reveal('.line10', {delay: 700, duration:500, origin: 'bottom', distance: '20px'});
sr.reveal('.freelance', {delay: 900, duration:500, origin: 'bottom', distance: '20px'});
sr.reveal('.social-bar1', {origin: 'bottom', distance: '20px', delay: 1100})
sr.reveal('.dis-und1', {origin: 'right', duration: 500, distance: '100px', delay: 1700})


sr.reveal('.title-main-about', {origin: 'left', distance: '100px'});
sr.reveal('.text-about', {delay: 200, origin: 'left', distance: '100px'});
sr.reveal('.text-represent', {delay: 500, duration: 700});


sr.reveal('.title-main-photography', {origin: 'left', distance: '100px'});
sr.reveal('.text-photography', {delay: 200, origin: 'left', distance: '100px'});
sr.reveal('.textt-photo1', {delay: 400, origin: 'left', distance: '100px'});
sr.reveal('.textt-photo2', {delay: 500, origin: 'left', distance: '100px'});
sr.reveal('.text-suck', {delay: 700, origin: 'left', distance: '100px'});
sr.reveal('.mountain111', {delay: 800, origin: 'right', distance: '200px', duration: 1000});



sr.reveal('.line-bottom', {duration: 3000, scale: 0});



sr.reveal('.title-main-disund', {origin: 'left', distance: '100px'});
sr.reveal('.first', {delay: 200, origin: 'left', distance: '100px'});
sr.reveal('.second', {delay: 300, origin: 'left', distance: '100px'});
sr.reveal('.1stt', {origin: 'right', delay: 500, scale: .5, distance: '300px', duration: 2000});
sr.reveal('.2ndd', {delay: 500, scale: .5, duration: 2000});
sr.reveal('.3rdd', {origin: 'left', delay: 500, scale: .5, distance: '300px', duration: 2000});


sr.reveal('.title-main-develop', {origin: 'left', distance: '100px'});
sr.reveal('.text-develop', {delay: 200, origin: 'left', distance: '100px'});
sr.reveal('.comingmore', {delay: 500, duration: 700});
sr.reveal('.appshowcase', {delay: 800, origin: 'right', distance: '200px', duration: 1000});


sr.reveal('.footer-bottom', {origin: 'bottom', delay: 1000, easing: 'ease-in'});






window.onscroll = () =>{
    document.querySelector('.title-big-about').style.left = `${1200 - window.scrollY}px`;
    if (window.scrollY > 2000) document.querySelector('.title-big-photography').style.left = `${3050 - window.scrollY}px`;
    if (window.scrollY > 3000) document.querySelector('.title-big-disund').style.left = `${4100 - window.scrollY}px`;
    if (window.scrollY > 4500) document.querySelector('.title-big-develop').style.left = `${6100 - window.scrollY}px`;
};


var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2500);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}




