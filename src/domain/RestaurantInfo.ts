import { Restaurant } from "../types/Restaurant.js";

export default class RestaurantInfo {
  constructor(private storeInfo: Restaurant) {}

  getRestaurantInfo(): Restaurant {
    return this.storeInfo;
  }
}
