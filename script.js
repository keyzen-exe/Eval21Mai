AOS.init();

gsap.to("#deffilement", {
  xPercent: -50,
  duration: 40,
  repeat: -1,
  ease: "linear"
});




fetch("data.json")
  .then((response) => response.json())
  .then(data => {

    console.log(data.produits);
    afficheProduits(data.produits);
    afficheAvis(data.temoignages);
    afficheServices(data.services);
    afficheTitle(data.nomCommercial)
    afficheBandeDefilante(data.avantagesClients)
    afficheCTAphraseAccroche(data.phraseAccroche, data.texteAppelAction)
  });


// SECTION PRODUITS
// role afficher dans l'html et stock les donnee dans des variable
// paramettre tableauDeProduits un tableau de produits
// return pas affiche
function afficheProduits(tableauDeProduits) {
  tableauDeProduits.forEach(info => {

    let nom = info.nom
    let description = info.description
    let imageurl = info.imageurl

    // role afficher dans la section qui a l'id 
    document.getElementById("sectionProduits").innerHTML +=
      `
    <div class="large-3 flex gap10">
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
                    <p class="btnAcheter">Acheter
                    </p>
                </div>
            </div>
`

  });

}



// SECTION AVIS
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

    // role afficher dans la section qui a l'id
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
                        ${typeExperience}
                    </h4>
                    <p>
                        ${note}
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



// SECTION 
// role afficher dans l'html et stock les donnee dans des variable
// paramettre tableauDeProduits un tableau de produits
// return pas affiche
function afficheServices(tableauDeProduits) {
  tableauDeProduits.forEach(info => {

    let nom = info.nom
    let description = info.description

    // role afficher dans la section qui a l'id
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



// Title navigateur 
// role afficher dans l'html et stock les donnee dans des variable
// paramettre nom
// return pas affiche
function afficheTitle(nom) {

  // role afficher dans la section qui a l'id
  document.title = nom


};


// Bande defilante
// role afficher dans l'html et stock les donnee dans des variable
// paramettre donnee
// return pas affiche
function afficheBandeDefilante(info) {
  info.forEach(produits => {

    let avantagesClients = info.avantagesClients;
    let avantagesClients1 = info[0];
    let avantagesClients2 = info[1];
    let avantagesClients3 = info[2];


    // role afficher dans la section qui a l'id "carteContainer"
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









function afficheCTAphraseAccroche(phraseAccroche, texteAppelAction) {

  document.getElementById("hero").innerHTML += `
  
  <h1>${phraseAccroche}</h1> 
                <div class="btn-primary">
                    <a href="">
                        <p>${texteAppelAction}</p>
                    </a>
                </div>
                
  `
};