// Fonction pour remplacer le css
function myfonction(toto){
  document.getElementById('stylepage').setAttribute('href',toto);
  toto = toto.slice(9,16);
  audio = new Audio('song/'+toto+'.mp3');
  audio.duration = 2;
  audio.play();
}

//Ajoute le titre créé comme premier enfant de l'élément body
let b = document.body;
let titre = document.createElement('h1');

titre.textContent = 'TANGRAM'

b.prepend(titre);
