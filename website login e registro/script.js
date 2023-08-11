const wrapper =document.querySelector('.wrapper');
const loginLink =document.querySelector('.login-Link');
const registerLink =document.querySelector('.register-Link');

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
});

