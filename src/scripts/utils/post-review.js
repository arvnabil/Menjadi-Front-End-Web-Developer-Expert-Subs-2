import RestaurantSource from '../data/restaurant-source';

const PostReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  RestaurantSource.postRestaurant(dataInput);

  const reviewContainer = document.querySelector('#post-review');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
    <div class="customer-review">
    <div class="customer-review_header">
        <div class="customer-review_header_date">
            <p><span class="customer-review_header_date_time">${date}</span></p>
        </div>
        <div class="title">${name}</div>
    </div>
    <div class="customer-review_content">
    <p>${review}</p>
    </div>
    </div>
    `;
  reviewContainer.innerHTML += newReview;
};

export default PostReview;
