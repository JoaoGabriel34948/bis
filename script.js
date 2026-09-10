// BANCO DE DADOS COMPLETO COM 10 FRASES POR CATEGORIA E HUMOR
const fortunesDatabase = {
    carreira: [
        "A oportunidade que você procura está escondida no desafio que você evita.",
        "Seu esforço atual renderá frutos muito maiores do que você imagina.",
        "Um novo ciclo de prosperidade profissional se inicia em breve.",
        "Confie na sua competência. Você está mais preparado do que julga estar.",
        "Sua liderança natural começará a ser notada pelas pessoas certas.",
        "Um projeto audacioso trará o reconhecimento que você tanto busca.",
        "A sabedoria financeira de hoje construirá a sua liberdade de amanhã.",
        "Parcerias valiosas surgirão nos lugares mais inesperados.",
        "Ame o processo de aprendizado e o sucesso será uma consequência natural.",
        "Grandes decisões exigem coragem, e a coragem já está dentro de você."
    ],
    amor: [
        "Abra seu coração sem medo: o amor verdadeiro se nutre da autenticidade.",
        "Alguém admira a sua luz e a sua forma de ver o mundo, mesmo em silêncio.",
        "A harmonia nos seus relacionamentos começará a partir da sua paz interior.",
        "Momentos de afeto e reconexão profunda estão a caminho.",
        "O amor cresce nos pequenos detalhes do dia a dia; esteja atento a eles.",
        "Deixe o passado ir para que o novo capítulo do seu coração possa começar.",
        "A pessoa certa valorizará exatamente aquilo que você pensou que precisava mudar.",
        "Sua capacidade de amar e acolher atrairá conexões puras e sinceras.",
        "Um reencontro especial trará respostas que seu coração procurava.",
        "A empatia será a ponte para resolver qualquer mal-entendido afetivo."
    ],
    crescimento: [
        "Não tenha medo de crescer devagar, tenha medo apenas de ficar parado.",
        "A resposta que você busca está na paciência e na auto-observação.",
        "Sua intuição é um guia preciso. Escute-a com mais frequência.",
        "Grandes transformações começam com pequenas atitudes diárias.",
        "Cada erro do passado foi apenas um degrau para a sua versão mais sábia.",
        "Investir em si mesmo é o único investimento com retorno garantido.",
        "Sua mente é um jardim; cultive apenas os pensamentos que quer ver florescer.",
        "A verdadeira maturidade é encontrar serenidade em meio à incerteza.",
        "Desapegue da necessidade de agradar a todos e descubra a sua verdadeira força.",
        "Você está exatamente onde precisa estar para dar o seu próximo salto."
    ],
    saude: [
        "Cuide do seu corpo como o templo da sua mente e da sua alma.",
        "Permita-se desacelerar. O descanso também faz parte do progresso.",
        "Sua energia vital se renova a cada pensamento positivo que você escolhe ter.",
        "A paz interior é o maior escudo contra qualquer tempestade externa.",
        "Beba água, respire fundo e lembre-se de que sua saúde é seu maior tesouro.",
        "Silenciar a mente por alguns minutos hoje trará a clareza que você precisa.",
        "O equilíbrio entre corpo, mente e espírito abrirá portas para o bem-estar.",
        "Não carregue o peso do mundo em seus ombros; solte o que não é seu.",
        "Sua imunidade e vitalidade fortalecem quando você pratica a gratidão.",
        "Um hábito saudável adotado hoje trará anos de leveza no futuro."
    ],
    ansioso: [
        "Respire fundo. O futuro se constrói um passo de cada vez, viva o hoje.",
        "Tudo o que é seu encontrará um caminho até você. Acalme o coração.",
        "A maioria das tempestades que prevemos só existem na nossa mente.",
        "Solte o controle do incontrolável e sinta a leveza de confiar no tempo.",
        "Você já superou 100% dos seus piores dias até agora. Você vai superar este também.",
        "Esta sensação é temporária. A clareza e a paz retornarão em breve.",
        "Não tente resolver o ano inteiro hoje; resolva apenas o momento presente.",
        "Sua mente merece uma pausa. Feche os olhos e inspire tranquilidade.",
        "A incerteza de hoje é apenas o espaço onde o milagre de amanhã se prepara.",
        "Você é infinitamente maior e mais forte do que qualquer inquietação."
    ],
    motivado: [
        "Sua energia atual é contagiante! Use esse impulso para realizar seus grandes projetos.",
        "O universo conspira a favor de quem age com determinação.",
        "Nada pode deter alguém que sabe exatamente para onde está indo.",
        "Sua paixão é o combustível que transformará suas ideias em realidade.",
        "Aproveite esta onda de motivação para dar o primeiro passo naquele sonho antigo.",
        "O topo da montanha reserva a vista mais bonita para quem não desistiu na subida.",
        "Sua ousadia de hoje será a história de inspiração de amanhã.",
        "Foque na meta e ignore os ruídos ao redor; seu sucesso é inevitável.",
        "Transforme a sua fome de vencer no plano de ação mais bem estruturado da sua vida.",
        "Você nasceu para brilhar. Não diminua sua luz por causa de ninguém."
    ],
    cansado: [
        "Recarregar as energias não é desistir, é se preparar para voos mais altos.",
        "Respeite o seu tempo. A tempestade passa e o sol sempre volta.",
        "Diga 'não' sem culpa para proteger o seu espaço e o seu descanso.",
        "A exaustão é um sinal do seu corpo pedindo carinho e uma pausa.",
        "Não se cobre tanto. O simples fato de continuar tentando já faz de você um vitorioso.",
        "Hoje, apenas seja generoso consigo mesmo e desfrute de um momento de descanso.",
        "Mesmo as árvores mais fortes perdem as folhas no inverno para florescerem na primavera.",
        "Acalme a mente. Amanhã o dia nascerá renovado e cheio de novas possibilidades.",
        "Sua jornada é uma maratona, não uma corrida de 100 metros. Ajuste o ritmo.",
        "Deite a cabeça no travesseiro com a certeza de que fez o seu melhor por hoje."
    ],
    esperancoso: [
        "Sua fé e otimismo atrairão exatamente os milagres que você espera.",
        "Coisas incríveis acontecem para aqueles que nunca perdem a esperança.",
        "O universo tem uma maneira linda de honrar quem acredita em dias melhores.",
        "Sua postura positiva está sintonizando a sua vida na frequência das bênçãos.",
        "A semente da esperança plantada hoje será uma colheita abundante muito em breve.",
        "Mantenha o sorriso; o destino está preparando uma surpresa maravilhosa.",
        "Acreditar no invisível abrirá caminhos para você alcançar o impossível.",
        "A luz que você carrega dentro do peito ilumina até os dias mais nublados.",
        "A vida retribui em dobro a quem olha para o amanhã com entusiasmo.",
        "Um grande desejo do seu coração está se alinhando para se realizar."
    ],
    geral: [
        "A sorte favorece a mente bem preparada.",
        "Acredite no processo e confie na sua jornada.",
        "Sua atitude de hoje determina o seu sucesso de amanhã.",
        "Sorria! O otimismo é o ímã mais forte para coisas boas.",
        "A simplicidade é o último grau de sofisticação e felicidade.",
        "Boas notícias chegarão até você antes que a semana termine.",
        "Quem semeia gentileza colhe abundância em todas as áreas da vida.",
        "A melhor maneira de prever o futuro é criá-lo com as escolhas do presente.",
        "Sua vida ganha cor quando você decide ser o protagonista da sua história.",
        "Um pequeno gesto de bondade hoje gerará uma onda imensa de gratidão."
    ]
};

