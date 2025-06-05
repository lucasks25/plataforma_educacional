// Função para alternar o menu de perfil
function toggleProfileMenu() {
    const profileMenu = document.getElementById("profile-menu");
    profileMenu.classList.toggle("visible");
  }
  
  // Fechar o menu de perfil ao clicar fora dele
  window.addEventListener("click", function (e) {
    const profileMenu = document.getElementById("profile-menu");
    const userIcon = document.querySelector(".user-icon");
    if (!userIcon.contains(e.target)) {
      profileMenu.classList.remove("visible");
    }
  });
  
  // Exemplo de como alterar o ícone de sino com base nas notificações
  function updateNotificationStatus(isNotified) {
    const notificationIcon = document.querySelector(".notification-icon i");
    
    // Adiciona ou remove a classe "fa-bell" (normal) ou "fa-bell-slash" (silenciado)
    if (isNotified) {
      notificationIcon.classList.remove("fa-bell-slash");
      notificationIcon.classList.add("fa-bell");
    } else {
      notificationIcon.classList.remove("fa-bell");
      notificationIcon.classList.add("fa-bell-slash");
    }
  }
  
  // Exemplo: se o aluno tem novas notificações
  updateNotificationStatus(true);  // Altere para "false" para silenciar as notificações
  