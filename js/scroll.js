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