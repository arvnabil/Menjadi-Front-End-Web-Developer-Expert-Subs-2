class AboutResto extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <article class="headline">
            <figure class="headline_figure">
                <img src="/images/heros/hero-image_1.jpg" alt="Resto Laris Figure">
                <figcaption>Resto Laris Juni 2021, 9 Food</figcaption>
            </figure>
            <div class="headline_content">
                <h1 class="headline_title">Tentang Resto Laris</h1>
                <p class="headline_description">Restoran tertua di Jakarta yang masih berdiri. 
                    Favorit warga setempat selama lebih dari 83 tahun. Menghidangkan Ayam sambel mantan
                    dan Seblak kami yang terkenal. Hidangan Ayam, dan seblak dengan 
                    cita rasa khas masakan rumahan yang lezat. Pilihan makanan dan minuman  
                    yang lengkap. Menu lengkap ditawarkan sepanjang hari dan larut malam. Bar lengkap 
                    dengan hiburan di akhir pekan. Sering dikunjungi oleh bintang dan selebritas dari 
                    Nabil, serta menjadi tempat pesta penutupan pertunjukan. Berlokasi strategis 
                    di Condet raya, tepat di seberang Pom bensin.</p>
                    <br>
                <a href="#restaurants" class="btn">Lihat Lebih</a>
            </div>
        </article>
    `;
  }
}

customElements.define('about-resto', AboutResto);
