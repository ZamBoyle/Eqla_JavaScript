[:arrow_left: Revenir au menu principal.](../README.md#sommaire)
<h1 id="sommaire" style="display: flex; align-items: center; justify-content: center;">
    <img src="../Assets/eqla.png" style="height:50px">
    &nbsp;Exercices
</h1>


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Exercice 1 - Code JS Inline](#exercice-1---code-js-inline)
- [Exercice 2 - Ficher JS Externe](#exercice-2---ficher-js-externe)
- [Exercice 3 - Ficher JS Externe](#exercice-3---ficher-js-externe)
- [Exercice 4 - Installation de Node.js](#exercice-4---installation-de-nodejs)
- [Exercice 5 - Type de données & variables](#exercice-5---type-de-données--variables)
- [Exercice 6 - Conditions](#exercice-6---conditions)
- [Exercice 7 - Boucles](#exercice-7---boucles)
- [Exercice 8 - Fonctions](#exercice-8---fonctions)
- [Exercice 9 - Fonctions anonymes](#exercice-9---fonctions-anonymes)
- [Exercice 10 - Fonctions fléchées](#exercice-10---fonctions-fléchées)
- [Exercice 11 - getElementById](#exercice-11---getelementbyid)
- [Exercice 12 - getElementById](#exercice-12---getelementbyid)
- [Exercice 13 - getElementById](#exercice-13---getelementbyid)
- [Exercice 14 - getElementsByTagName](#exercice-14---getelementsbytagname)
- [Exercice 15 - getElementsByTagName](#exercice-15---getelementsbytagname)

<!-- /code_chunk_output -->



## Exercice 1 - Code JS Inline
1. Créez une page HTML nommée Exercice1.html
2. Positionnez-vous dans le `<head>` de la page et ajoutez le code suivant:
```html
<script defer>
    alert('Hello les BlindCoders!');
</script>
```
3. Ouvrez la page dans un navigateur et observez le résultat.

## Exercice 2 - Ficher JS Externe
1. Créez une page HTML nommée Exercice2.html
2. Créez un fichier JavaScript nommé Exercice2.js
3. Positionnez-vous dans le `<head>` de la page et ajoutez le code suivant:
```html
<script src="Exercice2.js" defer></script>
```
4. Dans le fichier Exercice2.js, ajoutez le code suivant:
```javascript
alert('Hello les BlindCoders!');
```
5. Ouvrez la page dans un navigateur et observez le résultat.

## Exercice 3 - Ficher JS Externe
1. Créez une page HTML nommée Exercice3.html
2. Créez un fichier JavaScript nommé Exercice2.js
3. Positionnez-vous juste avant la fermeture de la balise `<body>` de la page et ajoutez le code suivant:
```html
<script src="Exercice2.js"></script>
```
4. Ouvrez la page dans un navigateur et observez le résultat.

## Exercice 4 - Installation de Node.js
1. Allez sur le site officiel de Node.js: [https://nodejs.org/](https://nodejs.org/)
2. Téléchargez la version `LTS` (Long Term Support) pour votre système d'exploitation.
3. Installez Node.js sur votre ordinateur.
4. Ouvrez un terminal et tapez la commande `node -v` pour vérifier que Node.js est bien installé.


## Exercice 5 - Type de données & variables
1. Créez une page HTML nommée Exercice5.html
2. Insérez les balises `<script src='ex5.js'>` `</script>` juste avant la fermeture de la balise `<body>` de la page.
3. Créez un fichier JavaScript nommé ex5.js
4. Vous utiliserez let pour déclarer les variables.
4. Créez une variable `prenom` et affectez-lui la valeur "Johnny".
5. Créez une variable `age` et affectez-lui la valeur 25.
6. Créez une variable `estMajeur` et affectez-lui la valeur `true`.
7. Créez une variable `taille` et affectez-lui la valeur 1.75.
8. Créez une variable `poids` et affectez-lui la valeur 75.
9. Créez une variable `sexe` et affectez-lui la valeur "M".
10. En JavaScript pour concaténer des chaînes de caractères, on utilise l'opérateur `+` alors qu'en PHP on utilise le point `.` et avec MySQL on a utilisé la fonction `CONCAT()`.
11. Vous allez concaténer les variables `prenom`, `age`, `taille`, `poids` et `sexe` pour afficher le message suivant: "Je m'appelle Johnny, j'ai 25 ans, je mesure 1.75m, je pèse 75kg et je suis de sexe 'M'.". Vous utiliserez la commande `console.log()` pour afficher le message dans la console du navigateur.
12. Idem mais maintenant, vous utiliserez l'interpolations de chaînes de caractères. Vous utiliserez la commande `console.log()` pour afficher le message dans la console du navigateur.
12. Il ne manquera plus que la variable `estMajeur` qui indiquera si la personne est majeure ou non. Pour faire simple sans faire de condition, on affichera simplement:"Majeur: true". Vous utiliserez la commande `console.log()` pour afficher le message dans la console du navigateur.
13. Ouvrez la page dans un navigateur et observez le résultat et consultez la console du navigateur.
14. Testez aussi via node.js en utilisant la commande `node ex5.js`.

## Exercice 6 - Conditions
1. Créez une page HTML nommée Exercice6.html
2. Insérez les balises `<script src='ex5.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex6.js
4. Créez deux variables: nombre1 et nombre2.
5. Affectez-leurs des valeurs.
6. Le programme affichera plusieurs informations:
- Si nombre1 est égal à nombre2, affichez "nombre1 est égal à nombre2".
- Si nombre1 est différent de nombre2, affichez "nombre1 est différent de nombre2".
- Si nombre1 est supérieur à nombre2, affichez "nombre1 est supérieur à nombre2".
- Si nombre1 est inférieur à nombre2, affichez "nombre1 est inférieur à nombre2".
- Si le reste de la division de nombre1 par nombre2 est égal à 0, affichez "nombre1 est divisible par nombre2". Sinon, affichez "nombre1 n'est pas divisible par nombre2".
7. Incrémentez nombre1 et nombre2 de 1 et affichez les nouvelles valeurs.
8. Affichez si le delta entre nombre1 et nombre2 est positif ou négatif.
9. Créez les variables a et b et Affectez des valeurs comprises entre 1 et 10.
10. Créez une variable `resultat` et affectez-lui la valeur de (a + b)².
11. Vous rappelez-vous de (a + b)² = a² + 2*a*b + b² ? En JS, on utilise `**` pour élever à la puissance. Par exemple: a² = a**2.
12. Affichez le résultat. Par exemple: "Le résultat de (a + b)² est 100.". Utilisez l'interpolation de chaînes de caractères ça sera plus simple.
13. Si le résultat est égale à 400, affichez "valeur maximale atteinte pour (a + b)²". Sinon, affichez "Il manque encore xx pour atteindre la valeur maximale pour (a + b)²". Exemple si le résultat est 300: "Il manque encore 100 pour atteindre la valeur maximale pour (a + b)²".
13. Ouvrez la page dans un navigateur et observez le résultat et consultez la console du navigateur.
14. Testez aussi via node.js en utilisant la commande `node ex6.js`.

## Exercice 7 - Boucles
1. Créez une page HTML nommée Exercice7.html
2. Insérez les balises `<script src='ex7.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex7.js
4. Créez une boucle `for` qui affiche les nombres de 1 à 10 dans la console.
5. Créez une boucle `for` qui affiche les nombres de 10 à 1 dans la console.
6. Affichez les nombres pairs de 1 à 20 dans la console.
7. Affichez les nombres impairs de 1 à 20 dans la console.
8. Ouvrez la page dans un navigateur et observez le résultat et consultez la console du navigateur.
9. Testez aussi via node.js en utilisant la commande `node ex7.js`.

## Exercice 8 - Fonctions
1. Créez une page HTML nommée Exercice8.html
2. Insérez les balises `<script src='ex8.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex8.js
4. Créez une fonction `addition` qui prend deux paramètres et qui retourne la somme de ces deux paramètres.
5. Créez une fonction `soustraction` qui prend deux paramètres et qui retourne la différence de ces deux paramètres.
6. Créez une fonction `multiplication` qui prend deux paramètres et qui retourne le produit de ces deux paramètres.
7. Testez ces fonctions en affichant les résultats dans la console pour les valeurs suivantes: 5 et 3.
8. Ouvrez la page dans un navigateur et observez le résultat et consultez la console du navigateur.
9. Testez aussi via node.js en utilisant la commande `node ex8.js`.

## Exercice 9 - Fonctions anonymes
1. Créez une page HTML nommée Exercice9.html
2. Insérez les balises `<script src='ex9.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex9.js
4. Créez une fonction anonyme qui prend deux paramètres et qui retourne la somme de ces deux paramètres.
5. Créez une fonction anonyme qui prend deux paramètres et qui retourne la différence de ces deux paramètres.
6. Créez une fonction anonyme qui concatène deux chaînes de caractères avec un espace entre elles.
7. Testez ces fonctions en affichant les résultats dans la console pour les valeurs suivantes: 5 et 3, "Hello" et "World".
8. Ouvrez la page dans un navigateur et observez le résultat et consultez la console du navigateur.
9. Testez aussi via node.js en utilisant la commande `node ex9.js`.

## Exercice 10 - Fonctions fléchées
1. Créez une page HTML nommée Exercice10.html
2. Insérez les balises `<script src='ex10.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex10.js
4. Reprenez les fonctions de l'exercice précédent et transformez-les en fonctions fléchées.
5. Testez ces fonctions en affichant les résultats dans la console pour les valeurs suivantes: 5 et 3, "Hello" et "World".
6. Ouvrez la page dans un navigateur et observez le résultat et consultez la console du navigateur.
7. Testez aussi via node.js en utilisant la commande `node ex10.js`.

## Exercice 11 - getElementById
1. Créez une page HTML nommée Exercice11.html
2. Insérez les balises `<script src='ex11.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex11.js
4. Dans le `<body>` de la page ajoutez:

```html
<h1 id="titre">Je suis un beau titre h1</h1>
<div id="info">Informations: </div>
```

5. Modifiez le titre h1 en "Je suis un titre h1 modifié" en utilisant `getElementById`.
6. Concaténez le texte de la div info avec "Nous sommes en " + new Date().getFullYear() + "."
7. Ouvrez la page dans un navigateur et observez le résultat.

## Exercice 12 - getElementById
1. Créez une page HTML nommée Exercice12.html
2. Insérez les balises `<script src='ex12.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex12.js
4. Dans le `<body>` de la page ajoutez:

```html
<h1 id="titreh1">Abracadabra</h1>
<button id="monBouton" onclick="cacher()">Cacher le titre</button>
```

5. Créez une fonction `cacher` qui cache le titre h1 en utilisant `getElementById`.
6. Cette fonction doit changer la propriété `display` de la propriété `style` de l'élément h1 en "none". Ouille, ça fait beaucoup de propriétés tout ça. En fait, on peut simplifier en utilisant:

```javascript
let monElement = document.getElementById("monElement");
monElement.style.display = "none";
// ou plus simplement
document.getElementById("monElement").style.display = "none";
```

7. Ouvrez la page dans un navigateur et observez le résultat.


## Exercice 13 - getElementById
1. Créez une page HTML nommée Exercice13.html
2. Insérez les balises `<script src='ex13.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex13.js
4. Même principe que l'exercice précédent mais cette fois-ci, on va afficher ou cacher le titre h1 en cliquant sur le bouton.
5. Contrairement à l'exercice précédent, on va utiliser une seule fonction `toggle` qui va afficher ou cacher le titre h1 en fonction de son état actuel.
6. Vous pouvez utiliser la propriété `display` de la propriété `style` de l'élément h1 pour afficher ou cacher le titre:
- Pour afficher le titre, vous utiliserez la valeur "block" pour la propriété `display`.
- Pour cacher le titre, vous utiliserez la valeur "none" pour la propriété `display`.
7. Donc vous allez devoir tester si le titre est affiché ou caché pour changer son état.
5. Le bouton doit changer de texte en fonction de l'état (affiché/montré) du titre h1. Vous pouvez utiliser `innerText` pour changer le texte du bouton si vous ne devez pas le mettre en forme. Sinon, vous pouvez utiliser `innerHTML` pour mettre du HTML dans le bouton et donc mettre du texte en gras par exemple.
6. Ouvrez la page dans un navigateur et observez le résultat.

## Exercice 14 - getElementsByTagName
1. Créez une page HTML nommée Exercice14.html
2. Insérez les balises `<script src='ex14.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex14.js
4. Dans le `<body>` de la page ajoutez:

```html
<h1>Exercice 14 - getElementsByTagName</h1>
<h2>Titre 2</h2>
<h3>Titre 3</h3>
<h4>Titre 4</h4>

<h2>Titre 2</h2>
<h3>Titre 3</h3>
<h4>Titre 4</h4>

<h2>Titre 2</h2>
<h3>Titre 3</h3>
<h4>Titre 4</h4>
```
5. Créez une fonction `modifierTitres` qui va modifier tous les titres de niveau 2 (h2) en leur ajoutant " - modifié" à la fin.
6. Vu que `getElementsByTagName` retourne une liste d'éléments, vous allez devoir parcourir cette liste pour modifier chaque élément: logique, non?
7. N'oubliez pas d'appeler la fonction `modifierTitres` pour qu'elle soit exécutée. Sinon, elle ne servira à rien. C'est comme en PHP, si vous ne l'appelez pas, la fonction ne sera pas exécutée.
7. Ouvrez la page dans un navigateur et observez le résultat.

## Exercice 15 - getElementsByTagName
1. Créez une page HTML nommée Exercice15.html
2. Insérez les balises `<script src='ex15.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex15.js
4. Même principe que l'exercice précédent mais cette fois-ci, on va en plus mettre le texte en rouge pour les titres de niveau 3 (h3).
5. Pour changer la couleur du texte, vous pouvez utiliser la propriété `color` de la propriété `style` de l'élément h3. Par exemple `monElement.style.color = "red";`.
6. Ouvrez la page dans un navigateur et observez le résultat.





[:arrow_left: Revenir au menu principal.](../README.md#sommaire)

--- 
&copy; 2024 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).   
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._
