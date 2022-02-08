"use strict"; //позволяет избавиться от неточностей

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
// personalMovieDB.movies = prompt("Один из последних просмотренных Фильмов?");

let personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

  const a = prompt("Просмотренный фильм", ""),
        b = prompt("Рейтинг фильма", ""),
        c = prompt("Просмотренный фильм", ""),
        d = prompt("Рейтинг фильма", "");


    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

console.log(personalMovieDB);