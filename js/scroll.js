function scrollTo(element){
    document.querySelector(element).scrollIntoView({ behavior : "smooth" })
}

document.querySelector("#linkConhecimentos").addEventListener("click", function(event){
    event.preventDefault()

    scrollTo("#conhecimentos")
})

document.querySelector("#linkProjetos").addEventListener("click", function (event) {
    event.preventDefault()

    scrollTo("#projetos")
})

document.querySelector("#linkContato").addEventListener("click", function (event) {
    event.preventDefault()

    scrollTo("#contato")
})

document.querySelector("#linkInicio").addEventListener("click", function (event) {
    event.preventDefault()

    scrollTo("#sobre")
})

document.querySelector("#linkArrow").addEventListener("click", function (event) {
    event.preventDefault()

    scrollTo("#sobre")
})

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    showCursor: false
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 1500,
    reset: true
});

sr.reveal('.tecnologia', { delay: 150 });
sr.reveal('.projeto', { delay: 150 });
sr.reveal('.contato-box', { delay: 150 });
sr.reveal('.mensagem-container', { delay: 150 });