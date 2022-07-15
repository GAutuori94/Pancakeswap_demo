//Semplicemente con un querySelector prendo l'id dentro a input a cui anche il label è agganciato
//poi dopo aver salavto la selezione in una variabile le aggancio un addEventListener che come evento prende change
//Leggendo ho notato che change molto spesso è meglio perchè contempla anche altre forme di interazione user side
//rispetto al click. Come event handler si usa una callback interna che recupera attraverso l'API DOM il body
//Con classList andiamo a manipolare un intero set di attributi di classe.
//Con toggle andiamo a rimuovere un elemento se è presente o ad aggiungerlo se non lo è, quindi in questo caso con 'dark'
//possiamo manipolare il dom attivando la classe dark al click.

let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('change', ()=> {
  document.body.classList.toggle('dark');
})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------//