// Aciona a categoria de curso clicando 
document.querySelectorAll('.category-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.category-item').forEach(i => i.classList.remove('selected'));
    item.classList.add('selected');
  });
});


let currentQuestion = 0;

const questions = [
  {
    question: "Qual seu objetivo principal com este curso?",
    options: [
      "Aprovação rápida em concursos",
      "Aprimoramento profissional",
      "Aprendizado a longo prazo",
      "Preparação específica para uma prova",
    ],
  },
  {
    question: "Qual área você deseja estudar para o concurso?",
    options: [
      "Português",
      "Matemática",
      "Direito",
      "Informática",
      "Atualidades",
      "Raciocínio Lógico",
      "Legislação",
      "Redação",
    ],
  },
  {
    question: "Como você prefere estudar online?",
    options: [
      "Aulas ao vivo",
      "Vídeos gravados",
      "Materiais de leitura",
      "Atividades interativas",
    ],
  },
  {
    question: "Qual é o seu nível de conhecimento atual?",
    options: [
      "Iniciante",
      "Intermediário",
      "Avançado",
    ],
  },
];

function addMessage(userMessage) {
  const chatBox = document.querySelector('.chat-box');
  const userMessageElement = document.createElement('div');
  userMessageElement.classList.add('message', 'user');
  userMessageElement.innerHTML = `<p>${userMessage}</p>`;
  chatBox.appendChild(userMessageElement);

  disableButtons(true);
  showTypingIndicator();

  setTimeout(() => {
    processResponse(userMessage);
  }, 1500); // Redução no tempo para respostas mais rápidas
}

function processResponse(userMessage) {
  currentQuestion++;
  
  if (currentQuestion < questions.length) {
    setTimeout(() => {
      showQuestion(questions[currentQuestion]);
      hideTypingIndicator();
    }, 1000);
  } else {
    setTimeout(() => {
      const finalMessage = document.createElement('div');
      finalMessage.classList.add('message', 'bot');
      finalMessage.innerHTML = `<p>Obrigado por suas respostas! Com base no que você compartilhou, sugerimos recursos personalizados. Um dos nossos consultores entrará em contato em breve para te ajudar a organizar o melhor plano de estudo!</p>`;
      chatBox.appendChild(finalMessage);
      chatBox.scrollTop = chatBox.scrollHeight;
      disableButtons(false);
      hideTypingIndicator();
    }, 1000);
  }
}

function showQuestion(question) {
  const chatBox = document.querySelector('.chat-box');
  const botMessageElement = document.createElement('div');
  botMessageElement.classList.add('message', 'bot');
  botMessageElement.innerHTML = `<p>${question.question}</p>`;
  chatBox.appendChild(botMessageElement);

  const buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.innerHTML = '';
  
  question.options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option;
    button.onclick = () => addMessage(option);
    buttonsContainer.appendChild(button);
  });

  chatBox.scrollTop = chatBox.scrollHeight;
  disableButtons(false);
}

