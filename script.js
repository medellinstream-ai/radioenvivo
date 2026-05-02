const s = document.getElementById("stream");
const u = document.getElementById("ui");
const n = document.getElementById("marquee-text");

function play() { 
    u.classList.add('on');
    n.innerHTML = "--- ESTÁS ESCUCHANDO MEDELLÍN STREAM: CONECTANDO TUS SENTIDOS --- DESDE COLOMBIA PARA TODO EL MUNDO --- CALIDAD AUDITIVA --- DESCARGA NUESTRA APP OFICIAL --- SINTONIZA LO BUENO ---";
    document.getElementById('main-dial').style.transform = 'rotate(120deg)'; 
    s.src = "https://usa16.fastcast4u.com/proxy/medellin?mp=/1&cb=" + Date.now();
    s.play();
}

function stop() { 
    s.pause(); 
    s.src = ""; 
    u.classList.remove('on');
    document.getElementById('main-dial').style.transform = 'rotate(-120deg)'; 
    n.innerHTML = ">>> STANDBY >>> MEDELLÍN STREAM >>>";
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
        saludo = "Muy buenos días, Medellín Stream informa que son las ";
    } else if (hours >= 12 && hours < 19) {
        saludo = "Buenas tardes, en Medellín Stream son las ";
    } else {
        saludo = "Muy buenas noches, en Medellín Stream son las ";
    }

    const mensaje = saludo + hours + " y " + (minutes < 10 ? "0" + minutes : minutes) + ". Conectando tus sentidos.";
    
    const msg = new SpeechSynthesisUtterance(mensaje);
    msg.lang = 'es-CO';
    msg.pitch = 0.9; 
    msg.rate = 1.0;  
    msg.volume = 1;
    
    window.speechSynthesis.speak(msg);
}
