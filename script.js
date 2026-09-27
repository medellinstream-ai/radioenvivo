const s = document.getElementById("stream");
const u = document.getElementById("ui");
const n = document.getElementById("marquee-text");

function play() { 
    u.classList.add('on');
    n.innerHTML = "🔴 MEDELLÍN STREAM EN VIVO — Conectando a más de 30 países con la mejor producción sonora 🎧 | SINTONÍZANOS EN PLATAFORMAS: TuneIn • MyTuner Radio • Online Radio Box • Topemisoras.com | DISPOSITIVOS MÓVILES: Descarga gratis las Apps Radios Colombianas y miRadio en Google Play Store | PIDE TU CANCIÓN Y PARTICIPA: Escríbenos a nuestro WhatsApp Oficial 📲 +57 323 500 5412 | MEDELLÍN STREAM: ¡La consola de radio online que manda en la red! 🔥";
    document.getElementById('main-dial').style.transform = 'rotate(120deg)'; 
    s.src = "https://usa16.fastcast4u.com/proxy/medellin?mp=/1&cb=" + Date.now();
    s.play();
}

function stop() { 
    s.pause(); 
    s.src = ""; 
    u.classList.remove('on');
    document.getElementById('main-dial').style.transform = 'rotate(-120deg)'; 
    n.innerHTML = ">>> STANDBY >>> MEDELLÍN STREAM >>> PRESIONA PLAY PARA ENTRAR EN CABINA >>>";
}

function startTime() { 
    setInterval(() => { 
        document.getElementById('clock-display').innerHTML = new Date().toLocaleTimeString(); 
    }, 1000); 
}

function announceTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    let saludo = "";
    if (hours >= 5 && hours < 12) {
        saludo = "Muy buenos días, Medellín Stream te informa que son las ";
    } else if (hours >= 12 && hours < 19) {
        saludo = "Buenas tardes, en Medellín Stream son las ";
    } else {
        saludo = "Muy buenas noches, en Medellín Stream son las ";
    }

    const mensaje = saludo + hours + " y " + (minutes < 10 ? "0" + minutes : minutes) + ". Somos Medellin Stream,Conectando tus sentidos.";
    
    const msg = new SpeechSynthesisUtterance(mensaje);
    msg.lang = 'es-CO';
    msg.pitch = 0.9; 
    msg.rate = 1.0;  
    msg.volume = 2;
    
    window.speechSynthesis.speak(msg);
}
