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


// const menuBtn = document.getElementById("menu-btn");
// const menuBtnIcon = menuBtn.querySelector("i");

// menuBtn.addEventListener("click", (e) => {
//   menulist.classList.toggle("open");

//   const isOpen = menulist.classList.contains("open");
//   menuBtnIcon.setAttribute(
//     "class",
//     isOpen ? "ri-close-line" : "ri-menu-3-line"
//   );
// });

// menulist.addEventListener("click", (e) => {
//   menulist.classList.remove("open");
//   menuBtnIcon.setAttribute("class", "ri-menu-3-line");
// });

// const scrollRevealOption = {
//   distance: "50px",
//   origin: "bottom",
//   duration: 1000,
// };

// // service container
// ScrollReveal().reveal(".service__card", {
//   ...scrollRevealOption,
//   interval: 500,
// });
