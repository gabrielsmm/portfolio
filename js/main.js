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
sr.reveal('.experiencias-container', { delay: 150 });

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

// Mudar modo (dark ou light)
function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");
    if (html.classList.contains("light")) {
        document.querySelector('.logo').src = "img/logo_dark.png";
    } else {
        document.querySelector('.logo').src = "img/logo.png";
    }
}

// Mudança das experiências
function mudarExperiencia(nomeExperiencia, textoTitulo, textoData, textoEmpresa, textoDescricao) {
    // Seleciona os elementos que serão atualizados
    const varTitulo = document.querySelector(".experiencia-titulo");
    const varData = document.querySelector(".experiencia-data");
    const varEmpresa = document.querySelector(".experiencia-empresa");
    const varDescricao = document.querySelector(".experiencia-descricao");

    // Verifica se os elementos existem antes de manipulá-los
    if (!varTitulo || !varData || !varEmpresa || !varDescricao) {
        console.error("Elementos de experiência não encontrados.");
        return;
    }

    // Função para atualizar os elementos com os novos valores
    const atualizarExperiencia = () => {
        varTitulo.innerHTML = textoTitulo;
        varData.innerHTML = textoData;
        varEmpresa.innerHTML = textoEmpresa;
        varDescricao.innerHTML = textoDescricao;
    };

    // Atualiza os valores ao carregar a página, se for a experiência inicial
    if (nomeExperiencia === ".caixa" && !varTitulo.innerHTML) {
        atualizarExperiencia();
    }

    // Adiciona o evento de clique para atualizar os valores
    const elemento = document.querySelector(nomeExperiencia);
    if (elemento) {
        elemento.addEventListener("click", atualizarExperiencia);
    } else {
        console.error(`Elemento com o seletor "${nomeExperiencia}" não encontrado.`);
    }
}

mudarExperiencia(".caixa",
"Desenvolvedor Full Stack",
"Jan 2025 - Atualmente",
"Caixa Econômica Federal",
"Atualmente atuo como desenvolvedor na Caixa Econômica Federal, sendo responsável pelo desenvolvimento e manutenção de sistemas internos. " +
"Minhas atividades envolvem o uso de Java, AngularJS e banco de dados Oracle, além de ferramentas de ETL e automação de processos."
);

mudarExperiencia(".setfocus",
"Estagiário - Programador Júnior",
"Jul 2021 - Dez 2024 (3 anos e 6 meses)",
"7Focus Sistemas",
"Após concluir meu estágio em dezembro de 2022, fui efetivado como programador júnior, assumindo responsabilidades " + 
"no desenvolvimento e manutenção de um sistema de gestão pública. Durante essa experiência, foram aplicadas habilidades " + 
"como o uso de Angular no frontend e Java com Spring no backend, além do desenvolvimento de relatórios Jasper e " + 
"integração com APIs de terceiros.");

mudarExperiencia(".newline",
"Estagiário de T.I.",
"Out 2020 - Jun 2021 (9 meses)",
"Newline Sistemas de Segurança",
"Atuei como estagiário de Tecnologia da Informação, desempenhando atividades de acompanhamento de demandas e chamados relacionados ao Departamento de T.I.");

const opcoes = document.getElementById("experiencias-opcoes");
const botoes = opcoes.getElementsByClassName("experiencia");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
        const atual = document.getElementsByClassName("experiencia-ativa");
        atual[0].className = atual[0].className.replace(
        " experiencia-ativa",
        ""
        );
        this.className += " experiencia-ativa";
    });
}