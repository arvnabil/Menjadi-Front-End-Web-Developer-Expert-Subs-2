import FavoriteRestaurantIdb from '../../data/favorite-restoran-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
          <br>
          <div class="content">
            <h2 class="content__heading">Favorite Restoran Terlaris</h2>
            <div id="restaurants" class="restaurants">
            </div>
          </div>
    `;
  },

  async afterRender() {
    const listRestaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    listRestaurant.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorites;
