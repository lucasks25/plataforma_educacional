// Alternar visibilidade da senha
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const icon = input.nextElementSibling.querySelector("i");

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// Alternar entre os formulários de Login e Registro
function switchForm(formType) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (formType === "register") {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
  } else {
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
  }
}

// Validação personalizada para e-mail
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Verificar força da senha
function checkPasswordStrength() {
  const password = document.getElementById("registerPassword").value;

  const lengthRequirement = document.getElementById("lengthRequirement");
  const uppercaseRequirement = document.getElementById("uppercaseRequirement");
  const lowercaseRequirement = document.getElementById("lowercaseRequirement");
  const numberRequirement = document.getElementById("numberRequirement");
  const specialCharRequirement = document.getElementById("specialCharRequirement");

  const conditions = [
    { test: password.length >= 8, element: lengthRequirement },
    { test: /[A-Z]/.test(password), element: uppercaseRequirement },
    { test: /[a-z]/.test(password), element: lowercaseRequirement },
    { test: /\d/.test(password), element: numberRequirement },
    { test: /[^a-zA-Z0-9]/.test(password), element: specialCharRequirement },
  ];

  conditions.forEach(({ test, element }) => {
    element.className = test ? "valid" : "invalid";
  });
}

// Validação ao enviar o formulário de registro
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("register-email-error");
  const passwordError = document.getElementById("register-password-error");

  let isValid = true;

  // Validação do nome
  if (name === "") {
    nameError.textContent = "Insira o nome completo.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validação do e-mail
  if (!validateEmail(email)) {
    emailError.textContent = "Insira um e-mail válido.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validação da senha
  const isPasswordStrong = document.querySelectorAll("#passwordRequirements .valid").length === 5;
  if (!isPasswordStrong) {
    passwordError.textContent = "A senha deve atender todos os requisitos.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Se tudo for válido
  if (isValid) {
    alert("Cadastro concluído com sucesso!");
  }
});

// Validação ao enviar o formulário de login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  let isValid = true;

  // Validação do e-mail
  if (!validateEmail(email)) {
    emailError.textContent = "Insira um e-mail válido.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validação da senha
  if (password === "") {
    passwordError.textContent = "Insira a senha.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Se tudo for válido
  if (isValid) {
    alert("Login realizado com sucesso!");
  }
});




document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Previne o recarregamento da página
  
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const emailField = document.getElementById("loginEmail");
  const passwordField = document.getElementById("loginPassword");
  const emailError = document.getElementById("login-email-error");
  const passwordError = document.getElementById("password-error");

  // Resetar mensagens de erro e estilos
  emailError.textContent = "invalid";
  passwordError.textContent = "invalid";
  emailField.classList.remove("invalid");
  passwordField.classList.remove("invalid");

  let isValid = true;

  // Validação do e-mail
  if (!validateEmail(email)) {
    emailError.textContent = "Por favor, insira um e-mail válido.";
    emailField.classList.add("invalid");
    isValid = false;
  }

  // Validação da senha
  if (password === "") {
    passwordError.textContent = "A senha não pode estar vazia.";
    passwordField.classList.add("invalid");
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "A senha deve ter pelo menos 6 caracteres.";
    passwordField.classList.add("invalid");
    isValid = false;
  }

  // Se tudo estiver válido
  if (isValid) {
    alert("Login realizado com sucesso!");
    window.location.href = "area-membro.html"; // Redireciona para a área de membros
  }
});

// Função para validar o e-mail
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Função para alternar visibilidade da senha
function togglePassword(passwordFieldId) {
  const passwordField = document.getElementById(passwordFieldId);
  const toggleButton = passwordField.nextElementSibling.querySelector("i");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.classList.remove("fa-eye");
    toggleButton.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    toggleButton.classList.remove("fa-eye-slash");
    toggleButton.classList.add("fa-eye");
  }
}















document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevenir recarregamento da página
  
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const emailError = document.getElementById("login-email-error");
  const passwordError = document.getElementById("password-error");

  // Resetar mensagens de erro
  emailError.textContent = "";
  passwordError.textContent = "";

  try {
    // Enviar os dados para o servidor
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (response.ok) {
      // Login bem-sucedido
      alert("Login bem-sucedido!");
      window.location.href = "area-membro.html"; // Redirecionar
    } else {
      // Exibir erros do servidor
      if (result.error) {
        if (result.error.includes("E-mail")) emailError.textContent = result.error;
        else if (result.error.includes("Senha")) passwordError.textContent = result.error;
        else alert(result.error);
      }
    }
  } catch (err) {
    alert("Erro de conexão com o servidor.");
  }
});









function sendPasswordRecovery() {
  const email = document.getElementById("forgotEmail").value.trim();
  const errorMessage = document.getElementById("forgot-email-error");

  // Limpar mensagem de erro anterior
  errorMessage.textContent = "";
  errorMessage.style.display = "none";

  // Validação do campo de e-mail
  if (!email) {
    errorMessage.textContent = "Por favor, insira um e-mail.";
    errorMessage.style.display = "block";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar e-mail
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Por favor, insira um e-mail válido.";
    errorMessage.style.display = "block";
    return;
  }

  // Simulação de envio para o servidor
  alert("Se o e-mail estiver cadastrado, você receberá um link para redefinir sua senha.");
  errorMessage.style.display = "none"; // Ocultar mensagem após sucesso
}



