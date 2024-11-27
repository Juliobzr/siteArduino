let indiceAtual = 0;
const descs = [
    '<br>1x Arduino UNO<br>2x Potênciometros digitais (X9C103P)<br>2x TIP120 (transistor)<br>2x Resistores de 220 ohms<br>1x Regulador de tensão LM2596 (DC-DC)<br>1x Display LCD 16x2 com módulo I2C <br>2x Motores DC 24V <br>1x Fonte 220V - 24 V',
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


const descs2 = [
    '<br>1x Arduino UNO<br>2x Potênciometros digitais (X9C103P)<br>2x TIP120 (transistor)<br>2x Resistores de 220 ohms<br>1x Regulador de tensão LM2596 (DC-DC)<br>1x Display LCD 16x2 com módulo I2C <br>2x Motores DC 24V <br>1x Fonte 220V - 24 V',
    '<h1>Passo 02</h1><br>Conectar os jumpers seguindo a imagem ao lado.',
    '<h1>Passo 03</h1><br>Clicar na aba de codigo para inserir o codigo disponilizado no GitHub.',
    '<h1>Passo 04</h1><br>Clicar na aba de "Iniciar Simulação".'];
const imagens2 = [
    './images/imagens_passo_a_passo/imagem01.png',
    './images/imagens_passo_a_passo/imagem02.png',
    './images/imagens_passo_a_passo/imagem03.png',
    './images/imagens_passo_a_passo/imagem04.png'
];
let indiceAtual2 = 0;
function mudarImagem2() {
    const imagem2 = document.getElementById("imagem2")
    const desc2 = document.getElementById("desc2")

    imagem2.classList.remove("mostrar");
    desc2.classList.remove("mostrar");

    setTimeout(() => {
        indiceAtual2 = (indiceAtual2 + 1) % imagens2.length;
        imagem2.src = imagens2[indiceAtual2];
        desc2.innerHTML = descs2[indiceAtual2];

        imagem2.classList.add("mostrar");
        desc2.classList.add("mostrar");
    }, 300);

    document.getElementById("desc2").innerHTML = descs2[indiceAtual2];
    document.getElementById("imagem2").src = imagens2[indiceAtual2];
}