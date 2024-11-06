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
    'Componentes e suprimentos necessarios:<br><br>1x FONTE DE ALIMENTAÇÃO 220V PARA 24V<br>1x ARDUINO UNO<br>2x MOTOR 24V<br>2x POTÊNCIOMETRO DIGITAL<br>1x MODULO DE COMUNICAÇÃO<br>2x LEDs VERMELHAS<br>2x RELÉ DE ESTADO SOLIDO<br>2x RESISTORES</p>',

    'Esquema conceitual do projeto:<br>A base do projeto está em um conjunto de sensores e atuadores conectados ao microcontrolador Arduino. Esses componentes monitoram variáveis importantes da máquina, como: comunicação e controle remoto, interface de usuário e alertas e notificações ',

    'Problemas e liçoes aprendidas: ']
const imagens = [
    "images/componentesESuprimentos.png",
    "images/esquemaConceitual.png",
    "images/Logo01.png"];
function mudarImagem() {
    if (indiceAtual < imagens.length-1){
        indiceAtual+=1
    }
    else {
        indiceAtual = 0
    };

    document.getElementById("desc").innerHTML = descs[indiceAtual];
    document.getElementById("imagem").src = imagens[indiceAtual];
}

particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#fff" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#fff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  