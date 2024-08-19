const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
const burger = document.querySelector(".burger");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > headerHeight) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
})
burger.addEventListener("click", () => {
    header.classList.toggle("mobile-header");
    if (header.classList.contains("mobile-header")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})




// ----------------------------------accordion--------------------------------------
let coll = document.getElementsByClassName("collapsible");


for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    if(this.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else{
        content.style.maxHeight = null;
    }


  });
}

// -------------------------------------popup--------------------------------------
const popup = document.querySelector('.popup')
const popupShowBtns = document.querySelectorAll('.show-popup')
const closeFormBtn = document.querySelector('.close-form')

popupShowBtns.forEach(item => {
    item.addEventListener('click', () => {
        popup.classList.add('show-popup')
        document.body.classList.add('no-scroll')
    })
})

closeFormBtn.addEventListener('click', () => {
    popup.classList.remove('show-popup')
    document.body.classList.remove('no-scroll')
})

document.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('show-popup')
        document.body.classList.remove('no-scroll')
    }
});