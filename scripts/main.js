class Menu {
  constructor(idbody) {
    this.target = document.getElementById(idbody);
  }

  renderList() {
    this.target.innerHTML = "";
    list.getProducts.forEach((element) => {
      this.target.innerHTML += `
              <tr>
                  <td>${element.name}</td>
                  <td>${element.price}</td>
                  <td class="btn-delete" data-index="${index}">X</td>
              </tr>
              `;
    });
    this.listenEvent();
  }

  listenEvent() {
    document.addEventListener("click", ({ target }) => {
      if (target.classList.contains("btn-delete")) {
        this.renderList();
      }
    });
  }
}
