let menu = document.querySelector("#menu-icon");
let navbar_new = document.querySelector(".navbar");

menu.onclick = () =>{

    menu.classList.toggle("bx-x");
    navbar_new.classList.toggle("active");
}