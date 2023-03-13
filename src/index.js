import '../style.css';
import '../templates/add-button.png';
import { geid, qs } from './utils/domHelpers';

import Component from './Component.js';
import Header from './components/Header.js';
import RestaurantList from './components/RestaurantList.js';
import AddModal from './components/AddModal.js';
import SelectorTap from './components/SelectorTap.js';
import FavoriteTap from './components/FavoriteTap.js';
import FavoriteList from './components/FavoriteList.js';
import DetailModal from './components/DetailModal.js';

class App extends Component {
  constructor() {
    super(geid('app'));

    new Header(qs('.gnb'));
    new FavoriteTap(qs('.restaurant-favorite-container'));
    new SelectorTap(qs('.restaurant-filter-container'));
    new RestaurantList(qs('.restaurant-list'));
    new FavoriteList(qs('.favorite-list'));
    new AddModal(qs('.modal'));
    new DetailModal(qs('.detail-modal'));
  }

  template() {
    return `
    <header class="gnb"></header>

    <section class="restaurant-favorite-container"></section>

    <section class="restaurant-filter-container"></section>

    <section class="restaurant-list-container">
      <ul class="restaurant-list"></ul>
    </section>

    <section class="favorite-list-container list-none">
      <ul class="favorite-list"></ul>
    </section>

    <div class="modal"></div>

    <div class="detail-modal"></div>
    `;
  }
}

new App();
