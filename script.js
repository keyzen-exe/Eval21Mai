AOS.init();


//anim deffilement GSAP
gsap.to("#deffilement", {
  xPercent: -50,
  duration: 60,
  repeat: -1,
  ease: "linear"
});



//recupere les donnée dans le json
fetch("data.json")
  .then((response) => response.json())
  .then(data => {


    afficheProduits(data.produits);
    afficheAvis(data.temoignages);
    afficheServices(data.services);
    afficheTitle(data.nomCommercial)
    afficheBandeDefilante(data.avantagesClients)
    afficheCTAphraseAccroche(data.phraseAccroche, data.texteAppelAction)
  });





/*--------------------------------------------------
Section des produits
---------------------------------------------------*/

// role afficher dans l'html et stock les donnee dans des variable
// paramettre tableauDeProduits un tableau de produits
// return pas affiche
function afficheProduits(tableauDeProduits) {
  tableauDeProduits.forEach(info => {

    let nom = info.nom
    let description = info.description
    let imageurl = info.imageurl
    let prix = info.prix

    // role afficher dans la section qui a l'id "sectionProduits"
    document.getElementById("sectionProduits").innerHTML +=
      `
   <div class="large-3 flex gap10 cardProduit">
    <p class="PrixProduit">
        ${prix}
    </p>
    <img class="large-12 imgArticle" src="${imageurl}" alt="photo d'une sneakers">
    <div class="large-12">
        <div class="contentArticle">
            <h2>
                ${nom}
            </h2>
        </div>
        <div>
            <p>
                ${description}
            </p>
        </div>
        <a href="">
            <p class="btnAcheter zoom-hover:hover zoom-hover">Acheter</p>
        </a>
    </div>
    </div>
`

  });

}


/*--------------------------------------------------
Section des avis
---------------------------------------------------*/


// role afficher dans l'html et stock les donnee dans des variable
// paramettre tableauDeProduits un tableau de produits
// return pas affiche
function afficheAvis(tableauDeProduits) {
  tableauDeProduits.forEach(info => {

    let prenom = info.prenom
    let typeExperience = info.typeExperience
    let note = info.note
    let commentaire = info.commentaire
    let imageurl = info.imageurl

    // role afficher dans la section qui a l'id "sectionAvis"
    document.getElementById("sectionAvis").innerHTML +=
      `
  <div class="large-4 flex gap10 avisClient" data-aos="zoom-in" data-aos-duration="1000">

    <div>
        <img class="imgAvis" src="${imageurl}" alt="photo d'une personne">
    </div>

    <div>
        <h3>
            ${prenom}
        </h3>
        <h4>
            Experience
        </h4>
        <h4>
            ${typeExperience}
        </h4>
        <p>
            ${note}/5
        </p>
    </div>
    <div>
        <h3>
            Avis
        </h3>
        <p>
            “${commentaire}”
        </p>
    </div>
</div>
`

  });

}


/*--------------------------------------------------
Section des Services
---------------------------------------------------*/


// role afficher dans l'html et stock les donnee dans des variable
// paramettre tableauDeProduits un tableau de produits
// return pas affiche
function afficheServices(tableauDeProduits) {
  tableauDeProduits.forEach(info => {

    let nom = info.nom
    let description = info.description

    // role afficher dans la section qui a l'id "sectionServices"
    document.getElementById("sectionServices").innerHTML +=
      `
<div data-aos="fade-up" data-aos-duration="1000">
    <h3>
        ${nom}
    </h3>
    <p>
        ${description}
    </p>
</div>

`

  });

}


/*--------------------------------------------------
Title navigateur 
---------------------------------------------------*/


// role afficher dans l'html et stock les info dans des variable
// paramettre nom
// return pas affiche
function afficheTitle(nom) {

  // role afficher le titre du navigateur
  document.title = nom


};



/*--------------------------------------------------
Bande defilante
---------------------------------------------------*/


// role afficher dans l'html et stock les donnee dans des variable
// paramettre info
// return pas affiche une Bande defilante
function afficheBandeDefilante(info) {
  info.forEach(produits => {

    let avantagesClients = info.avantagesClients;
    let avantagesClients1 = info[0];
    let avantagesClients2 = info[1];
    let avantagesClients3 = info[2];


    // role afficher dans la section qui a l'id "deffilement"
    document.getElementById("deffilement").innerHTML += `

      <p>${avantagesClients1}</p>
      <p>${avantagesClients2}</p>
      <p>${avantagesClients3}</p>

      <p>${avantagesClients1}</p>
      <p>${avantagesClients2}</p>
      <p>${avantagesClients3}</p>
          
          `
  });

}




/*--------------------------------------------------
Section des Hero
---------------------------------------------------*/


// role afficher dans l'html et stock les donnee dans des variable
// paramettre (phraseAccroche, texteAppelAction)
// return pas affiche dans le hero
function afficheCTAphraseAccroche(phraseAccroche, texteAppelAction) {


  //// role afficher dans la section qui a l'id "hero"
  document.getElementById("sectionHero").innerHTML += `
  
 <h1>${phraseAccroche}</h1>
<div class="btn-primary zoom-hover:hover zoom-hover">
    <a href="">
        <p>${texteAppelAction}</p>
    </a>
</div>
                
  `
};



// role pouvoir utiliser la barre de recherche 
// paramettre "recherche"
// rend invisible les card n'ont pas les caractere rechercher
const input = document.getElementById("recherche");

input.addEventListener("input", () => {
  const filtre = input.value.toLowerCase();
  const cards = document.querySelectorAll("#sectionProduits .cardProduit");

  cards.forEach(card => {
    const nom = card.textContent.toLowerCase();
    const visible = nom.includes(filtre);
    card.style.display = visible ? "block" : "none";
  });
});










