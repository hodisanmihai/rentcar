
    const formContainer = document.querySelector('.container');
    if (formContainer) {
        formContainer.addEventListener('mouseenter', () => {
            document.querySelector('.wallpaper').style.filter = 'blur(4px)';
            document.querySelector('.white').style.filter = 'blur(2px)';
        });

        formContainer.addEventListener('mouseleave', () => {
            document.querySelector('.wallpaper').style.filter = 'blur(2px)';
            document.querySelector('.white').style.filter = 'blur(1px)';
        });
    } else {
        console.error('Form container not found');
    };

 
document.querySelector('.burger').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
});
