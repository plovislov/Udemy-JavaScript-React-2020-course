document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const adv = document.querySelector('.promo__adv'),
      genre = document.querySelector('.promo__genre'),
      background = document.querySelector('.promo__bg'),
      films = document.querySelector('.promo__interactive-list'),
      button = document.querySelector('button'),
      input = document.querySelector('.adding__input');

  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
    ],
    renderFilms() {
      this.movies = this.movies.map (item => item = this.cropName(item));

      films.innerHTML = '';
      const moviesSorted = movieDB.movies.sort();

      moviesSorted.forEach((item, i) => {
        films.insertAdjacentHTML('beforeend',
            `<li class="promo__interactive-item">${i + 1}: ${item}
                            <div class="delete"></div>
                        </li>`);
      });
      setEventListenersForDeleteButtons();
    },
    cropName(name) {
      if (name.length > 21) {
        return `${name.slice(0, 21)}...`;
      } else {
        return name;
      }
    }
  };

  adv.remove();
  genre.textContent = 'Драма';
  background.style.cssText =
      'background-image: url("img/bg.jpg")';

  function setEventListenersForDeleteButtons() {
    let deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach((item, i) => {
      item.addEventListener('click', () => {
        item.parentElement.remove();
        movieDB.movies.splice(i, 1);
        movieDB.renderFilms();
      });
    });
  }

  movieDB.renderFilms();

  button.addEventListener('click', (e) => {
    e.preventDefault();
    movieDB.movies.push(input.value);
    movieDB.renderFilms();
  });

});

