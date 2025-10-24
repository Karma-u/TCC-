    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    function toggleMenu() {
      sideMenu.classList.toggle("active");
      overlay.classList.toggle("active");
    }

    menuBtn.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);