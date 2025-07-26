let wrapper = document.querySelector('.wrapper'),
    signUpLink =document.querySelector('.signup-link'),
    signInLink =document.querySelector('.signin-link');

signUpLink.addEventListener('click',() => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click',() => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});
