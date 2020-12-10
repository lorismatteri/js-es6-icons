$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
  const icone = [
    {
      name: 'Cat',
      prefix: 'fas',
      type: 'fa-cat',
      family: 'animals',
    },
    {
      name: 'Dog',
      prefix: 'fas',
      type: 'fa-dog',
      family: 'animals',
    },
    {
      name: 'Crow',
      prefix: 'fas',
      type: 'fa-crow',
      family: 'animals',
    },
    {
      name: 'Dove',
      prefix: 'fas',
      type: 'fa-dove',
      family: 'animals',
    },
    {
      name: 'Dragon',
      prefix: 'fas',
      type: 'fa-dragon',
      family: 'animals',
    },
    {
      name: 'Horse',
      prefix: 'fas',
      type: 'fa-horse',
      family: 'animals',
    },
    {
      name: 'Hippo',
      prefix: 'fas',
      type: 'fa-hippo',
      family: 'animals',
    },
    {
      name: 'Fish',
      prefix: 'fas',
      type: 'fa-fish',
      family: 'animals',
    },
    {
      name: 'Carrot',
      prefix: 'fas',
      type: 'fa-carrot',
      family: 'vegetables',
    },
    {
      name: 'Apple-Alt',
      prefix: 'fas',
      type: 'fa-apple-alt',
      family: 'vegetables',
    },
    {
      name: 'lemon',
      prefix: 'fas',
      type: 'fa-lemon',
      family: 'vegetables',
    },
    {
      name: 'Pepper-Hot',
      prefix: 'fas',
      type: 'fa-pepper-hot',
      family: 'vegetables',
    },
    {
      name: 'User-Astronaut',
      prefix: 'fas',
      type: 'fa-user-astronaut',
      family: 'user',
    },
    {
      name: 'User-Graduate',
      prefix: 'fas',
      type: 'fa-user-graduate',
      family: 'user',
    },
    {
      name: 'User-Ninja',
      prefix: 'fas',
      type: 'fa-user-ninja',
      family: 'user',
    },
    {
      name: 'User-Secret',
      prefix: 'fas',
      type: 'fa-user-secret',
      family: 'user',
    }
  ];
  console.log(icone);
  // Semezioniamo il container icons
  const container = $('.icons');
  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  const print = () => {
    icone.forEach(element => {
      $(container).append(`
      <div>
      <i class="${element.prefix} ${element.type}"></i>
      <div class="title">${element.name}</div>
      </div>
      `);
    });
  }

  print();

});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup

