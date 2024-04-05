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
  - [Exercice 16 - getElementsByClassName](#exercice-16---getelementsbyclassname)
  - [Exercice 17 - querySelector](#exercice-17---queryselector)
  - [Exercice 18 - querySelectorAll](#exercice-18---queryselectorall)
  - [Exercice 19 - addEventListener - fonction nommée](#exercice-19---addeventlistener---fonction-nommée)
  - [Exercice 20 - addEventListener - fonction anonyme](#exercice-20---addeventlistener---fonction-anonyme)
- [Exercice 21 - un peu de tout](#exercice-21---un-peu-de-tout)

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

## Exercice 16 - getElementsByClassName
1. Créez une page HTML nommée Exercice16.html
2. Insérez les balises `<script src='ex16.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex16.js
4. Dans le `<body>` de la page ajoutez:

```html
<h1 class="titre">Exercie 16 - getElementsByClassName</h1>

<h2 class="titre titre2">1. Premier titre 2</h2>
<h2 class="titre titre2">2. Deuxième titre 2</h2>
<h2 class="titre titre2">3. Troisième titre 2</h2>

<h3 class="titre titre3">1. Premier titre 3</h3>
<h3 class="titre titre3">2. Deuxième titre 3</h3>
<h3 class="titre titre3">3. Troisième titre 3</h3>
```
5. Modifier tous les éléments de classe "titre" en souligant le texte.
6. Utilisez la propriété `textDecoration` de la propriété `style` de l'élément pour souligner le texte. Par exemple `monElement.style.textDecoration = "underline";`.
7. Modifier tous les éléments de classe "titre2" en mettant le texte en rouge.
8. Modifier tous les éléments de classe "titre3" en mettant le texte en blanc et le fond en rouge. Vous pouvez utiliser la propriété `backgroundColor` de la propriété `style` de l'élément pour changer la couleur de fond. Par exemple `monElement.style.backgroundColor = "red";`.
9. Ouvrez la page dans un navigateur et observez le résultat.

## Exercice 17 - querySelector
Pour rappel, `querySelector` permet de sélectionner **un seul élément** en fonction de son sélecteur CSS. Par exemple, pour sélectionner un élément par son id, on utilise `#id` et pour sélectionner un élément par sa classe, on utilise `.classe`.

1. Créez une page HTML nommée Exercice17.html
2. Insérez les balises `<script src='ex17.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex17.js
4. Dans le `<body>` de la page ajoutez:

```html
<h1 class="titre">Exercice 17 - querySelector</h1>
<div id="id1">1. Premier élément avec id1</div>
<div hidden>2. Deuxième élément avec un attribut hidden</div>
<div class="zoulou">3. Troisième élément avec une classe zoulou</div>
```
5. Utilisez `querySelector` pour sélectionner l'élément avec l'id "id1" et affichez son texte dans la console.
6. Utilisez `querySelector` pour sélectionner l'élément avec la classe "zoulou" et mettez le texte en gras. Pour mettre le texte en gras, vous pouvez utiliser la propriété `fontWeight` de la propriété `style` de l'élément. Par exemple `monElement.style.fontWeight = "bold";`.
7. Utilisez `querySelector` pour sélectionner l'élément avec l'attribut hidden. Supprimez cet attribut pour afficher l'élément. En js, pour supprimer un attribut, on utilise `removeAttribute`. Par exemple: `monElement.removeAttribute("hidden");`.

## Exercice 18 - querySelectorAll
Pour rappel, `querySelectorAll` permet de sélectionner **tous les éléments** en fonction de leur sélecteur CSS. Par exemple, pour sélectionner tous les éléments par leur classe, on utilise `.classe`. `querySelectorAll` retourne une liste d'éléments donc il faudra parcourir cette liste pour modifier chaque élément.

1. Créez une page HTML nommée Exercice18.html
2. Insérez les balises `<script src='ex18.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex18.js
4. Dans le `<body>` de la page ajoutez:
```html
<h1 class="titre">Exercice 18 - querySelectorAll</h1>
<div class="zoulou">1. Premier élément avec une classe zoulou</div>
<div hidden>2. Deuxième élément avec un attribut hidden</div>

<div class="zoulou">3. Troisième élément avec une classe zoulou</div>
<div hidden>4. Quatrième un autre élément avec un attrubut hidden</div>
<div class="timide">5. Cinquième élément avec une classe timide</div>
<div class="timide">6. Sixième élément avec une classe timide</div>
```
5. Si vous visualisez cette page dans un navigateur,  vous verrez les div 1, 3, 5 et 6. Les div 2 et 4 sont cachées.
6. Utilisez `querySelectorAll` pour sélectionner tous les éléments avec la classe "zoulou" et mettez le texte en gras.
7. Utilisez `querySelectorAll` pour sélectionner tous les éléments avec l'attribut hidden. Supprimez cet attribut pour afficher les éléments.
8. Utilisez `querySelectorAll` pour sélectionner tous les éléments avec la classe "timide" en les cachant. Nous avons déjà vu qu'on pouvait cacher un élément en utilisant la propriété `display` de la propriété `style` de l'élément. Par exemple `monElement.style.display = "none";`. Mais nous utiliserons le ferons autrement en ajoutant l'attribut hidden à l'élément. Pour ajouter un attribut, on utilise `setAttribute`. Par exemple: `monElement.setAttribute("hidden", "");`.
9. Ouvrez la page dans un navigateur et observez le résultat.

## Exercice 19 - addEventListener - fonction nommée
Pour rappel, `addEventListener` permet d'ajouter un écouteur d'événement sur un élément. Cet écouteur va attendre un événement pour exécuter une fonction. Par exemple, on peut ajouter un écouteur d'événement sur un bouton pour écouter le clic de la souris. Lorsque le bouton est cliqué, la fonction sera exécutée.

1. Créez une page HTML nommée Exercice19.html
2. Insérez les balises `<script src='ex19.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex19.js
4. Dans le `<body>` de la page ajoutez:
```html
<h1 class="titre">Exercice 19 - addEventListener</h1>
<button id="monBouton">Pas cliqué</button>
```
5. Créez une fonction `clic` qui affiche si "Cliqué" ou "Pas cliqué" en fonction du texte du bouton. Si le texte est "Pas cliqué", il doit être changé en "Cliqué". Sinon, il doit être changé en "Pas cliqué". Et cela, indéfiniment.
6. Utilisez `addEventListener` pour ajouter un écouteur d'événement sur le bouton pour écouter le clic de la souris. Lorsque le bouton est cliqué, la fonction `clic` doit être exécutée.
7. Ouvrez la page dans un navigateur et observez le résultat.

## Exercice 20 - addEventListener - fonction anonyme
Une fonction anonyme est une fonction qui n'a pas de nom. Elle est déclarée directement. Elle est souvent utilisée comme paramètre d'une autre fonction. Par exemple, on peut utiliser une fonction anonyme comme paramètre d'une fonction `addEventListener` au lieu d'utiliser une fonction nommée.

1. Créez une page HTML nommée Exercice20.html
2. Insérez les balises `<script src='ex20.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex20.js
4. Dans le `<body>` de la page ajoutez:
```html
<h1 class="titre">Exercice 20 - addEventListener</h1>
<p> Cliquez sur un des deux boutons pour déterminer si vous êtes une personne gentille ou méchante.</p>
<button id="btn_mean">Je suis méchant</button> <button id="btn_kind">Je suis gentil</button><br/><br/>
<b><div id="info"></div></b>
```
5. Utilisez `addEventListener` pour ajouter un écouteur d'événement sur le bouton "Je suis gentil" pour écouter le mouseover de la souris. Lorsque la souris passe sur le bouton, Changez l'opacité du bouton à 0 pour le rendre invisible. Pour ce faire, vous pouvez utiliser la propriété `opacity` de la propriété `style` de l'élément. Par exemple `monElement.style.opacity = 0;`.
6. Utilisez `addEventListener` pour ajouter un écouteur d'événement sur le bouton "Je suis gentil" pour écouter le mouseout de la souris. Lorsque la souris quitte le bouton, Changez l'opacité du bouton à 1 pour le rendre visible.
8. Nous avons dû utiliser opacity pour rendre le bouton invisible ou visible. Car le fait de changer la propriété display à none provoque un mouseout et donc le bouton redevient visible et donne un effet de clignotement. C'est pour cela qu'on utilise opacity à 0 qui ne provoque pas de mouseout. C'est de la trucologie mais ça fonctionne :-)
7. Utilisez `addEventListener` pour ajouter un écouteur d'événement sur le bouton "Je suis méchant" pour écouter le clic de la souris. Lorsque le bouton est cliqué, affichez "Je suis vraiment méchant apparemment :-)" dans la div info.
8. Ouvrez la page dans un navigateur et observez le résultat.

# Exercice 21 - un peu de tout
1. Créez une page HTML nommée Exercice21.html
2. Insérez les balises `<script src='ex21.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex21.js
4. Vous allez créer une page web qui va afficher un formulaire de contact avec les champs suivants:
- Nom
- Prénom 
- Email 
- Message (textarea)
- Envoyer
1. N'oubliez pas de mettre un label pour chaque champ: c'est plus sympa ! :-)
2. Vous allez créer un tableau d'adresses emails.
3. Vous allez ajouter un écouteur d'événement sur le bouton "Envoyer" pour écouter le clic de la souris.
4. Lorsque le bouton est cliqué, vous allez afficher les informations du formulaire dans un div dédié. Si l'adresse email ne figure pas dans le tableau, vous afficherez dans le suivant dans un div dédié:
```text
Bonjour Johnny Piette,

Nous vous remercions pour de nous avoir contacté et nous répondrons à votre adresse (johnny.piette@eqla.be) aussi vite que possible.

Votre message:"Je vous remercie pour le service de qualité que vous avez fourni pour la réparation de mon OnePlus 8 Pro. Quel plaisir d'acheter chez vous !"
```
Si l'adresse email figure dans le tableau d'emails, vous afficherez:
```text
BonjourJohnny Piette !

Nous sommes contents d'avoir à nouveau de vos nouvelles.

Nous vous remercions pour de nous avoir contacté et nous répondrons à votre adresse (johnny.piette@eqla.be) aussi vite que possible.

Votre message:"Je vous remercie pour le service de qualité que vous avez fourni pour la réparation de mon OnePlus 8 Pro. Quel plaisir d'acheter chez vous !"
``` 
9. Quand survolez le bouton "Envoyer", changez la couleur de fond du bouton en rouge. Quand la souris quitte le bouton, remettez la couleur de fond du bouton en blanc.
10. Quand un champ du formulaire est en focus, changez la couleur de fond du champ en jaune. Quand le champ perd le focus, remettez la couleur de fond du champ en blanc. Cherchez sur le net comment on détecte si un élément a le focus (on mettra le champ en jaune) et quand il perd le focus (on remet le champ en blanc).
11. Ouvrez la page dans un navigateur et observez le résultat.





[:arrow_left: Revenir au menu principal.](../README.md#sommaire)

--- 
&copy; 2024 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).   
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._
