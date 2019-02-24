import {AnimLettre} from './AnimLettre.js' //


/* l'élement de la page qui contiendra les éléments créés dynamiquement */
let elmTitre = document.querySelector('.titre')

// debutQuestionnaire()

function animationLettre()
{
    /* Une fois que l'animation des mots est terminé la fonction animLettre s'exécutera */ 
	console.log('debut animation lettre')
	const lesLettres = 'Animation de lettre'
 	let  monAnimLettre = new AnimLettre(lesLettres, elmTitre, finAnim)	
}


function finAnim()
{
	console.log('animation terminée')
}










	



