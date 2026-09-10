// BANCO DE DADOS DE MENSAGENS CATEGORIZADAS
const fortunesDatabase = {
    carreira: [
        "A oportunidade que você procura está escondida no desafio que você evita.",
        "Seu esforço atual renderá frutos muito maiores do que você imagina.",
        "Um novo ciclo de prosperidade profissional se inicia em breve.",
        "Confie na sua competência. Você está mais preparado do que julga estar."
    ],
    amor: [
        "Abra seu coração sem medo: o amor verdadeiro se nutre da autenticidade.",
        "Alguém admira a sua luz e a sua forma de ver o mundo, mesmo em silêncio.",
        "A harmonia nos seus relacionamentos começará a partir da sua paz interior.",
        "Momentos de afeto e reconexão profunda estão a caminho."
    ],
    crescimento: [
        "Não tenha medo de crescer devagar, tenha medo apenas de ficar parado.",
        "A resposta que você busca está na paciência e na auto-observação.",
        "Sua intuição é um guia preciso. Escute-a com mais frequência.",
        "Grandes transformações começam com pequenas atitudes diárias."
    ],
    saude: [
        "Cuide do seu corpo como o templo da sua mente e da sua alma.",
        "Permita-se desacelerar. O descanso também faz parte do progresso.",
        "Sua energia vital se renova a cada pensamento positivo que você escolhe ter.",
        "A paz interior é o maior escudo contra qualquer tempestade externa."
    ],
    // Mensagens especiais para humor
    ansioso: [
        "Respire fundo. O futuro se constrói um passo de cada vez, viva o hoje.",
        "Tudo o que é seu encontrará um caminho até você. Acalme o coração."
    ],
    motivado: [
        "Sua energia atual é contagiante! Use esse impulso para realizar seus grandes projetos.",
        "O universo conspira a favor de quem age com determinação."
    ],
    cansado: [
        "Recarregar as energias não é desistir, é se preparar para voos mais altos.",
        "Respeite o seu tempo. A tempestade passa e o sol sempre volta."
    ],
    esperancoso: [
        "Sua fé e otimismo atrairão exatamente os milagres que você espera.",
        "Coisas incríveis acontecem para aqueles que nunca perdem a esperança."
    ],
    // Mensagens padrão de contingência
    geral: [
        "A sorte favorece a mente bem preparada.",
        "Acredite no processo e confie na sua jornada.",
        "Sua atitude de hoje determina o seu sucesso de amanhã."
    ]
};

// ELEMENTOS DO DOM
const stepForm = document.getElementById('step-form');
const stepCookie = document.getElementById('step-cookie');
const stepResult = document.getElementById('step-result');

const btnPrepare = document.getElementById('btn-prepare');
const cookieBtn = document.getElementById('cookie-btn');
const btnRestart = document.getElementById('btn-restart');

const userNameInput = document.getElementById('user-name');
const resultGreeting = document.getElementById('result-greeting');
const resultMessage = document.getElementById('result-message');
const luckyNumbersBox = document.getElementById('lucky-numbers');

let userChoices = {};

// EVENTO: Salvar preferências e ir para o Biscoito
btnPrepare.addEventListener('click', () => {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(el => el.value);
    const selectedMoods = Array.from(document.querySelectorAll('input[name="mood"]:checked')).map(el => el.value);

    userChoices = {
        name: userNameInput.value.trim(),
        categories: selectedCategories,
        moods: selectedMoods
    };

    // Fazer transição de telas
    stepForm.classList.add('hidden');
    stepCookie.classList.remove('hidden');
});

// EVENTO: Clicar no Biscoito para Quebrar
cookieBtn.addEventListener('click', () => {
    const cookieContainer = cookieBtn.querySelector('.cookie-container');
    
    // Evita múltiplos cliques
    if (cookieContainer.classList.contains('open')) return;

    // Adiciona classe de quebra
    cookieContainer.classList.add('open');

    // Seleciona a mensagem personalizada
    const selectedFortune = generateFortune(userChoices);
    const numbers = generateLuckyNumbers();

    // Aguarda a animação do biscoito abrir (800ms) para mostrar o resultado
    setTimeout(() => {
        stepCookie.classList.add('hidden');
        
        // Exibir Nome
        if (userChoices.name) {
            resultGreeting.textContent = `Para você, ${userChoices.name}:`;
        } else {
            resultGreeting.textContent = "Sua Mensagem:";
        }

        resultMessage.textContent = `"${selectedFortune}"`;
        
        // Renderizar Números da Sorte
        luckyNumbersBox.innerHTML = '';
        numbers.forEach(num => {
            const span = document.createElement('span');
            span.className = 'num-ball';
            span.textContent = num < 10 ? `0${num}` : num;
            luckyNumbersBox.appendChild(span);
        });

        stepResult.classList.remove('hidden');
    }, 800);
});

// EVENTO: Reiniciar (Abrir outro)
btnRestart.addEventListener('click', () => {
    // Resetar animações e telas
    const cookieContainer = cookieBtn.querySelector('.cookie-container');
    cookieContainer.classList.remove('open');

    stepResult.classList.add('hidden');
    stepForm.classList.remove('hidden');
});

// FUNÇÃO: Selecionar mensagem inteligente baseada nos checkboxes marcados
function generateFortune(choices) {
    let pool = [];

    // Adiciona mensagens baseadas nas categorias de área marcadas
    choices.categories.forEach(cat => {
        if (fortunesDatabase[cat]) {
            pool = pool.concat(fortunesDatabase[cat]);
        }
    });

    // Adiciona mensagens baseadas nos humores marcados
    choices.moods.forEach(mood => {
        if (fortunesDatabase[mood]) {
            pool = pool.concat(fortunesDatabase[mood]);
        }
    });

    // Se o usuário não marcou nada, usamos a lista de contingência (Geral)
    if (pool.length === 0) {
        pool = fortunesDatabase.geral;
    }

    // Escolhe um item aleatório dentro do pool filtrado
    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
}

// FUNÇÃO: Gerar 6 Números da Sorte Aleatórios (de 1 a 60)
function generateLuckyNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNum = Math.floor(Math.random() * 60) + 1;
        numbers.add(randomNum);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}
