
    const formContainer = document.querySelector('.container');
    if (formContainer) {
        formContainer.addEventListener('mouseenter', () => {
            document.querySelector('.wallpaper').style.filter = 'blur(4px)';
            document.querySelector('.white').style.filter = 'blur(2px)';
        });

        formContainer.addEventListener('mouseleave', () => {
            document.querySelector('.wallpaper').style.filter = 'blur(0px)';
            document.querySelector('.white').style.filter = 'blur(1px)';
        });
    } else {
        console.error('Form container not found');
    };

 
document.querySelector('.burger').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const formContent = document.querySelector('.form-content');
    const signInForm = document.querySelector('.sign-in');
    const signUpForm = document.querySelector('.sign-up');
    const forgotPasswordForm = document.querySelector('.forgot-password');
    
    const signUpLink = document.querySelector('.middletext a[href="#sign-up"]');
    const forgotPasswordLink = document.querySelector('.middletext a[href="#forgot-password"]');
    const alreadyHaveAccountLink = document.querySelector('.middletext a[href="#sign-in"]');
    const backToLoginLink = document.querySelector('.back-to-login a[href="#sign-in"]');

   
    signUpLink.addEventListener('click', function (e) {
        e.preventDefault();
        formContent.style.transform = 'rotateY(-180deg)';
        signUpForm.style.zIndex = 3;
        signUpForm.style.display = 'block'; 
        signInForm.style.zIndex = 2;
        forgotPasswordForm.style.zIndex = 1;
        forgotPasswordForm.style.display = 'block';
    });

    
    forgotPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();
        formContent.style.transform = 'rotateY(180deg)';
        forgotPasswordForm.style.zIndex = 3; 
        forgotPasswordForm.style.display = 'block'; 
        signInForm.style.zIndex = 2;
        signUpForm.style.zIndex = 1;
        signUpForm.style.display = 'none'; 
    });


    alreadyHaveAccountLink.addEventListener('click', function (e) {
        e.preventDefault();
        formContent.style.transform = 'rotateY(0deg)';
        signInForm.style.zIndex = 3;
        signInForm.style.display = 'block'; 
        signUpForm.style.zIndex = 2;
        forgotPasswordForm.style.zIndex = 1;
        forgotPasswordForm.style.display = 'block';
    });


    backToLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        formContent.style.transform = 'rotateY(0deg)';
        signInForm.style.zIndex = 3; 
        signInForm.style.display = 'block'; 
        signUpForm.style.zIndex = 2;
        forgotPasswordForm.style.zIndex = 1;
        signUpForm.style.display = 'none'; 
    });

    signInForm.style.zIndex = 3;
    signUpForm.style.zIndex = 2;
    forgotPasswordForm.style.zIndex = 1;
    signUpForm.style.display = 'none'; 
    forgotPasswordForm.style.display = 'block'; 
});
