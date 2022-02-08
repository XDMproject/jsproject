"use strict"; //позволяет избавиться от неточноcти
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    if (numberOfFilms < 10) {
        alert("Просмотрено довольно мало фильмов");
    }
    else if (numberOfFilms >= 10 && numberOfFilms <=30)
    {
        alert("Вы классический зритель");  
    }
    else if (numberOfFilms > 30){
        alert("Вы киноман");
    }
    else {
        alert("Произошла ошибка");
    }

let personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Просмотренный фильм", ""),
//           b = prompt("Рейтинг фильма", "");

//           if (a == null || b == null) {
//             i--;
//             continue;
//         }

//     if (a.length == 0 || b.length == 0 || a.length > 50 || b.length > 50) {
//         i--;
//         continue;
//     }
// } // Первый способ

// let i = 2;
// while (i > 0) {
//     const a = prompt("Просмотренный фильм", ""),
//           b = prompt("Рейтинг фильма", "");

//           if (a == null || b == null) {
//             i++;
//             continue;
//         }

//     if (a.length == 0 || b.length == 0 || a.length > 50 || b.length > 50) {
//         i++;
//         continue;
//     }
//     personalMovieDB.movies[a] = b;
//     i--;
// }; // Второй способ

let i = 0;
do {
    const a = prompt("Просмотренный фильм", ""),
          b = prompt("Рейтинг фильма", "");
    
              if (a == null || b == null) {
                i--;
                continue;
            }
    
        if (a.length == 0 || b.length == 0 || a.length > 50 || b.length > 50) {
            i--;
            continue;
        }
        personalMovieDB.movies[a] = b;
        i++;
}
while (i < 2); // третий способ




console.log(personalMovieDB); 

//test