function showTypingIndicator() {
  const chatBox = document.querySelector('.chat-box');
  const typingIndicator = document.createElement('div');
  typingIndicator.classList.add('message', 'bot', 'typing-indicator');
  typingIndicator.innerHTML = `<p>...</p>`;
  chatBox.appendChild(typingIndicator);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function hideTypingIndicator() {
  const typingIndicator = document.querySelector('.typing-indicator');
  if (typingIndicator) typingIndicator.remove();
}

function disableButtons(disabled) {
  const buttons = document.querySelectorAll('.buttons-container button');
  buttons.forEach(button => {
    button.disabled = disabled;
  });
}

showQuestion(questions[currentQuestion]);

function processResponse(userMessage) {
  currentQuestion++;
  
  if (currentQuestion < questions.length) {
    setTimeout(() => {
      // Verifica se a pergunta atual é sobre o nível do aluno
      if (questions[currentQuestion - 1].question.includes("nível de conhecimento")) {
        // Resposta personalizada com base no nível
        let followUpMessage = '';
        if (userMessage === "Iniciante") {
          followUpMessage = "Ótimo! Recomendamos começar com nossos módulos básicos, que vão te ajudar a construir uma base sólida.";
        } else if (userMessage === "Intermediário") {
          followUpMessage = "Perfeito! Você já pode explorar os módulos intermediários para aprofundar seus conhecimentos.";
        } else if (userMessage === "Avançado") {
          followUpMessage = "Excelente! Vamos direto aos conteúdos avançados para desafiar seu conhecimento e prepará-lo para situações mais complexas.";
        }

        const followUpElement = document.createElement('div');
        followUpElement.classList.add('message', 'bot');
        followUpElement.innerHTML = `<p>${followUpMessage}</p>`;
        document.querySelector('.chat-box').appendChild(followUpElement);
        document.querySelector('.chat-box').scrollTop = document.querySelector('.chat-box').scrollHeight;
      }

      showQuestion(questions[currentQuestion]);
      hideTypingIndicator();
    }, 1000);
  } else {
    // Mensagem final se não houver mais perguntas
    setTimeout(() => {
      const finalMessage = document.createElement('div');
      finalMessage.classList.add('message', 'bot');
      finalMessage.innerHTML = `<p>Obrigado por suas respostas! Vamos personalizar o conteúdo para o seu nível de experiência. Em breve, entraremos em contato para te ajudar a organizar o melhor plano de estudo.</p>`;
      document.querySelector('.chat-box').appendChild(finalMessage);
      document.querySelector('.chat-box').scrollTop = document.querySelector('.chat-box').scrollHeight;
      disableButtons(false);
      hideTypingIndicator();
    }, 1000);
  }
}


//teste 








// Função para filtrar cursos por categoria
document.querySelectorAll('.category-item').forEach(item => {
  item.addEventListener('click', () => {
    // Remove a seleção de outras categorias
    document.querySelectorAll('.category-item').forEach(i => i.classList.remove('selected'));
    item.classList.add('selected');

    // Obtém a categoria selecionada
    const selectedCategory = item.getAttribute('data-category');

    // Mostra ou oculta os cursos com base na categoria
    document.querySelectorAll('.swiper-slide').forEach(slide => {
      if (selectedCategory === 'all' || slide.getAttribute('data-category') === selectedCategory) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });

    // Atualiza o Swiper
    swiper.update();
  });
});

// Configuração do Swiper
var swiper = new Swiper(".course-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});



// FAQ Section 

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement; // Item FAQ clicado

    // Fecha outras perguntas abertas
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem && item.classList.contains('open')) {
        item.classList.remove('open');
      }
    });

    // Alterna o estado da pergunta clicada
    faqItem.classList.toggle('open');
  });
});



//teste
const themes = [
  {
      background: "#1A1A2E",
      color: "#FFFFFF",
      primaryColor: "#0F3460"
  },
  {
      background: "#461220",
      color: "#FFFFFF",
      primaryColor: "#E94560"
  },
  {
      background: "#192A51",
      color: "#FFFFFF",
      primaryColor: "#967AA1"
  },
  {
      background: "#F7B267",
      color: "#000000",
      primaryColor: "#F4845F"
  },
  {
      background: "#F25F5C",
      color: "#000000",
      primaryColor: "#642B36"
  },
  {
      background: "#231F20",
      color: "#FFF",
      primaryColor: "#BB4430"
  }
];

const setTheme = (theme) => {
  const root = document.querySelector(":root");
  root.style.setProperty("--background", theme.background);
  root.style.setProperty("--color", theme.color);
  root.style.setProperty("--primary-color", theme.primaryColor);
  root.style.setProperty("--glass-color", theme.glassColor);
};

const displayThemeButtons = () => {
  const btnContainer = document.querySelector(".theme-btn-container");
  themes.forEach((theme) => {
      const div = document.createElement("div");
      div.className = "theme-btn";
      div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
      btnContainer.appendChild(div);
      div.addEventListener("click", () => setTheme(theme));
  });
};

displayThemeButtons();








