/*
class MobileNavBar{

    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active';

        this.handleClick = this.handleClick.bind(this);
    }

    animatedLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animatedLinks();
    }

    addClickEventer(){
        this.mobileMenu.addEventListener("click", () => 
            this.handleClick());
    }

    init(){
        if(this.mobileMenu){
            this.addClickEventer();
        }
        return this;
    }

}


const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavBar.init();
*/

function menu(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./assets/img/menu/menu_white_36dp.svg";
    }
    else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./assets/img/menu/close_white_36dp.svg";
    }
}

function menuPagesSrc(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../../assets/img/menu/menu_white_36dp.svg";
    }
    else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../../assets/img/menu/close_white_36dp.svg";
    }
}