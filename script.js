function showSection(sectionId) {
    const activeSection = document.querySelector('.section.active');
    if (activeSection) {
        activeSection.classList.remove('active', 'fade-in');
    }

    const newSection = document.getElementById(sectionId);
    newSection.classList.add('active');

    setTimeout(() => {
        newSection.classList.add('fade-in');
    }, 10);
}


let indiceAtual = 0;
const descs = [
    '<h1>Componentes e<br>suprimentos</h1><br><br>1x Fonde de alimentação 220V para 24V<br>1x Arduino UNO<br>2x Motor 24V<br>2x Potênciometro digital<br>1x Modulo de comunacação<br>2x LEDs vermelhas<br>2x Relé de estado solido<br>2x Resistores',
    '<h1>Esquema<br>conceitual</h1><br>&nbsp;&nbsp;&nbsp;&nbsp;A base do projeto está em um conjunto de sensores e atuadores conectados ao microcontrolador Arduino. Esses componentes monitoram variáveis importantes da máquina, como: comunicação e controle remoto, interface de usuário e alertas e notificações.',
    '<h1>Ferramentas<br>utilizadas</h1><br>&nbsp;&nbsp;&nbsp;&nbsp;Utilizamos uma combinação de ferramentas e tecnologias que contribuíram para a construção eficiente e funcional da solução proposta. Cada ferramenta foi escolhida estrategicamente para atender aos requisitos técnicos e operacionais, garantindo qualidade e facilidade de manutenção.']
const imagens = [
    "./images/componentesESuprimentos.png",
    "./images/esquemaConceitual.png",
    "./images/ferramentas.png"];

function mudarImagem() {
    const imagem = document.getElementById("imagem")
    const desc = document.getElementById("desc")

    imagem.classList.remove("mostrar");
    desc.classList.remove("mostrar");

    setTimeout(() => {
        indiceAtual = (indiceAtual + 1) % imagens.length;
        imagem.src = imagens[indiceAtual];
        desc.innerHTML = descs[indiceAtual];

        imagem.classList.add("mostrar");
        desc.classList.add("mostrar");
    }, 300);

    document.getElementById("desc").innerHTML = descs[indiceAtual];
    document.getElementById("imagem").src = imagens[indiceAtual];
}
