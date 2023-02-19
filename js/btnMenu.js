const btnMobile = document.querySelector('.btn-mobile');
const links = Array.from(document.querySelector('.menu').children);

// Exibição do menu
function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector('.menu-nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
}

// Scroll suave
function scrollTo(element){
    document.querySelector(element).scrollIntoView({ behavior : "smooth" });
}

// Clicando no botão
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Clicando nos links
links.forEach(element => {
    element.children[0].addEventListener('click', toggleMenu);  
    element.children[0].addEventListener('touchstart', toggleMenu);  
    element.children[0].addEventListener('click', (e) => {
        e.preventDefault();
        const id = element.children[0].attributes.id.value.slice(4).toLowerCase();
        scrollTo(`#${id}`);
    });    
    element.children[0].addEventListener('touchstart', (e) => {
        e.preventDefault();
        const id = element.children[0].attributes.id.value.slice(4).toLowerCase();
        scrollTo(`#${id}`);
    });
});

document.querySelector("#linkArrow").addEventListener("click", (e) => {
    e.preventDefault();

    scrollTo("#sobre");
});