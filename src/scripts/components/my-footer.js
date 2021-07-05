class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#/favorites">Favorites</a></li>
            <li><a href="https://www.github.com/arvnabil" target="_blank">About Us</a></li>
        </ul>
        <p class="copyright">Copyright © 2021 - Resto Laris</p>
    </footer>
        `;
  }
}

customElements.define('my-footer', Footer);
