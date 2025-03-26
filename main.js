// Funkce pro schování/zobrazení menu (funguje jako předtím)
function menu() {
    const nav = document.getElementById("navnavnav");
    const logo = document.getElementById("logo-container");
    const menuIcon = document.getElementById("menuIcon");

    if (nav.style.display !== "flex") {
        nav.style.display = "flex";
        nav.style.lineHeight = "50px";
        logo.style.top = "250px"; // Posunutí loga, když je menu otevřené
    } else {
        nav.style.display = "none";
        menuIcon.style.top = "10px";
        logo.style.top = "5px"; // Vrácení loga do výchozí pozice po zavření menu
    }
}

// Automatická kontrola velikosti okna
function checkWindowSize() {
    const nav = document.getElementById("navnavnav");
    const logo = document.getElementById("logo-container");

    if (window.innerWidth >= 1090) {
        // Pokud je okno větší než 1090px -> skryj menu a posuň logo
        nav.style.display = "none";
        logo.style.top = "10px";
    } else {
        // Pokud je okno menší než 1090px a menu je otevřené, ponech logo nahoře
        if (nav.style.display === "flex") {
            logo.style.top = "250px";
        } else {
            logo.style.top = "5px"; // Standardní pozice loga
        }
    }
}

// Připojení event listeneru pro změnu velikosti okna
window.addEventListener("resize", checkWindowSize);

// Zavolání funkce při načtení stránky pro správné nastavení
checkWindowSize();
