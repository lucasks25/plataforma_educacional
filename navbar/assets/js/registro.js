// Função para validar o formulário de registro
function validateForm(event) {
  event.preventDefault(); // Previne o envio do formulário
  
  // Seleciona os campos do formulário
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const password = document.getElementById('password');
  const terms = document.getElementById('terms');
  
  // Seleciona as mensagens de erro
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const phoneError = document.getElementById('phone-error');
  const passwordError = document.getElementById('password-error');
  const termsError = document.getElementById('terms-error');

  let isValid = true;

  // Função para limpar as mensagens de erro e estilos de campo inválido
  function clearError(field, errorElement) {
    field.classList.remove('invalid');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }

  // Função para exibir erro
  function showError(field, errorElement, message) {
    field.classList.add('invalid');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    isValid = false;
  }

  // Verificação do nome
  if (name.value.trim() === '') {
    showError(name, nameError, 'Por favor, preencha o nome.');
  } else {
    clearError(name, nameError);
  }

  // Verificação do e-mail
  if (email.value.trim() === '') {
    showError(email, emailError, 'Por favor, preencha o e-mail.');
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    showError(email, emailError, 'Por favor, insira um e-mail válido.');
  } else {
    clearError(email, emailError);
  }

  // Verificação do celular
  if (phone.value.trim() === '') {
    showError(phone, phoneError, 'Por favor, preencha o número de celular.');
  } else {
    clearError(phone, phoneError);
  }

  // Verificação da senha
  if (password.value.trim() === '') {
    showError(password, passwordError, 'Por favor, preencha a senha.');
  } else if (password.value.length < 6) {
    showError(password, passwordError, 'A senha deve ter pelo menos 6 caracteres.');
  } else {
    clearError(password, passwordError);
  }

  // Verificação dos termos
  if (!terms.checked) {
    showError(terms, termsError, 'Você deve aceitar os termos e a política de privacidade.');
  } else {
    clearError(terms, termsError);
  }

  // Se o formulário for válido, podemos enviar
  if (isValid) {
    alert('Formulário enviado com sucesso!');
  }
}

// Função para validar o formulário de login
function validateLoginForm(event) {
  event.preventDefault(); // Previne o envio do formulário
  
  // Seleciona os campos do formulário de login
  const emailLogin = document.getElementById('email-login');
  const passwordLogin = document.getElementById('password-login');
  
  // Seleciona as mensagens de erro
  const emailLoginError = document.getElementById('email-login-error');
  const passwordLoginError = document.getElementById('password-login-error');
  
  let isValid = true;

  // Função para limpar as mensagens de erro
  function clearError(field, errorElement) {
    field.classList.remove('invalid');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }

  // Função para exibir erro
  function showError(field, errorElement, message) {
    field.classList.add('invalid');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    isValid = false;
  }

  // Verificação do e-mail de login
  if (emailLogin.value.trim() === '') {
    showError(emailLogin, emailLoginError, 'Por favor, preencha o e-mail.');
  } else if (!/\S+@\S+\.\S+/.test(emailLogin.value)) {
    showError(emailLogin, emailLoginError, 'Por favor, insira um e-mail válido.');
  } else {
    clearError(emailLogin, emailLoginError);
  }

  // Verificação da senha de login
  if (passwordLogin.value.trim() === '') {
    showError(passwordLogin, passwordLoginError, 'Por favor, preencha a senha.');
  } else {
    clearError(passwordLogin, passwordLoginError);
  }

  // Se o formulário de login for válido, podemos enviar
  if (isValid) {
    alert('Login realizado com sucesso!');
  }
}

// Função para alternar a visibilidade da senha
function togglePasswordVisibility() {
  const passwordFields = document.querySelectorAll('.password-field');
  passwordFields.forEach(field => {
    const input = field.querySelector('input[type="password"], input[type="text"]');
    const toggle = field.querySelector('.show-password');
    
    toggle.addEventListener('click', () => {
      if (input.type === 'password') {
        input.type = 'text';
        toggle.textContent = 'Ocultar';
      } else {
        input.type = 'password';
        toggle.textContent = 'Mostrar';
      }
    });
  });
}

// Adiciona os eventos de envio
document.getElementById('register-form').addEventListener('submit', validateForm);
document.getElementById('login-form').addEventListener('submit', validateLoginForm);

// Ativa o alternador de visibilidade de senha
togglePasswordVisibility();


