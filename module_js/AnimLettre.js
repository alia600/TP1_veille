export class AnimLettre {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {string} lesLettres - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(lesLettres, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre	
        this.lesLettres = lesLettres
        this.elmParent = elementParent
        this.AnimLettre(this.lesLettres)
        this.fonction = fonction
    }

    AnimLettre(lesLettres){
        console.log(`lesLettres = ${lesLettres}`)
        var elementMot = document.createElement('div');
        elementMot.classList.add('mot');
        this.elmParent.appendChild(elementMot);
        for(let element of this.lesLettres){
            var nouvelleLettre = document.createElement("div");
            nouvelleLettre.style.animationDelay = '0.5s';
            nouvelleLettre.innerHTML = element;
            elementMot.appendChild(nouvelleLettre);
        }
    }

} 





