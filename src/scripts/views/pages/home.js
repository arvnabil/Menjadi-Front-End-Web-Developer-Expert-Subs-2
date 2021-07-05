import RestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
          <div class="hero">
              <hero-custom class="hero_inner">
              </hero-custom>
          </div>
          <about-resto></about-resto>
          <div class="content">
            <h2 class="content__heading">Daftar Restoran Terlaris</h2>
            <div id="restaurants" class="restaurants">
    
            </div>
          </div>
        `;
  },
  async afterRender() {
    const listRestaurant = await RestaurantDbSource.listRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    listRestaurant.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
export default Home;
