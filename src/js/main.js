window.addEventListener('DOMContentLoaded', function() {
    function openRightsideMenu() {
        const gamburger = document.querySelector('.header__gamburger');
        const closeButton = document.querySelector('.rightside-menu__close');
        const rightsideMenu = document.querySelector('.rightside-menu');
       
        gamburger.addEventListener('click', function openRightMenu () {
            
            rightsideMenu.classList.add('rightside-menu-active');
        });

        closeButton.addEventListener('click', function closeRightMenu() {
            rightsideMenu.classList.remove('rightside-menu-active');
        })
    }

    openRightsideMenu();

    function slider(sliderArr, sliderListItem, dotsItem) {
        const slider      = document.querySelector(sliderArr),
              sliderList  = document.querySelectorAll(sliderListItem),
              dots        = document.querySelectorAll(dotsItem);
 

        addDataAttribute(sliderList);
        addClassActiveDots(dots);
        switchDots(dots);
        automaticSlider(slider);

        function addDataAttribute(slider) {
            for(let i = 0; i < slider.length; i++) {
                slider[i].setAttribute('data-num', i);
            }
        }

        function addClassActiveDots(dots, index) {
            dots.forEach(dot => {
                dot.classList.remove('dots__item-active')
            });
            //dots[index].classList.add('dots__item-active');
        }

        function switchDots(dots) {
            dots.forEach(dot => {
                dot.addEventListener('click', function () {

                })
            })
        }

        function automaticSlider(slider) {
            let num = 0;
               
            setInterval(function() {
                if(num == 0) {
                    num = 815;
                } else if (num == 815) {
                    num = 1630;
                } else {
                    num = 0;
                }
                slider.style.transform = `translateY(-${num}px)`;

            }, 5000);  
        }

        
              //dots__item-active


    }

    slider('.top__slider', '.top__slider-item', '.dots__item');

    function tabs(arrTabs, arrImg, tabActive, imageActive) {
        const tabs = document.querySelectorAll(arrTabs);
        const images = document.querySelectorAll(arrImg);
        const mainImg = document.querySelector('.gallery__img-main');

        
        for(let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', function() {
                for(let i = 0; i < tabs.length; i++) {
                    tabs[i].classList.remove(tabActive);
                    images[i].classList.remove(imageActive);
                };
                this.classList.add(tabActive);
                images[i].classList.add(imageActive);
            })
        }
    }

    tabs('.gallery__tab','.gallery__item', 'gallery__tab--active', 'gallery__item--active');
})