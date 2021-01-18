(function () {
  'use strict';
  let numberOfFilms;

  function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilms == '' ||
    numberOfFilms == null ||
    isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
  }

  start();
  const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
  };


  function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из просмотренных фильмов', ''),
          b = prompt('На сколько оцените его?', '');

      if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
        personalMovieDB[a] = b;
        console.log('done');
      } else {
        i--;
        console.log('error');
      }
    }
  }

  rememberMyFilms();

  function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
      alert('Вы класссический зритель');
    } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман');
    } else {
      console.log('error');
    }
  }

  detectPersonalLevel();

  function showMyDB(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  }

  showMyDB(personalMovieDB.privat);

  function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
      personalMovieDB.genres
          .push(prompt(`Ваш любимый жанр под номером ${i}`, ''));
    }
  }

  writeYourGenres();

})();
