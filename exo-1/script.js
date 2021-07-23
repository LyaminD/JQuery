//Bibliothèque qui s'implifie l'écriture du code JS
// on met la balise script pour l'import de la bibliothèque jquerry avant tout code JS sinon le code fonctionne pas
console.log('exercice 1');

$(document).ready(function(){
	console.log('Je peux maintenant écrire du code jQuery');
});

// la ligne est indispensable car si on commente le script Jquerry , le code si dessus ne fonctionne plus , le $ est une écriture Jquerry
// le symbole est le $