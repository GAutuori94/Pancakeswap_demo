# Pancakeswap_demo

//1) Definizione variabili ($var) dei seguenti elementi: 
- colori (esadecimali #); 
- font-grandezze font (pixel);
- spessore bordi (rem).

2) Creazione segnaposti/mixin degli elementi:
- Giorgio: Design system layout, brand colors, buttons;
- Pietro: Animazioni, media queries;
- Ale: Cards;
- Emanuele: Typography, icone;
- Gianluigi: Loghi, immagini.

3) Inserimento elementi nel design system


Prossimi step da definire...//

 <------------------!!!!!!!!!!!!

aggiungere al ds: need help bunny, orders card (trade - limit), limit card (trade - limit), your liquidity card (trade - liquidity)


HOW TO:
  - clonare repo co git clone
  - creare branch della pagina assegnata all'interno di develop
  - creare sub-branch delle singole feat presenti all'interno della pagina
  - all'interno dei sub-branch creare i file dei vari elementi


Step 1)
- Aggiungere sub-branch: nel branch develop:
  
  --GLOBAL ELEMENTS
   - phising banner
   - nav 
   - footer

  - HOME
    a) card
    b) animation
    c) banner
    d) buttons
    
  - TRADE
    a) Swap
      - graph
      - trade swap card
      - help button (rimanda alla documentazione pancakeswap)
    b) Limit
      - graph
      - limit card
      - orders card
      - help button
    c) Liquidity
      - your liquidity card
      - add lioquidity card
    d) Perpetual
      - referral link (possibilmente screenshot)
      
  - EARN
    a) Farms
      - componente lista cryptocurrency (react)
    b) Pools
      - componente lista stakes
      
  - WIN
    a)Trading competition
      a) Latest
        - immagine iniziale challenge-related
        - card svolgimento challenge
        - card connesione wallet - stato challenge (con pulsante connect wallet)
        - card your score (con pulsante connect wallet)
        - componenti top traders e prizes by team (componenti react idealmente)
        - componente podio+loghi team
        - rules (card laterali, tabella details)
      b) Finished
        - banner challenge completate (rimandano a pagina evento uguale a quello latest)  
      
     b) Prediction
      - card andamento predictions (organizzate in slideshow)
      - valuta
      - timer
      - pulsante help (che rimanda a docs)
      - pulsante leaderboard (accessibile solo da questo pulsante)
     
     c) Lottery
      - banner con premio
      - pulsante buy tickets
      - timer acquisto tickets
      - card summary (visibile: info su estrazione in corso; details: premi in palio)
      - card estrazioni completate (generali, personali) con numeri vincenti
      - sezione how to play - rules
      - link reindirizzamento docs
      
  - NFT
    a) overview marketplace (newest collections - hot collections - mewst arrivals - faq - link docs)
    b) collections (product page con le collezioni di nft)
    c) activity
      - lista nft acquistate (item - event - price - from - to - date - link a dettagli transazione)
      - filtro (collection - listed - delisted -modified - sold)
      - refresh button
      
  - INFO-MENU(...)
      a) info
        - graphs
        - tabelle top pools ecc
        - lista transactions
        
      b) IFO
        a) Latest
          - card coming soon
          - card ifo cake
          - elemento Hot to take part... procedura
          - card details
          - link docs
        b) Finished
          - banner ifo concluse con vista dropdown (card public sale private sale)
          
       c) Voting
         - make a proposal button (che rimanda a form per proposta)
         - proposals list (core - community - all)
        
       d) Leaderboards
        - cards teams (con pulsante see more che rimanda a pagina del team: logo, counter membri attivi; sezione team achievements e team points cooming soon)
        
       e) link blog e docs
       
-------------------------------------------------------------------------------------------------------------------------------------------------------

WORKFLOW:

1) Definire file scss con tutte le variabili utili:
  - brand colors
  - gradients
  - typography
  - box-shadows
 
 2) Scrivere codice singoli elementi:
   - definire vari mixin, segnaposto, ecc.
 
 3) Inserire gli elementi nel design system
 -----------------------------------------1a deadline/milestone------------------------------------------------------------------------------------------
