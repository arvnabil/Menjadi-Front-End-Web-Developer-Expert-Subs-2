import CONFIG from '../../globals/config';

function limitStringLength(text, maxLength) {
  if (text.length > maxLength - 3) {
    return `${text.substring(0, maxLength).trimEnd()}...`;
  }
  return text;
}

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant_title">${restaurant.name}</h2>
  <img class="restaurant_poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" />
  <div class="restaurant_info">
  <h3>Informasi Restoran</h3>
    <h4>Tempat</h4>
    <p>${restaurant.city}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kategori</h4>
    <p>${restaurant.categories.map((category) => `<span class="category">${category.name}</span>`).join(' ')}</p>
    <h4>Rating</h4>
    <p>⭐️${restaurant.rating}</p>
  </div>
  <div class="menu grid-2">
  <div class="restaurant_overview">
    <h3>Tentang Restoran</h3>
    <p>${restaurant.description}</p>
  </div>
  <h3>Menu</h3> 
  <br/>
    <div class="menu-food">
    <h4>Makanan</h4>
    <ul>
        ${restaurant.menus.foods.map((food) => ` <li>${food.name}</li>`).join('')}
    </ul>
    </div>
    <div class="menu-drink">
    <h4>Minuman</h4>
    <ul>
        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    </ul>
  </div>
  <h3>Customer Review</h3>
  <br>
    ${restaurant.customerReviews.map((customerReviews) => `
      <div class="customer-review">
        <div class="customer-review_header">
          <div class="customer-review_header_date">
              <p><span class="customer-review_header_date_time">${customerReviews.date}</span></p>
          </div>
          <div class="title">${customerReviews.name}</div>
        </div>
        <div class="customer-review_content">
        <p>${customerReviews.review}</p>
        </div>
      </div>
    `).join('')}
    <div id="post-review"></div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item_header">
        <img class="restaurant-item_header_poster" alt="${restaurant.name}"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item_header_rating">
            <p>⭐️<span class="restaurant-item_header_rating_score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item_content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${limitStringLength(restaurant.description, 200)}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
