const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function() {
  return this.films.map(film => film.title);
}

Cinema.prototype.findFilmByTitle = function(title) {
  return this.films.filter(film => film.title === title)[0];
}

Cinema.prototype.filterFilmsByGenre = function(genre) {
  return this.films.filter(film => film.genre === genre);
}

// Cinema.prototype.findFilmsByYear = function(year) {
//   return this.films.filter(film => film.year === year);
// }

Cinema.prototype.doesHaveFilmsFromYear = function(year) {

  if (this.films.filter(film => film.year === year).length > 0) {
    return true;
  } else {
    return false;
  }

}

Cinema.prototype.checkIfAllFilmsAreLongerThan = function(length) {
  if (this.films.filter(film => film.length > length).length === films.length) {
    return true;
  } else {
    return false;
  }
}

Cinema.prototype.totalRunningTimeOfAllFilms = function() {
  return this.films.reduce((total, film) => {
    return total + film.length
  }, 0);
}

module.exports = Cinema;
