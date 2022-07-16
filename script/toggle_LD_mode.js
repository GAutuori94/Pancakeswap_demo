/* Questo script selseziona il bottone toggle costruito appositamente #darktoggle e gli si aggancia un addEventListener
   che accetta due parametri: 1 'change' che si occupa di rilevare qualsiasi tipo di evento della UI che comporti 
   una qualsiasi interazione, 2 una callback senza parametri dove => si seleziona l'id theme attraverso il DOM; questo id
   si riferisce al link in head dove viene caricato lo stylesheet, quindi con un costrutto if else si fa un confronto 
   prendendo l'attributo di href e il nome dello stylesheet, se questo è uguale allora si setterà l'attributo mettendo 
   come parametri 'href' e il nome dello stylesheet con cui vuoi sostituire quello precedente; nell' else invece si 
   dovrà settare sempre 'href' con il nome dello stylesheet iniziale causando un fallback di default.
*/ 
let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('change', () => {

    let theme = document.getElementById('theme');

    if (theme.getAttribute('href') == 'lightTheme.css') {
        theme.setAttribute('href', 'darkTheme.css');
    } else {
        theme.setAttribute('href', 'lightTheme.css');
    }
})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------//