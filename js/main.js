const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    showCursor: false
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 1500
});

sr.reveal('.tecnologia', { delay: 150 });
sr.reveal('.projeto', { delay: 150 });
sr.reveal('.contato-box', { delay: 150 });
sr.reveal('.mensagem-container', { delay: 150 });

// Envio do formulário
async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('accessKey', '47fa2a6e-18f1-4992-939b-d55c5c902385');

    await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            event.target.reset();
            
            event.target[3].style.display = "none";
            document.querySelector('.success-msg').style.display = "block";

            setTimeout(() => {
                document.querySelector('.success-msg').style.display = "none";
                event.target[3].style.display = "block";
            }, 3500);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}