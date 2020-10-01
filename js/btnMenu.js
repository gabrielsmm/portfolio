const $menu = document.querySelector('.menu');
const $btnMenu_open = document.querySelector('.btnMenu_open');
const $btnMenu_close = document.querySelector('.btnMenu_close');

$btnMenu_open.addEventListener('click', function(){
    $menu.classList.add('menu_open');
    $btnMenu_open.classList.add('menu_close');
    $btnMenu_close.classList.add('menu_open');
})

$btnMenu_close.addEventListener('click', function () {
    $menu.classList.remove('menu_open');
    $btnMenu_open.classList.remove('menu_close');
    $btnMenu_close.classList.remove('menu_open');
})