// Seleciona as tags de categoria e os cursos
const categoryItems = document.querySelectorAll('.category-item');
const courseItems = document.querySelectorAll('.course-box');

// Função para filtrar cursos com base na tag
function filterCourses(tag) {
  courseItems.forEach(course => {
    // Exibe os cursos que correspondem à tag, ou exibe todos quando a tag for 'mostrar-todos'
    if (course.getAttribute('data-tags').includes(tag) || tag === 'mostrar-todos') {
      course.classList.remove('hidden'); // Exibe o curso
    } else {
      course.classList.add('hidden'); // Oculta o curso
    }
  });
}

// Função para lidar com o clique nas tags
function handleTagClick() {
  const tag = this.getAttribute('data-tag');
  
  // Adiciona a classe 'selected' à tag clicada e remove das outras
  categoryItems.forEach(item => item.classList.remove('selected'));
  this.classList.add('selected');

  // Filtra os cursos com base na tag
  filterCourses(tag);
}

// Adiciona o evento de clique nas tags
categoryItems.forEach(item => {
  item.addEventListener('click', handleTagClick);
});

// Adiciona o evento para o botão "Mostrar todos"
const showAllButton = document.getElementById('show-all');
if (showAllButton) {
  showAllButton.addEventListener('click', () => {
    // Exibe todos os cursos
    filterCourses('mostrar-todos');
  });
}

// Quando a página carrega, faz o "Mostrar todos" ser selecionado por padrão
window.addEventListener('load', () => {
  const showAllButton = document.getElementById('show-all');
  if (showAllButton) {
    // Adiciona a classe 'selected' ao botão "Mostrar todos" quando a página carrega
    showAllButton.classList.add('selected');
    filterCourses('mostrar-todos'); // Exibe todos os cursos inicialmente
  }
});



document.getElementById('toggle-button').addEventListener('click', function () {
  const hiddenCourses = document.querySelector('.hidden-courses');
  const button = document.getElementById('toggle-button');

  if (hiddenCourses.style.display === 'none' || hiddenCourses.style.display === '') {
      hiddenCourses.style.display = 'flex'; // Mostra os cursos
      button.textContent = 'Mostrar Menos'; // Altera o texto do botão
  } else {
      hiddenCourses.style.display = 'none'; // Oculta os cursos
      button.textContent = 'Mostrar Todos'; // Altera o texto do botão
  }
});
