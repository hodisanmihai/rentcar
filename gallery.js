document.addEventListener('DOMContentLoaded', function () {
    const whiteElement = document.querySelector('.white');
    const burgerLines = document.querySelectorAll('.burger .line');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        whiteElement.classList.remove('scroll-down', 'scroll-down');

        if (scrollTop > lastScrollTop) {
            whiteElement.classList.add('scroll-up');
        } else {
            whiteElement.classList.add('scroll-up');
        }

        if (whiteElement.classList.contains('scroll-up')) {
            burgerLines.forEach(line => line.style.stroke = 'rgb(16, 137, 211)');
        } else {
            burgerLines.forEach(line => line.style.stroke = 'white');
        }

        lastScrollTop = scrollTop;
    });
});


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

document.querySelector('.burger').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
});