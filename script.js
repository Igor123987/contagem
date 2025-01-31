// Data do reencontro (17 de fevereiro de 2025)
const targetDate = new Date("February 17, 2025 00:00:00").getTime();

// Mensagens diárias de amor
const loveMessages = {
    "Jan 31 2025": "A contagem regressiva começou! Mal posso esperar para te ver! 💖",
    "Feb 1 2025": "Fevereiro chegou e com ele, nosso amor cada dia mais forte! 💕",
    "Feb 2 2025": "Faltam poucos dias para o momento mais esperado do mês! ✨",
    "Feb 3 2025": "O tempo voa, mas meu amor por você só cresce! 🌹",
    "Feb 4 2025": "Duas semanas! Cada dia me faz te amar ainda mais. 💞",
    "Feb 5 2025": "Você é meu porto seguro, e logo estaremos juntinhos. 🥰",
    "Feb 6 2025": "Mal posso esperar pelo seu abraço apertado. 💖",
    "Feb 7 2025": "Nosso amor é a melhor coisa que já aconteceu comigo! 💌",
    "Feb 8 2025": "A cada dia que passa, meu coração bate mais forte por você! 💘",
    "Feb 9 2025": "Estamos cada vez mais perto do nosso momento especial! 🕰️",
    "Feb 10 2025": "Se essa espera fosse um livro, cada página seria cheia de amor. 📖💞",
    "Feb 11 2025": "Uma semana! Falta tão pouco para te ter nos meus braços! 💑",
    "Feb 12 2025": "Conto os segundos para olhar nos seus olhos novamente. ❤️",
    "Feb 13 2025": "A saudade tem nome: o seu! Mas logo ela acaba. 😊",
    "Feb 14 2025": "Hoje é Dia dos Namorados em alguns lugares, mas todo dia é nosso dia! 💕",
    "Feb 15 2025": "Três dias... O coração já não aguenta de tanta expectativa! ✨",
    "Feb 16 2025": "Amanhã é o último dia de espera! Mal posso dormir de ansiedade! 🌟",
    "Feb 17 2025": "CHEGOU O DIA! Finalmente, estares juntos de novo! Te amo demais! 💖"
};

// Atualiza a contagem regressiva
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

    const today = new Date().toDateString();
    document.getElementById("love-message").textContent = loveMessages[today] || "Cada dia é um passo mais perto de você! 💖";
}

setInterval(updateCountdown, 1000);
updateCountdown();