let nombres = [1, 2, 3, 4, 5];
console.log("Valeurs initiales:"+nombres); // [1, 2, 3, 4, 5]
let nombresMultipliesPar2 = nombres.map(function(nombre) {
  return nombre * 2;
});
console.log("Valeurs multipliées par deux:"+nombresMultipliesPar2); // [2, 4, 6, 8, 10]    

let annee = 2024;
let estBissextile = (annee) => {annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0);}
estBissextile = function(annee) {
  return annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0);
}





function afficherNomComplet() {
    console.log(prenom + " " + nom); // Affiche "Johnny Piette"
  }
  
  var nom = "Piette";
  var prenom = "Johnny";
  afficherNomComplet(); // Affiche "Johnny Piette"
