import restaurantManager from './domain/RestaurantManager';
import favoriteRestaurant from './domain/FavoriteRestaurant';
import detailRestaurant from './domain/DetailRestaurant';

export default class Component {
  $target;
  props;

  restaurantManager;
  favoriteRestaurant;
  detailRestaurant;

  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    this.restaurantManager = restaurantManager;
    this.favoriteRestaurant = favoriteRestaurant;
    this.detailRestaurant = detailRestaurant;

    this.render({ ...props });
  }

  addEvent(eventType, callback, target = this.$target) {
    target.addEventListener(eventType, callback);

    return this;
  }

  template(restaurantData) {
    return restaurantData;
  }

  render(restaurantData) {
    if (Object.keys(restaurantData).length === 0) this.$target.innerHTML = this.template();
    else this.$target.innerHTML = this.template(restaurantData);
  }
}
