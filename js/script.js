let menue = document.getElementById("menue"),
    links = document.getElementById("links");

menue.onclick = () => {
    links.classList.toggle("toggle-menue");
};


// nav links scroll

let nav_links = document.querySelectorAll('nav .links ul li')
nav_links.forEach(link => {
    link.onclick = () => {
        let section_id = link.getAttribute('data-link')
        let section = document.getElementById(section_id)
        console.log(section_id)
        nav_links.forEach(l => {
            l.classList.remove('active-link')
        })
        link.classList.add('active-link')
        section.scrollIntoView({ behavior: "smooth" })

    }
})


// up btn
let up_btn = document.getElementById('up-btn')
up_btn.onclick = () => {
    document.getElementById('home').scrollIntoView({ behavior: "smooth" })
}


// window scrolling
let sections = document.querySelectorAll('section')
window.onscroll = () => {
    sections.forEach(sec => {

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');
        // console.log(id)

        if (top >= offset && top < offset + height) {
            nav_links.forEach(link => {
                link.classList.remove('active-link');
                document.querySelector(`nav .links li[data-link*= ${id} ]`).classList.add('active-link');
            });
        };

    });

}





// gallary swiper
var swiper = new Swiper(".gallary-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
});



// home swiper

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});




var swiper = new Swiper(".previwe-swiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
});


let colors = [
    "#e91e63",
    "#2196f3",
    "#00bcd4",
    "#8bc34a",
    "#cddc39",
    "#607d8b",
    "#009688",
];
let slides = document.querySelectorAll(".previwe .slide");
for (slide in slides) {
    let rondom_num = Math.floor(Math.random() * colors.length);
    slides[slide].style.backgroundColor = `${colors[rondom_num]}`;
}

// gallay
