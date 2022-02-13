let numberOfFims;

function start () {
   numberOfFims = prompt ('Сколько фильмов вы уже посмотрели');

   while (numberOfFims == '' || numberOfFims == null || isNaN(numberOfFims));
   numberOfFims = prompt ('Сколько фильмов вы уже посмотрели');
}

start();


let personalMovieDB = {
   count: numberOfFims,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function remberMyFilms () {
   for (let i = 0;  i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?'),
            b = prompt( 'На сколько оцените его?');
   
   
      if (a != null && b != null && a != '' && b !='' && a.lenth > 50) {
         personalMovieDB.movies[a] = b;
         console.log('done')
      } else {
         console.log('error');
      }   
   } 
}

remberMyFilms();

function detectPersonalLvl() {
   if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
   } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
   } else if (personalMovieDB.count > 30) {
      console.log ('Вы киноман');
   } else {
      console.log('Произошла ошибка');
   }
}

detectPersonalLvl ();

function showMyDB () {
   if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
   }
}

showMyDB();
    

console.log(personalMovieDB);


   

 



