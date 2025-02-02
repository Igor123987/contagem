// Data final da contagem regressiva
const targetDate = new Date("February 17, 2025 00:00:00").getTime();

// Mensagens de amor diárias
const loveMessages = {
    "31-01-2025": "A contagem regressiva começou! Mal posso esperar para te ver! 💖",
    "01-02-2025": "Fevereiro chegou e com ele, nosso amor cada dia mais forte! 💕",
    "02-02-2025": "Faltam poucos dias para o momento mais esperado do mês! ✨",
    "03-02-2025": "O tempo voa, mas meu amor por você só cresce! 🌹",
    "04-02-2025": "Duas semanas! Cada dia me faz te amar ainda mais. 💞",
    "05-02-2025": "Você é meu porto seguro, e logo estaremos juntinhos. 🥰",
    "06-02-2025": "Mal posso esperar pelo seu abraço apertado. 💖",
    "07-02-2025": "Nosso amor é a melhor coisa que já aconteceu comigo! 💌",
    "08-02-2025": "A cada dia que passa, meu coração bate mais forte por você! 💘",
    "09-02-2025": "Estamos cada vez mais perto do nosso momento especial! 🕰️",
    "10-02-2025": "Se essa espera fosse um livro, cada página seria cheia de amor. 📖💞",
    "11-02-2025": "Uma semana! Falta tão pouco para te ter nos meus braços! 💑",
    "12-02-2025": "Conto os segundos para olhar nos seus olhos novamente. ❤️",
    "13-02-2025": "A saudade tem nome: o seu vida! Mas logo ela acaba. 😊",
    "14-02-2025": "Hoje é Dia dos Namorados em alguns lugares, mas todo dia é nosso dia! 💕",
    "15-02-2025": "Três dias... O coração já não aguenta de tanta expectativa! ✨",
    "16-02-2025": "Amanhã é o último dia de espera! Mal posso dormir de ansiedade! 🌟",
    "17-02-2025": "CHEGOU O DIA! Finalmente, estaremos juntos de novo! Te amo demais! 💖"
};

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Obtém a data atual no formato correto
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR').replace(/\//g, "-");

    // Atualiza a mensagem
    document.getElementById("love-message").textContent = loveMessages[formattedDate] || "Cada dia é um passo mais perto de você! 💖";
}

// Atualiza a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();