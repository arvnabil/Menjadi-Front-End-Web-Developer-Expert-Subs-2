class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1 class="hero_title">Resto Terbaik di Asia</h1>
    <p class="hero_tagline">Kalau sudah coba sambelnya, dijamin bayang-bayang mantan langsung hilang</p>
    <a href="#restaurants" class="btn">Yuk Lihat Daftar Restoran</a>
      `;
  }
}

customElements.define('hero-custom', Hero);
