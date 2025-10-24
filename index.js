    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    function toggleMenu() {
      sideMenu.classList.toggle("active");
      overlay.classList.toggle("active");
    }

    menuBtn.addEventListener("click", toggleMenu);

    overlay.addEventListener("click", toggleMenu);

const searchInput = document.getElementById('searchInput');
    const gameList = document.getElementById('gameList');
    const games = gameList.getElementsByTagName('li');

    searchInput.addEventListener('input', () => {
      const filtro = searchInput.value.toLowerCase();

      for (let jogo of games) {
        const nome = jogo.textContent.toLowerCase();
        jogo.classList.toggle('hidden', !nome.includes(filtro));
      }
    });
