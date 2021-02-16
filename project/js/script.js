/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами




/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
// let numbersOfFilms;
// let personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// };

// personalMovieDB.start = function (){
//   numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
//     while(numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)){
//         numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

//     }
// };

// personalMovieDB.start();

// personalMovieDB.count = +numbersOfFilms;

// personalMovieDB.rememberMyFilms = function(){
//     for (let i = 0; i < 2; i++) {
    
//         let film =  prompt('Один из последних просмотренных фильмов');
//         if (film == null){
//             i--;
//             continue;
//         } else 
//         if ((film.length == 0) || (film.length > 50)){
//             i --;
//             continue;
//         }
    
//         let rank = prompt('На сколько оцените его?');
//         if (rank == null){
//             i--;
//             continue;
//         } else
//         if ((rank.length == 0) || (rank.length > 50)){
//             i--;
//             continue;
//         }
//         personalMovieDB.movies[film] = rank;
//     }
// };

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectedPersonalLevel = function(){
//     if (personalMovieDB.count < 10){
//         alert("Просмотрено довольно мало фильмов");
//     } else
//     if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
//         alert("Вы классический зритель");
//     } else 
//     if (personalMovieDB.count > 30){
//         alert("Вы киноман!");
//     } else {
//         alert("Произошла ошибка");
//     }
// };

// personalMovieDB.detectedPersonalLevel();

// personalMovieDB.showMyDB = function(){
//     if (personalMovieDB.privat == false){
//         console.log(personalMovieDB);
//     }
// };

// personalMovieDB.showMyDB();

// personalMovieDB.writeYoursGenres = function(){
//     for (let i = 0; i < 3; i++) {
//         let genres =  prompt(`Ваш любимый жанр под номером ${i+1}`);
//         while(genres == '' || genres == null){
//             genres = prompt(`Ваш любимый жанр под номером ${i+1}`);
//             }
//         personalMovieDB.genres[i] = genres;
//     }
    
//     personalMovieDB.genres.forEach((element, index) => {
//         console.log(`Любимый жанр #${index + 1} - это ${element}`);
//     });
// };

// personalMovieDB.writeYoursGenres();

// personalMovieDB.toggleVisibleMyDB = function(){
// if(personalMovieDB.privat == true){
//         personalMovieDB.privat = false;
//     } else 
//     if(personalMovieDB.privat == false){
//         personalMovieDB.privat = true;
//     }
// };

// personalMovieDB.toggleVisibleMyDB();


// console.log(personalMovieDB);

// //  film =  prompt('Один из последних просмотренных фильмов');
// //  rank = prompt('На сколько оцените его?');
// // movies[film] = rank;
// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту 

document.addEventListener('DOMContentLoaded', () => {

    const   changePicture = document.getElementsByClassName('promo__bg'),
            newFilm = document.querySelector('button'),
            newInput = document.getElementsByClassName('adding__input'),
            changeList = document.querySelector('.promo__interactive-list'),
            adv = document.querySelectorAll('.promo__adv img'),
            chekBox = document.getElementsByTagName('input'),
            ganress = document.getElementsByClassName('promo__genre');

    let deleteFilm = document.getElementsByClassName('delete'),
        point = chekBox[2];

    // changeList.innerHTML = "";

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    deleteAdv(adv);

    const makeChanges = () =>{
        changePicture[0].style.backgroundImage = 'url("img/bg.jpg")';
        ganress[0].innerHTML = 'Драма';
    };
    makeChanges();

    const sortArr = (arr) => {
        arr.sort();
    };
    sortArr(movieDB.movies);

    let delList = function(){
        for (let index = 0; index < deleteFilm.length; index++) {
            deleteFilm[index].addEventListener('click', () => {
                movieDB.movies.splice(index, 1);
                getMovieList(movieDB.movies, changeList);
                
                });
        }
    }; 

    let getMovieList = function(films, parent){
        parent.innerHTML = "";
        sortArr(movieDB.movies);
        films.forEach((element, item) => {
            changeList.innerHTML +=  `<li class="promo__interactive-item"> ${item + 1}. ${element}
            <div class="delete"> </div>
            </li>`;
        });
        delList();
    }; 

    getMovieList(movieDB.movies, changeList);

    newFilm.addEventListener('click', () => {
        newFilm.type = "button";
        changeList.innerHTML = "";
        let addInput = newInput[0].value;
        if(addInput.length >= 21){
        addInput = addInput.slice(21) + '...';
        }else if(addInput.length == 0){
            getMovieList(movieDB.movies, changeList);
            return;
        }
        movieDB.movies.push(addInput);
        getMovieList(movieDB.movies, changeList);
    });

    chekBox[2].addEventListener('click', () => {
        if(point.checked == true){
            console.log("Добавляем любимый фильм");
        } else{
            return;
        }
    });
});



