class Scripts {
  constructor() {
    this.listeners();
  }

  listeners() {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-accessible"))
        this.handleAccessibilityButton();
    });
    document.addEventListener('keypress', (e) => {
      if(e.target.classList.contains('btn-accessible'))
        this.handleAccessibilityButton();
    })
  }

  handleAccessibilityButton() {
    const paragraphs = document.getElementsByTagName("p");
    const links = document.getElementsByTagName("a");
    this.changeElementsColor(paragraphs);
    this.changeElementsColor(links);
  }
  changeElementsColor(el) {
    for (let e of el) {
      e.style.color = "black";
      e.style.fontWeight = "600";
    }
  }
}

const scripts = new Scripts();
