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


// ---------------------------------advanced search----------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const advantageItems = document.querySelectorAll('.advantages-list li');

    advantageItems.forEach(item => {
        const img = item.querySelector('.active-img');
        const defImg = item.querySelector('.default-img');
        defImg.style.opacity = '1';
        defImg.style.zIndex = '1';
       
        item.addEventListener('mouseenter', function(event) {
            // Проверяем, что курсор наведен именно на li, а не на вложенные элементы
            if (event.target === item && img) {
                img.style.opacity = '1';
                img.style.zIndex = '1';
                img.style.transition = 'opacity 0.3s ease-out';
            }
        });

        item.addEventListener('mouseleave', function(event) {
            // Проверяем, что курсор ушел именно с li, а не с вложенных элементов
            if (event.target === item && img) {
                img.style.opacity = '0';
                img.style.zIndex = '-1';
                img.style.transition = 'all 0.3s ease-out';
                defImg.style.opacity = '1';
                defImg.style.zIndex = '1';
                defImg.style.transition = 'opacity 0.3s ease-out';
            }
        });
    });
});