// Seleciona os elementos necessários
const passwordInput = document.getElementById('password');
const lengthRequirement = document.getElementById('length-requirement');
const letterRequirement = document.getElementById('letter-requirement');
const numberRequirement = document.getElementById('number-requirement');
const specialCharRequirement = document.getElementById('special-char-requirement');

// Adiciona um evento para monitorar a digitação na senha
passwordInput.addEventListener('input', () => {
  const passwordValue = passwordInput.value;

  // Verifica o comprimento da senha
  if (passwordValue.length >= 6) {
    lengthRequirement.classList.add('valid');
  } else {
    lengthRequirement.classList.remove('valid');
  }

  // Verifica se há pelo menos uma letra
  if (/[a-zA-Z]/.test(passwordValue)) {
    letterRequirement.classList.add('valid');
  } else {
    letterRequirement.classList.remove('valid');
  }

  // Verifica se há pelo menos um número
  if (/\d/.test(passwordValue)) {
    numberRequirement.classList.add('valid');
  } else {
    numberRequirement.classList.remove('valid');
  }

  // Verifica se há exatamente um caractere especial
  if (/[@#$%^&*(),.?":{}|<>]/.test(passwordValue)) {
    specialCharRequirement.classList.add('valid');
  } else {
    specialCharRequirement.classList.remove('valid');
  }
});


document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o campo de telefone e a área de erro
  const phoneInput = document.getElementById('phone');
  const phoneError = document.getElementById('phone-error');

  // Inicializa o intl-tel-input apenas uma vez
  const iti = window.intlTelInput(phoneInput, {
    initialCountry: "BR", // País inicial (Brasil)
    preferredCountries: ["BR", "US", "GB"], // Países preferidos
    separateDialCode: true, // Separa o código do país
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17/build/js/utils.js", // Necessário para validação
  });

  // Validação do número no evento blur (quando o campo perde o foco)
  phoneInput.addEventListener('blur', () => {
    if (phoneInput.value.trim()) {
      if (iti.isValidNumber()) {
        phoneError.textContent = ""; // Número válido
        phoneInput.classList.remove('invalid');
        phoneInput.classList.add('valid');
      } else {
        phoneError.textContent = "Número de telefone inválido.";
        phoneInput.classList.remove('valid');
        phoneInput.classList.add('invalid');
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phone-error");

  // Países com formatos e limites definidos
  const countryFormats = {
    BR: { regex: /^(\d{2})(\d{5})(\d{4})$/, format: "($1) $2-$3", maxLength: 11 }, // Ex.: (11) 91234-5678
    US: { regex: /^(\d{3})(\d{3})(\d{4})$/, format: "($1) $2-$3", maxLength: 10 }, // Ex.: (123) 456-7890
  };

  // País inicial
  let selectedCountry = "BR";

  // Atualiza o país com base na bandeira clicada
  function updateCountry(newCountry) {
    selectedCountry = newCountry;
    phoneInput.value = ""; // Limpa o input ao trocar de país
    phoneError.textContent = ""; // Limpa mensagens de erro
    phoneInput.placeholder =
      newCountry === "BR"
        ? "Digite seu telefone (Brasil)"
        : "Digite seu telefone (EUA)";
  }

  // Formatação dinâmica enquanto o usuário digita
  phoneInput.addEventListener("input", () => {
    let input = phoneInput.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    // Dados do país atual
    const countryData = countryFormats[selectedCountry];
    if (countryData) {
      // Limita a entrada ao número máximo permitido
      input = input.slice(0, countryData.maxLength);

      // Formata o número
      if (input.match(countryData.regex)) {
        phoneInput.value = input.replace(countryData.regex, countryData.format);
      } else {
        phoneInput.value = input; // Exibe como está se não atingir o formato
      }
    }
  });

  // Validação final no evento blur
  phoneInput.addEventListener("blur", () => {
    const countryData = countryFormats[selectedCountry];
    if (countryData && phoneInput.value.replace(/\D/g, "").length !== countryData.maxLength) {
      phoneError.textContent = "Número de telefone inválido.";
    } else {
      phoneError.textContent = "";
    }
  });

  // Eventos para troca de país
  document.getElementById("select-br").addEventListener("click", () => updateCountry("BR"));
  document.getElementById("select-us").addEventListener("click", () => updateCountry("US"));
});
