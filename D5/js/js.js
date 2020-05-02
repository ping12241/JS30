var panels = document.querySelectorAll(".box");

function panelOpen() {
    this.classList.toggle("open");
}

function toggleActive(e) {
    if (e.propertyName.includes("flex")){
        this.classList.toggle("open-active");
    }
}

panels.forEach(panel => panel.addEventListener("click", panelOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));


