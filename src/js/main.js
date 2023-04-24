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

    console.log(6);

})