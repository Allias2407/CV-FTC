let typed = new Typed(".input", {
    strings:["Tran Nguyen Vu Tam","an IT Freshman","Fintech Newbie!"],
    typeSpeed:130,
    backSpeed:80,
    loop: true
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
}
