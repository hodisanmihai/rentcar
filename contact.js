const frontElements = document.querySelectorAll('.front');

frontElements.forEach(formContainer => {
    formContainer.addEventListener('mouseenter', () => {
        document.querySelector('.wallpaper').style.filter = 'blur(4px)';
        document.querySelector('.white').style.filter = 'blur(2px)';
    });

    formContainer.addEventListener('mouseleave', () => {
        document.querySelector('.wallpaper').style.filter = 'blur(0px)';
        document.querySelector('.white').style.filter = 'blur(1px)';
    });
});


 
document.querySelector('.burger').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
});
