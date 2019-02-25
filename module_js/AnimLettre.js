export class AnimLettre {
    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {String} chaine - contient les lettres
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(lesLettres, elmParent, fonction) {
        this.lesLettres = lesLettres
        this.elmParent = elmParent;
        this.fonction = fonction
        console.log('debut')
        this.animerLettre(this.lesLettres)
    }


animerLettre(lesLettres) {
     console.log('lettre = ' +lesLettres)
    let elmConteneur = this.creerElement(this.elmParent,
        'p',
        '',
        'mot')
    let i = 0 
    for (let uneLettre of lesLettres)
    {
        let elmlettre = this.creerElement(elmConteneur,
            'p',
            uneLettre,
            '')
        elmlettre.style.animationDelay = (i * 0.5) + "s";
        elmlettre.style.color = "#FFFFFF"
    }



}



    creerElement(elmParent, balise, contenu, classCSS) {
        console.log('creerElement' + balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
        }
        if (classCSS != ''){
            noeud.classList.add(classCSS)
        }
        elmParent.appendChild(noeud)
        return noeud
    }

}    





