/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function concatenaStringhe(str1, str2) {
    // Seleziona i primi 2 caratteri della prima stringa
    const primiDue = str1.substring(0, 2);
    // Seleziona gli ultimi 3 caratteri della seconda stringa
    const ultimiTre = str2.substring(str2.length - 3);
    // Concatena le due sottostringhe e convertili in maiuscolo
    const risultato = (primiDue + ultimiTre).toUpperCase();
    // Mostra il risultato nella console
    console.log(risultato);
  }
  

  concatenaStringhe("Ciao", "Mondo");
  
  
  /* ESERCIZIO 2 (for)
    Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
  */
 const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 101));
  }
  
  console.log(array);
  
  /* ESERCIZIO 3 (filter)
    Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
  */
  const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const pari = array2.filter((num) => num % 2 === 0);
  
  console.log(pari);
  /* ESERCIZIO 4 (forEach)
    Scrivi una funzione per sommare i numeri contenuti in un array
  */
  
  const array3 = [1, 2, 3, 4, 5];
  
  let somma = 0;
  
  array3.forEach((num) => {
    somma += num;
  });
  
  console.log(somma);
  
  /* ESERCIZIO 5 (reduce)
    Scrivi una funzione per sommare i numeri contenuti in un array
  */
  
    function sommaNumeri(array) {
        return array.reduce((accumulatore, valoreCorrente) => {
            return accumulatore + valoreCorrente;
        }, 0);
    }
    

    const numeri = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];
    const risultato = sommaNumeri(numeri);
    console.log(risultato); 
    
   
    
    
  /* ESERCIZIO 6 (map)
    Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
  */
    function incrementArray(arr, n) {
        return arr.map(value => value + n);
    }
    
    
    const originalArray = [1, 2, 3, 4, 5];
    const incrementValue = 2;
    const newArray = incrementArray(originalArray, incrementValue);
    
    console.log(newArray);
    
  /* ESERCIZIO 7 (map)
    Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
    es.: ["EPICODE", "is", "great"] => [7, 2, 5]
  */
  function calcolaLunghezze(array) {
    return array.map(str => str.length);
  }
  
  const stringhe = ["EPICODE", "is", "great"];
  const lunghezze = calcolaLunghezze(stringhe);
  
  console.log(lunghezze);
  /* ESERCIZIO 8 (forEach o for)
    Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
  */
    function creaArrayDispari() {
        let arrayDispari = [];
        for (let i = 1; i < 100; i += 2) {
            arrayDispari.push(i);
        }
        return arrayDispari;
    }
    
    const dispariArray = creaArrayDispari();
    console.log(dispariArray);
    
  /* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
  const movies = [
    {
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Year: '2001',
      imdbID: 'tt0120737',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Return of the King',
      Year: '2003',
      imdbID: 'tt0167260',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Two Towers',
      Year: '2002',
      imdbID: 'tt0167261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of War',
      Year: '2005',
      imdbID: 'tt0399295',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'Lords of Dogtown',
      Year: '2005',
      imdbID: 'tt0355702',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings',
      Year: '1978',
      imdbID: 'tt0077869',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1990',
      imdbID: 'tt0100054',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
      Title: 'The Lords of Salem',
      Year: '2012',
      imdbID: 'tt1731697',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
      Year: '1984',
      imdbID: 'tt0087365',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1963',
      imdbID: 'tt0057261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
      Title: 'The Avengers',
      Year: '2012',
      imdbID: 'tt0848228',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Infinity War',
      Year: '2018',
      imdbID: 'tt4154756',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Age of Ultron',
      Year: '2015',
      imdbID: 'tt2395427',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Endgame',
      Year: '2019',
      imdbID: 'tt4154796',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
  ]
  /* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/



function findOldestMovie(movies1) {
    let oldestMovie = null;

    movies.forEach(movie => {
        if (oldestMovie === null || parseInt(movie.Year) < parseInt(oldestMovie.Year)) {
            oldestMovie = movie;
        }
    });

    return oldestMovie;
}

// Chiamata alla funzione per trovare il film più vecchio
const oldest = findOldestMovie(movies);
console.log(`Il film più vecchio è: ${oldest.Title}, Anno: ${oldest.Year}`);


/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function contaFilm(films) {

    if (!Array.isArray(films)) {
        throw new Error("L'input deve essere un array.");
    }
    

    return films.length;
}

const listaFilm = [
    { titolo: "Film 1", anno: 2021 },
    { titolo: "Film 2", anno: 2022 },
    { titolo: "Film 3", anno: 2023 }
];

const numeroDiFilm = contaFilm(listaFilm);
console.log("Numero di film:", numeroDiFilm);

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
const filmArray = [
    { titolo: "Inception", anno: 2010, regista: "Christopher Nolan" },
    { titolo: "Interstellar", anno: 2014, regista: "Christopher Nolan" },
    { titolo: "The Matrix", anno: 1999, regista: "Lana Wachowski, Lilly Wachowski" },
  ];
  
function estraiTitoli(films) {
    return films.map(film => film.titolo);
  }
  
  const titoliFilm = estraiTitoli(filmArray);
console.log(titoliFilm);
/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/




function filtraFilmMillennioCorrente(filmArray) {
    return filmArray.filter(film => film.anno >= 2001);
}


const film = [
    { titolo: "Film A", anno: 1999 },
    { titolo: "Film B", anno: 2001 },
    { titolo: "Film C", anno: 2005 },
    { titolo: "Film D", anno: 2010 },
    { titolo: "Film E", anno: 1995 },
];

const filmMillennioCorrente = filtraFilmMillennioCorrente(film);
console.log(filmMillennioCorrente);


/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
const film1 = [
    { titolo: "Film A", anno: 2000 },
    { titolo: "Film B", anno: 2005 },
    { titolo: "Film C", anno: 2010 },
    { titolo: "Film D", anno: 2015 },
];

function sommaAnni(filmArray) {
    return filmArray.reduce((somma, film) => {
        return somma + film.anno; 
    }, 0); 
}

const totaleAnni = sommaAnni(film);
console.log(totaleAnni); 

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
const films = [
    { title: "Inception", imdbID: "tt1375666", year: 2010 },
    { title: "The Matrix", imdbID: "tt0133093", year: 1999 },
    { title: "Interstellar", imdbID: "tt0816692", year: 2014 },
    
];

function findFilmByImdbID(imdbID) {
    return films.find(film => film.imdbID === imdbID);
}

const imdbIDToFind = "tt1375666";
const foundFilm = findFilmByImdbID(imdbIDToFind);

if (foundFilm) {
    console.log("Film trovato:", foundFilm);
} else {
    console.log("Film non trovato.");
}

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
function trovaIndiceFilmPerAnno(films, anno) {
    return films.findIndex(film => film.ano === anno);
}


const films3 = [
    { titolo: "Film A", ano: 2020 },
    { titolo: "Film B", ano: 2019 },
    { titolo: "Film C", ano: 2020 },
    { titolo: "Film D", ano: 2021 },
];

const indice = trovaIndiceFilmPerAnno(films, 2020);
console.log(indice); 
