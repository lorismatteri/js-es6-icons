$(document).ready(function () {
  // Qui le icone che abbiamo definito nella milestone 1
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

  // definiamo dei colori per le icone (blue, orange, purple)
  const blue = '#0000ff';
  const orange = '#ff6600';
  const purple = '#660066';

  //aggiungiamo dei colori usando una funzione
  const newIcone = icone.map(element => {
    const name = element.name;
    const prefix = element.prefix;
    const type = element.type;
    const family = element.family;
    
    if(element.family == 'animals') {
      return {
        name,
        prefix,
        type,
        family,
        color: blue,
      }
    } else if(element.family == 'vegetables') {
      return {
        name,
        prefix,
        type,
        family,
        color: orange,
      }
    } else if(element.family == 'user') {
      return {
        name,
        prefix,
        type,
        family,
        color: purple,
      }
    }
  })
  console.log(newIcone);
  
  //inseriamo le icone colorate nel container
  const container = $('.icons');
  const print = () => {
    newIcone.forEach(element => {
      $(container).append(`
      <div>
      <i class="${element.prefix} ${element.type}" style="color: ${element.color}"></i>
      <div class="title">${element.name}</div>
      </div>
      `);
  });
  }
  print();
});

/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1


//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 


//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.