// ELEMENTOS DOM
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

    stepForm.classList.add('hidden');
    stepCookie.classList.remove('hidden');
});

// EVENTO: Clicar no Biscoito para Quebrar
cookieBtn.addEventListener('click', () => {
    if (cookieBtn.classList.contains('open')) return;

    cookieBtn.classList.add('open');

    const selectedFortune = generateFortune(userChoices);
    const numbers = generateLuckyNumbers();

    setTimeout(() => {
        stepCookie.classList.add('hidden');
        
        if (userChoices.name) {
            resultGreeting.textContent = `Para você, ${userChoices.name}:`;
        } else {
            resultGreeting.textContent = "Sua Mensagem:";
        }

        resultMessage.textContent = `"${selectedFortune}"`;
        
        luckyNumbersBox.innerHTML = '';
        numbers.forEach(num => {
            const span = document.createElement('span');
            span.className = 'num-ball';
            span.textContent = num < 10 ? `0${num}` : num;
            luckyNumbersBox.appendChild(span);
        });

        stepResult.classList.remove('hidden');
    }, 850);
});

// EVENTO: Reiniciar
btnRestart.addEventListener('click', () => {
    cookieBtn.classList.remove('open');

    stepResult.classList.add('hidden');
    stepForm.classList.remove('hidden');
});

// GERAR MENSAGEM PERSONALIZADA
function generateFortune(choices) {
    let pool = [];

    choices.categories.forEach(cat => {
        if (fortunesDatabase[cat]) {
            pool = pool.concat(fortunesDatabase[cat]);
        }
    });

    choices.moods.forEach(mood => {
        if (fortunesDatabase[mood]) {
            pool = pool.concat(fortunesDatabase[mood]);
        }
    });

    if (pool.length === 0) {
        pool = fortunesDatabase.geral;
    }

    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
}

// GERAR NÚMEROS DA SORTE (1 a 60)
function generateLuckyNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNum = Math.floor(Math.random() * 60) + 1;
        numbers.add(randomNum);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}
