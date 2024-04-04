[:arrow_left: Revenir au menu principal.](../README.md#sommaire)

<h1 id="sommaire" style="display: flex; align-items: center; justify-content: center;">
    <img src="../Assets/eqla.png" style="height:50px">
    &nbsp;Module 1: Fondamentaux de JavaScript
</h1>

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [1. Objectif](#1-objectif)
- [2. Installation de Node.js](#2-installation-de-nodejs)
- [3. Afficher un message](#3-afficher-un-message)
  - [3.1 la fonction alert()](#31-la-fonction-alert)
  - [3.2 la fonction console.log()](#32-la-fonction-consolelog)
  - [3.3 la propriété innerHTML](#33-la-propriété-innerhtml)
- [4. Types de données](#4-types-de-données)
- [5. Blocs de code](#5-blocs-de-code)
- [6. Variables](#6-variables)
  - [6.1 Naming convention Variables et fonctions](#61-naming-convention-variables-et-fonctions)
  - [6.2 var, let et const](#62-var-let-et-const)
  - [6.3 Déclarer plusieurs variables](#63-déclarer-plusieurs-variables)
  - [6.4 Déclarer une variable sans lui affecter de valeur](#64-déclarer-une-variable-sans-lui-affecter-de-valeur)
  - [6.5 Résumons](#65-résumons)
- [7. Opérateurs (arithmétiques, d'affectation, de comparaison, logiques)](#7-opérateurs-arithmétiques-daffectation-de-comparaison-logiques)
  - [7.1 Opérateurs arithmétiques](#71-opérateurs-arithmétiques)
  - [7.2 Opérateurs d'affectation](#72-opérateurs-daffectation)
  - [7.3 Opérateurs de Comparaison](#73-opérateurs-de-comparaison)
  - [7.4 Opérateurs logiques](#74-opérateurs-logiques)
  - [7.5 Opérateurs de concaténation](#75-opérateurs-de-concaténation)
  - [7.6 L'interpolation de chaînes de caractères](#76-linterpolation-de-chaînes-de-caractères)
- [8. Structures de contrôle (if, else, switch, boucles for, while)](#8-structures-de-contrôle-if-else-switch-boucles-for-while)
  - [8.1 if, else](#81-if-else)
    - [8.1.1 Syntaxe](#811-syntaxe)
    - [8.1.2 if](#812-if)
    - [8.1.3 else](#813-else)
    - [8.1.4 Opérateurs logiques dans les conditions](#814-opérateurs-logiques-dans-les-conditions)
    - [8.1.5 Exemple avec les années bissextiles](#815-exemple-avec-les-années-bissextiles)
  - [8.2 switch](#82-switch)
- [9. Les Fonctions](#9-les-fonctions)
  - [9.1 Déclaration de fonction](#91-déclaration-de-fonction)
  - [9.2 Fonction qui ne retourne rien / void](#92-fonction-qui-ne-retourne-rien--void)
  - [9.3 Fonction qui retourne une valeur / return](#93-fonction-qui-retourne-une-valeur--return)
  - [9.4 Les early return](#94-les-early-return)
  - [9.5 Les fonctions anonymes](#95-les-fonctions-anonymes)
    - [9.5.1 Fonction anonyme dans une variable](#951-fonction-anonyme-dans-une-variable)
    - [9.5.2 Fonction anonyme en paramètre de fonction](#952-fonction-anonyme-en-paramètre-de-fonction)
    - [9.5.3 Conclusion](#953-conclusion)
  - [9.6 Les fonctions fléchées](#96-les-fonctions-fléchées)
- [10. Portée des variables](#10-portée-des-variables)
  - [10.1 Portée globale](#101-portée-globale)
  - [10.2 Portée locale](#102-portée-locale)
- [11. Les tableaux](#11-les-tableaux)
  - [11.1 Déclaration d'un tableau](#111-déclaration-dun-tableau)
  - [11.2 Accès aux éléments d'un tableau](#112-accès-aux-éléments-dun-tableau)
  - [11.3 Modifier un élément d'un tableau](#113-modifier-un-élément-dun-tableau)
  - [11.4 Ajouter un élément à un tableau](#114-ajouter-un-élément-à-un-tableau)
  - [11.5 Supprimer un élément d'un tableau](#115-supprimer-un-élément-dun-tableau)
  - [11.6 Parcourir un tableau](#116-parcourir-un-tableau)
- [12. Les boucles](#12-les-boucles)
  - [12.1 Boucle for](#121-boucle-for)
  - [12.2 Boucle while](#122-boucle-while)
  - [12.3 Boucle do...while](#123-boucle-dowhile)
  - [12.4 Boucle for...in](#124-boucle-forin)
  - [12.5 Boucles foreach](#125-boucles-foreach)

<!-- /code_chunk_output -->

## 1. Objectif

Il vise en premier à expliquer comment ajouter du JavaScript à une page web, puis à introduire les concepts de base de JavaScript, permettant aux participants de comprendre les structures fondamentales du langage, telles que les variables, les types de données, les structures de contrôle, et les fonctions. L'accent sera mis sur la pratique avec des exercices d'application pour chaque concept.

## 2. Installation de Node.js

Au début, je voulais utiliser la console de votre navigateur pour exécuter du code JavaScript, mais je me suis dit que ce serait plus simple d'installer Node.js sur votre ordinateur. Node.js est un environnement d'exécution JavaScript côté serveur. Il vous permet d'exécuter du code JavaScript sur votre ordinateur. Cela vous permettra de tester votre code JavaScript sans avoir à ouvrir votre navigateur. Vous pourrez exécuter votre code JavaScript directement dans votre terminal.

Mais lorsque nous manipulerons le DOM (Document Object Model) nous aurons besoin d'un navigateur. Le DOM est une interface de programmation pour les documents HTML et XML. Il représente la page web, et permet de modifier le contenu, la structure et le style de la page. Nous verrons cela plus tard.

**Pour installer Node.js, suivez les étapes suivantes**:

1. Allez sur le site officiel de Node.js: [https://nodejs.org/](https://nodejs.org/)
2. Téléchargez la version `LTS` (Long Term Support) pour votre système d'exploitation.
3. Installez Node.js sur votre ordinateur.
4. Ouvrez un terminal et tapez la commande `node -v` pour vérifier que Node.js est bien installé.

## 3. Afficher un message

Si on veut afficher un message à l'utilisateur nous avons plusieurs possibilités:

### 3.1 la fonction alert()

La fonction `alert()` affiche une boîte de dialogue avec un message et un bouton "OK". Par exemple:

```javascript
alert("Hello les BlindCoders!");
```

Le problème avec cette fonction c'est qu'elle est bloquante, c'est-à-dire que l'utilisateur ne peut pas faire autre chose tant qu'il n'a pas cliqué sur le bouton "OK". Elle est donc peu utilisée sauf dans l'apprentissage du JavaScript où l'on veut afficher rapidement un message à l'utilisateur.

### 3.2 la fonction console.log()

La fonction `console.log()` affiche un message dans la console du navigateur. Par exemple:

```javascript
console.log("Hello les BlindCoders!");
```

Ce message écrira "Hello les BlindCoders!" dans la console du navigateur. Pour ouvrir la console, il suffit de faire un clic droit sur la page web, puis de sélectionner "Inspecter" ou "Inspecter l'élément" (selon le navigateur), puis de cliquer sur l'onglet "Console". Vous pouvez aussi ouvrir la console en appuyant sur la touche F12 de votre clavier.

Si vous utilisez node.js, vous pouvez aussi utiliser `console.log()` pour afficher des messages dans la console de votre terminal.

### 3.3 la propriété innerHTML

La propriété `innerHTML` permet de modifier le contenu d'un élément HTML. Par exemple:

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Démo innerHTML</title>
  </head>
  <body>
    <h1 id="aChanger">Hello !</h1>
    <script>
      document.getElementById("aChanger").innerHTML =
        "Bonjour les BlindCoders et BlindCodeuses !";
    </script>
  </body>
</html>
```

Nous allons voir en détail comment modifier le contenu d'un élément HTML plus tard dans le cours. C'est juste pour vous montrer que c'est possible. Le code js est exécuté après le chargement de la page et changera le contenu de l'élément `h1` avec l'id `aChanger` par "Bonjour les BlindCoders et BlindCodeuses !".

Nous aurions bien entendu pu mettre le code js dans un fichier séparé.


Autre exemple pour les casses pieds Thomas & Christian fait en live :-)
```html
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Démo innerHTML</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"></script>
</head>

<body>
    <div class="container">
        <h1 class="text-center">Inscription</h1>
        <form id="formInscription" method="post" action="http://zamboyle.synology.me:2727/forms/demos/showvars.php">
            <div class="mb-3">
                <label for="prenom" class="form-label">Prenom</label>
                <input id="prenom" name="prenom" type="text" class="form-control" placeholder="Entrez votre prénom" required autocomplete="username"/>
            </div>
            <div class="mb-3">
                <label for="mdp1" class="form-label">Mot de passe</label>
                <input id="mdp1" name="mdp1" type="password" class="form-control" placeholder="Entrez votre mot de passe" autocomplete="new-password"/>
            </div>
            <div class="mb-3">
                <label for="mdp2" class="form-label">Confirmer mot de passe</label>
                <input id="mdp2" name="mdp2" type="password" class="form-control" placeholder="Confirmez votre mot de passe" autocomplete="new-password"/>
            </div>
            <!-- Aucun changement nécessaire dans la partie HTML, sauf le type du bouton -->
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
        <div id="info"></div>
    </div>
    <script>
        //event sur le dom loaded
        document.addEventListener("DOMContentLoaded", function () {
            let formulaire = document.getElementById("formInscription");
            formulaire.addEventListener("submit", function (event) {
                event.preventDefault();
                checkForm();
            });
        });

        function checkForm() {
            let passwordsOk = checkPasswords();
            let formulaire = document.getElementById("formInscription");
            if (passwordsOk) {
                formulaire.submit();
            }
        }
        function checkPasswords() {
            let password1 = document.getElementById("mdp1").value;
            let password2 = document.getElementById("mdp2").value;
            let info = document.getElementById("info");

            if (password1.length < 8 || password2.length < 8) {
                info.innerHTML = "Le mot de passe doit contenir au moins 8 caractères.";
                info.style.color = "red"; // Indication visuelle pour les erreurs
            } else if (password1 !== password2) {
                info.innerHTML = "Les mots de passe ne correspondent pas.";
                info.style.color = "red"; // Indication visuelle pour les erreurs
            } else {
                info.innerHTML = "Les mots de passe correspondent et sont valides.";
                info.style.color = "green"; // Changement de la couleur pour une validation réussie
                return true;
            }
            return false;
        }
    </script>
</body>

</html>
```
Ce code javascript vérifie si les mots de passe entrés par l'utilisateur sont valides et correspondent. Si ce n'est pas le cas, un message d'erreur est affiché en rouge, sinon un message de validation est affiché en vert.



## 4. Types de données

Les types de données sont les éléments de base de tout langage de programmation. Ils permettent de stocker des informations dans des variables, et de les manipuler. JavaScript possède plusieurs types de données, dont les plus courants sont les suivants:

- `Les nombres`: entiers et décimaux
- `Les chaînes de caractères`: texte
- `Les booléens`: vrai ou faux
- `Null` et `undefined`: pour les valeurs non assignées ou vides
- `Les tableaux`: pour stocker des collections de données
- `Les objets`: pour stocker des données plus complexes (vous verrez cela avec Philip en PHP mais le concept est le même).
- `Les fonctions`: pour stocker des blocs de code réutilisables. Et oui, les fonctions sont des types de données à part entière en JavaScript et on peut les assigner à des variables, les passer en paramètres, et les retourner comme valeur de fonction. Heuuuuuuuuuu oui, c'est un peu compliqué, mais on va y aller doucement.

Lors de l'affectation d'une variable on ne spécifie pas le type de données, JavaScript le détermine automatiquement. C'est ce qu'on appelle le typage dynamique. Par exemple:

```javascript
let x = 5; // x est un nombre
console.log("x vaut: " + x + " et est de type: " + typeof x); // Affiche "x vaut: 5 et est de type: number"

let y = "Hello"; // y est une chaîne de caractères
console.log("y vaut: " + y + " et est de type: " + typeof y); // Affiche "y vaut: Hello et est de type: string"

let z = true; // z est un booléen
console.log("z vaut: " + z + " et est de type: " + typeof z); // Affiche "z vaut: true et est de type: boolean"
```

Le résultat dans la console sera le suivant:

```text
x vaut: 5 et est de type: number
y vaut: Hello et est de type: string
z vaut: true et est de type: boolean
```

Mais maintenant on peut changer le type des variables x, y et z:

```javascript
x = "Hello"; // x est maintenant une chaîne de caractères
console.log("x vaut: " + x + " et est de type: " + typeof x); // Affiche "x vaut: Hello et est de type: string"

y = 5; // y est maintenant un nombre
console.log("y vaut: " + y + " et est de type: " + typeof y); // Affiche "y vaut: 5 et est de type: number"

z = "true"; // z est maintenant une chaîne de caractères
console.log("z vaut: " + z + " et est de type: " + typeof z); // Affiche "z vaut: true et est de type: string"
```

Le résultat dans la console sera le suivant:

```text
x vaut: Hello et est de type: string
y vaut: 5 et est de type: number
z vaut: true et est de type: string
```

Evidemment, c'est une très mauvaise pratique de changer le type d'une variable, mais c'est pour vous montrer que c'est possible. C'est pour cela qu'il est important de bien nommer ses variables pour que leur contenu soit clair. Par exemple, si on a une variable `age` on sait que c'est un nombre, si on a une variable `prenom` on sait que c'est une chaîne de caractères, etc. Alors que x, y et z ne veulent rien dire.

Rappelez-vous notre lors de notre introduction où nous avons dit que JavaScript est un langage de programmation faiblement typé. Cela signifie que les variables peuvent changer de type. C'est pour cette raison que TypeScript a été créé.

## 5. Blocs de code
En JavaScript, les blocs de code sont délimités par des accolades `{}`. Tout ce qui se trouve entre les accolades est considéré comme un bloc de code: une suite d'instructions qui seront exécutées ensemble. C'est comme dans la plupart des langages de programmation.

```javascript
{
  console.log("Ceci s'exécute dans un bloc de code");
}
{
  console.log("Ceci s'exécute dans un autre bloc de code");
}
```
Même si les deux blocs de code ci-dessus contiennent la même instruction `console.log()`, ils sont considérés comme deux blocs de code distincts. Le premier bloc de code affiche "Ceci s'exécute dans un bloc de code" dans la console, et le deuxième bloc de code affiche "Ceci s'exécute dans un autre bloc de code" dans la console.

Ils sont utilisés dans les structures de contrôle (if, else, switch, boucles for, while, etc.), les fonctions, les classes, etc.

```javascript
if (condition) {
  // Ceci est un bloc de code
  console.log("Ceci s'exécute si la condition est vraie");
} else {
  // Ceci est un autre bloc de code
  console.log("Ceci s'exécute si la condition est fausse");
}

function maFonction() {
  // Ceci est un bloc de code
  console.log("Ceci s'exécute dans maFonction");
}

for (let i = 0; i < 5; i++) {
  // Ceci est un bloc de code
  console.log("Ceci s'exécute dans une boucle for");
}
```


Nous verrons plus loin que la portée des variables est définie par les blocs de code. C'est-à-dire que si une variable est déclarée dans un bloc de code, elle ne sera accessible que dans ce bloc de code. C'est ce qu'on appelle la portée locale. Nous verrons cela plus tard.

## 6. Variables

Une variable est un conteneur pour stocker des données. Vous pouvez utiliser une variable pour stocker des données, et vous pouvez les réutiliser. En JavaScript, on utilise le mot-clé `let` pour déclarer une variable. Nous l'avons vu juste avant.

Par exemple:

```javascript
let prenom = "Johnny";
console.log(prenom); // Affiche "Johnny"
```

Le code ci-dessus déclare une variable `prenom` et lui affecte la valeur "Johnny". Ensuite, on affiche la valeur de la variable `prenom` dans la console.

### 6.1 Naming convention Variables et fonctions

Les noms de variables et de fonctions en JavaScript sont sensibles à la casse. Cela signifie que `prenom`, `Prenom` et `PRENOM` sont trois variables différentes. Il est recommandé d'utiliser des noms de variables et de fonctions significatifs, et de les nommer en camelCase. Par exemple:

```javascript
let prenomComplet = "Johnny Piette";
afficherPrenomComplet(prenomComplet);

function afficherPrenomComplet(prenomComplet) {
  console.log(prenomComplet);
}
```

Le nom de la variable `prenomComplet` est composé de deux mots, et le deuxième mot commence par une majuscule. C'est ce qu'on appelle le camelCase. C'est une convention de nommage très utilisée en JavaScript.

Le nom de la fonction `afficherPrenomComplet` est composé de trois mots, et les deuxième et troisième mots commencent par une majuscule. C'est aussi du camelCase.



### 6.2 var, let et const

Avant ES6 (2015), on utilisait le mot-clé `var` pour déclarer une variable. Mais depuis ES6, on utilise le mot-clé `let` pour déclarer une variable. `var` est toujours utilisé, mais il est déconseillé de l'utiliser.

Pour déclarer une constante, on utilise le mot-clé `const`. Une constante est une variable dont la valeur ne peut pas être modifiée. Par exemple:

```javascript
const prenom = "Johnny";
prenom = "Philip"; // Erreur: Assignment to constant variable.
```

Le code ci-dessus déclare une constante `prenom` et lui affecte la valeur "Johnny". Ensuite, on essaie de changer la valeur de la constante `prenom` par "Philip", mais on obtient une erreur car on ne peut pas changer la valeur d'une constante.

### 6.3 Déclarer plusieurs variables

Il est possible de déclarer plusieurs variables en une seule ligne. Par exemple:

```javascript
let prenom = "Johnny",
  nom = "Piette",
  age = 30;
console.log(prenom, nom, age); // Affiche "Johnny Piette 30"
```

Le code ci-dessus déclare trois variables `prenom`, `nom` et `age` et leur affecte respectivement les valeurs "Johnny", "Piette" et 30. Ensuite, on affiche les valeurs des variables `prenom`, `nom` et `age` dans la console.

Personnellement, je préfère déclarer une variable par ligne, mais c'est une question de goût.

### 6.4 Déclarer une variable sans lui affecter de valeur

Il est possible de déclarer une variable sans lui affecter de valeur. Par exemple:

```javascript
let prenom;
console.log(prenom); // Affiche "undefined"
```

Le code ci-dessus déclare une variable `prenom` sans lui affecter de valeur. Ensuite, on affiche la valeur de la variable `prenom` dans la console. La valeur affichée est "undefined" car la variable `prenom` n'a pas de valeur.

### 6.5 Résumons

On utilise `let` ou `const` pour déclarer des variables.

On utilise `let` pour déclarer des variables dont la valeur peut être modifiée, et `const` pour déclarer des constantes dont la valeur ne peut pas être modifiée. On utilise le camelCase pour nommer les variables et les fonctions.

On n'utilise plus `var` pour déclarer des variables: on utilise `let`.

On peut déclarer plusieurs variables en une seule ligne.

Il est possible de déclarer une variable sans lui affecter de valeur.

On utilise comme naming convention le `camelCase` pour nommer les variables et les fonctions.

## 7. Opérateurs (arithmétiques, d'affectation, de comparaison, logiques)

Les opérateurs sont utilisés pour effectuer des opérations sur des variables et des valeurs. JavaScript possède plusieurs types d'opérateurs, dont les plus courants sont les opérateurs arithmétiques, d'affectation, de comparaison et logiques.

### 7.1 Opérateurs arithmétiques

Les opérateurs arithmétiques sont utilisés pour effectuer des opérations mathématiques.

- **Addition (+)** : Additionne deux valeurs.
- **Soustraction (-)** : Soustrait la valeur de droite de celle de gauche.
- **Multiplication (\*)** : Multiplie deux valeurs.
- **Division (/)** : Divise la valeur de gauche par celle de droite.
- **Modulo (%)** : Renvoie le reste de la division de gauche par droite.
- **Incrémentation (++)** : Augmente la valeur d'une variable de 1.
- **Décrémentation (--)** : Diminue la valeur d'une variable de 1.

```javascript
let a = 10;
let b = 5;

// Addition
console.log(a + b); // 15

// Soustraction
console.log(a - b); // 5

// Multiplication
console.log(a * b); // 50

// Division
console.log(a / b); // 2

// Modulo
console.log(a % b); // 0 car 10 / 5 = 2 reste 0

// Incrémentation
a++;
console.log(a); // 11

// Décrémentation
b--;
console.log(b); // 4
```

### 7.2 Opérateurs d'affectation

Les opérateurs d'affectation sont utilisés pour attribuer des valeurs à des variables JavaScript.

- **Affectation simple (=)** : Attribue la valeur de droite à l'opérande de gauche.
- **Addition et affectation (+=)** : Ajoute la valeur de droite à la variable de gauche et assigne le résultat à cette variable.
- **Soustraction et affectation (-=)** : Soustrait la valeur de droite de la variable de gauche et assigne le résultat.
- **Multiplication et affectation (\*=)** : Multiplie la variable de gauche par la valeur de droite et assigne le résultat.
- **Division et affectation (/=)** : Divise la variable de gauche par la valeur de droite et assigne le résultat.

```javascript
let a = 11;
let b = 4;
let c = 10;

// Affectation simple
c = b; // c est maintenant 4

// Addition et affectation
c += a; // c = c + a = 4 + 11
console.log(c); // 15 

// Soustraction et affectation
c -= a; // c = c - a = 15 - 11
console.log(c); // 4

// Multiplication et affectation
c *= a; // c = c * a = 4 * 11
console.log(c); // 44

// Division et affectation
c /= a; // c = c / a = 44 / 11
console.log(c); // 4
```
Enregistrez ce code dans un fichier `tests.js` et exécutez-le avec la commande `node tests.js`. Vous verrez que les résultats des opérations s'affichent dans la console.

### 7.3 Opérateurs de Comparaison

Les opérateurs de comparaison sont utilisés pour comparer deux valeurs.

- **Égal à (==)** : Vérifie si les valeurs de deux opérandes sont égales. Mais attention si vous venez à comparer un nombre et une chaîne de caractères, JavaScript va convertir la chaîne de caractères en nombre parce que l'opérateur == en JavaScript est un opérateur d'égalité faible (ou égalité avec conversion de type). Lorsque vous utilisez ==, JavaScript tente de convertir les types pour les rendre comparables.
- **Strictement égal à (===)**: Vérifie si les valeurs et les types de deux opérandes sont identiques. Et là, pas de conversion de type: on compare les valeurs et les types.
- **Différent de (!=)** : Vérifie si les valeurs de deux opérandes ne sont pas égales.
- **Strictement différent de (!==)** : Vérifie si les valeurs ou les types de deux opérandes ne sont pas identiques.
- **Supérieur à (>)**: Vérifie si la valeur de l'opérande de gauche est supérieure à celle de droite.
- **Inférieur à (<)**: Vérifie si la valeur de l'opérande de gauche est inférieure à celle de droite.
- **Supérieur ou égal à (>=)**: Vérifie si la valeur de l'opérande de gauche est supérieure ou égale à celle de droite.
- **Inférieur ou égal à (<=)**: Vérifie si la valeur de l'opérande de gauche est inférieure ou égale à celle de droite.

```javascript
let x = 5,
  y = "5",
  z = 6;

// Égal à
console.log(x == y); // affichera true, car la valeur est la même après conversion de type (5 == 5) La chaîne de caractères "5" est convertie en nombre
//Ou encore
if (x == y) {
  console.log("x est égal à y");
} else {
  console.log("x n'est pas égal à y");
}

// Strictement égal à
console.log(x === y); // false, car le type diffère.
//Ou encore
if (x === y) {
  console.log("x est strictement égal à y");
} else {
  console.log("x n'est pas strictement égal à y");
}

// Différent de
console.log(x != z); // true
console.log(x != y); // false
//Ou encore
if (x != z) {
  console.log("x est différent de z");
} else {
  console.log("x n'est pas différent de z");
}
if (x != y) {
  console.log("x est différent de y");
} else {
  console.log("x n'est pas différent de y");
}

// Strictement différent de
console.log(x !== y); // true
//Ou encore
if (x !== y) {
  console.log("x est strictement différent de y");
} else {
  console.log("x n'est pas strictement différent de y");
}

// Supérieur à, inférieur à
console.log(z > x); // true
console.log(x < z); // true
console.log(x > y); // false

// Supérieur ou égal à, inférieur ou égal à
console.log(x >= 5); // true
console.log(z <= 5); // false
```
Enregistrez ce code dans un fichier `tests.js` et exécutez-le avec la commande `node tests.js`. Vous verrez que les résultats des comparaisons s'affichent dans la console sour forme de `true` ou `false`.

Notons que >, <, >= et <= convertissent les chaînes de caractères en nombres pour les comparer à des nombres si c'est possible.

Ce qui poser problème... On peut palier au problème de cette manière:

```javascript
if (typeof x === typeof y && x >= y) {
  console.log("x est supérieur ou égal à y");
} else {
  console.log("x n'est pas supérieur ou égal à y");
}
```

Ici, on vérifie d'abord que les types des variables x et y sont les mêmes, et ensuite on compare les valeurs. On sera sûr que les types sont les mêmes et que la comparaison se fera correctement.

Maintenant

Voilà un exemple de code qui montre le problème d'un langage de programmation faiblement typé. C'est pour cela que TypeScript a été créé.

### 7.4 Opérateurs logiques

```javascript
let condition1 = 10 > 5; // true
let condition2 = 9 == 4; // false
let annee = 2024;
let estBissextile = annee % 4 == 0 && (annee % 100 != 0 || annee % 400 == 0); // true

// ET logique
console.log(condition1 && condition2); // false
console.log()

// OU logique
console.log(condition1 || condition2); // true

// NON logique
console.log(!condition1); // false

// 2024 est-elle une année bissextile ?
console.log(annee + " est-elle une année bissextile ? " + estBissextile); // true
```
Dans le code précédent, peut-être que vous êtes surpris de voir des opérateurs logiques dans des variables. C'est tout à fait possible en JavaScript et dans d'autres langages. Les opérateurs logiques renvoient des valeurs booléennes (true ou false), et on peut les stocker dans des variables.

Enregistrez ce code dans un fichier `tests.js` et exécutez-le avec la commande `node tests.js`. Vous verrez que le résultat de chaque opération logique s'affiche dans la console.

Généralement nous les utilisons dans des conditions, mais on peut les stocker dans des variables mais je reprendrai cet exemple lorsque je verrai les conditions. ;-)

### 7.5 Opérateurs de concaténation

L'opérateur de concaténation (+) est utilisé pour concaténer (c'est-à-dire joindre) deux chaînes de caractères. Par exemple:

```javascript
let prenom = "Johnny";
let nom = "Piette";
console.log(prenom + " " + nom); // Johnny Piette
```
Enregistrez ce code dans un fichier `tests.js` et exécutez-le avec la commande `node tests.js`. Vous verrez que le résultat de chaque opération logique s'affiche dans la console.

### 7.6 L'interpolation de chaînes de caractères
Si on veut insérer des variables dans une chaîne de caractères, on peut utiliser l'interpolation de chaînes de caractères. C'est-à-dire qu'on peut insérer des variables dans une chaîne de caractères. Ce qui permet d'éviter d'utiliser l'opérateur de concaténation (+). Par exemple:

```javascript
let prenom = "Johnny";
let nom = "Piette";
let age = 30; //Faut bien trouver des moyens pour se rajeunir ;-)

// Avec l'interpolation de chaînes de caractères
console.log(`Tu t'appelles ${prenom} ${nom} a ${age} ans.`); // Johnny Piette a 30 ans.

// Avec l'opérateur de concaténation +
console.log('Tu t\'appelles ' + prenom + ' ' + nom + ' a ' + age + ' ans.'); // Johnny Piette a 30 ans.
```
Enregistrez ce code dans un fichier `tests.js` et exécutez-le avec la commande `node tests.js`. Vous verrez que le résultat de chaque opération logique s'affiche dans la console.

Analysons maintenant comment fonctionne l'interpolation de chaînes de caractères. On utilise des backticks (``) pour délimiter la chaîne de caractères. On utilise ensuite ${uneVariable} pour insérer une variable dans la chaîne de caractères. C'est beaucoup plus lisible que l'opérateur de concaténation (+).

## 8. Structures de contrôle (if, else, switch, boucles for, while)
Elles permettent de conditionner l'exécution de code. Par exemple, si une condition est vraie, on exécute un bloc de code, sinon on exécute un autre bloc de code. On peut aussi exécuter un bloc de code plusieurs fois avec une boucle.
### 8.1 if, else
La structure de contrôle `if` est utilisée pour exécuter un bloc de code si une condition est vraie. Si la condition est fausse, un bloc de code différent peut être exécuté via la structure de contrôle `else`.
#### 8.1.1 Syntaxe
La syntaxe de la structure de contrôle `if` est la suivante:
```javascript
if (condition) {
  // Code à exécuter si la condition est vraie
} else {
  // Code à exécuter si la condition est fausse
}
```
Où `condition` est une expression qui est évaluée. Si la condition est vraie, le bloc de code dans les accolades après `if` est exécuté. Sinon, le bloc de code dans les accolades après `else` est exécuté.

#### 8.1.2 if
La structure de contrôle `if` permet d'exécuter un bloc de code si une condition est vraie. Par exemple:
```javascript
let age = 18;
if (age >= 18) {
  console.log("Vous êtes majeur");
}
```
Le code ci-dessus affiche "Vous êtes majeur" si la variable `age` est supérieure ou égale à 18.

#### 8.1.3 else
A contrario, la structure de contrôle `else` permet d'exécuter un bloc de code si la condition de `if` est fausse. Par exemple:
```javascript
let age = 15;
if (age >= 18) {
  console.log("Vous êtes majeur");
} else {
  console.log("Vous êtes mineur");
}
```
Enregistrez ce code dans un fichier `tests.js` et exécutez-le avec la commande `node tests.js`. Vous verrez que le message "Vous êtes mineur" s'affiche dans la console.

Changez la valeur de la variable `age` à 20 et exécutez le code à nouveau. Vous verrez que le message "Vous êtes majeur" s'affiche dans la console.

#### 8.1.4 Opérateurs logiques dans les conditions
Nous pouvons biensûr utiliser des opérateurs de comparaison et logiques dans les conditions des structures de contrôle `if` et `else`

Par exemple utilisation de l'opérateur logique `&&` (ET) dans une condition:
```javascript
let age = 15;
let sexe = "F";
if (age >= 18 && sexe === "M") {
  console.log("Vous êtes un homme majeur.");
} else if (age >= 18 && sexe === "F") {
  console.log("Vous êtes une femme majeure.");
} else {
  console.log("Vous êtes mineur(e).");
}
```
Ajoutez ou modifier le fichier `tests.js` avec le code précédent et exécutez-le avec la commande `node tests.js`.
- Que donne ce résultat de ce code ?

Notez que pour ce simple code, on peut aussi le voir écrit sous cette forme:
```javascript
let age = 15;
let sexe = "F";

if (age >= 18) {
  if(sexe === "M") {
    console.log("Vous êtes un homme majeur.");
  } else if (sexe ==="F") {
    console.log("Vous êtes une femme majeure.");
  }
} else {
  console.log("Vous êtes mineur(e)."); // Pour éviter le (e) on pourrait aussi tester le sexe ici
}
```

En pseudo-code ça donne:
```text
SI (age >= 18):
  SI (sexe === "M"):
    Affiche("Vous êtes un homme majeur.")
  SINON (SI sexe === "F"):
    Affiche("Vous êtes une femme majeure.")
SINON: // Ce sinon porte sur le premier SI
  Affiche("Vous êtes mineur(e).")
```
Le choix de vos conditions dépend de ce que vous voulez faire. Dans le cas présent, les deux codes donnent le même résultat. Je préfère le second code car on montre bien qu'on teste d'abord si la personne est majeure, et ensuite on teste le sexe. Nous avons deux blocs distincts pour les deux tests. C'est plus clair dans certains cas. Mais on rentre ici dans la subjectivité. C'est à vous de voir ce qui vous convient le mieux.

#### 8.1.5 Exemple avec les années bissextiles
On va reprendre l'exemple avec les années bissextiles:
```javascript
let annee = 2024;
let estBissextile = annee % 4 == 0 && (annee % 100 != 0 || annee % 400 == 0); // true
console.log(annee + " est-elle une année bissextile ? " + estBissextile); // true
```

On va maintenant utiliser la structure if/else pour vérifier si l'année est bissextile.
```javascript
let annee = 2024;
if (annee % 4 == 0 && (annee % 100 != 0 || annee % 400 == 0)) {
  console.log(annee + " est une année bissextile");
} else {
  console.log(annee + " n'est pas une année bissextile");
}
```
ou bien on reprend la variable EstBissextile

```javascript
let annee = 2024;
let estBissextile = annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0); // true
if (estBissextile) {
  console.log(annee + " est une année bissextile");
} else {
  console.log(annee + " n'est pas une année bissextile");
}
```
Vous pourriez vous poser la question de l'intérêt de stocker le résultat dans une variable. C'est pour une question de lisibilité du code. On sait tout de suite ce que fait le code. On sait que la variable estBissextile contient le résultat de la condition. C'est plus clair que de mettre la condition directement dans le if.

Mais évidemment, au niveau clareté, on pourrait/devrait aussi faire une fonction pour vérifier si une année est bissextile. On verra cela plus tard. Donc je fais avec ce que vous connaissez déjà. ;-)


### 8.2 switch
La structure de contrôle `switch` est utilisée pour sélectionner l'une des nombreuses options. Elle est similaire à une série de déclarations `if` sur la même condition. Utilisez `switch` pour sélectionner l'une des nombreuses options.

La syntaxe de la structure de contrôle `switch` est la suivante:
```javascript
switch (expression) {
  case valeur1:
    // Code à exécuter si expression est égale à valeur1
    break;
  case valeur2:
    // Code à exécuter si expression est égale à valeur2
    break;
  case valeur3:
    // Code à exécuter si expression est égale à valeur3
    break;
  default:
    // Code à exécuter si expression n'est égale à aucune des valeurs
}
```
Où `expression` est une expression qui est évaluée. La valeur de l'expression est comparée à la valeur de chaque `case`. Si une correspondance est trouvée, le bloc de code associé est exécuté. Si aucune correspondance n'est trouvée, le bloc de code dans le `default` est exécuté.

Par exemple:
```javascript
let jour = "lundi";
switch (jour) {
  case "lundi":
    console.log("C'est le premier jour de la semaine");
    break;
  case "mardi":
    console.log("C'est le deuxième jour de la semaine");
    break;
  case "mercredi":
    console.log("C'est le troisième jour de la semaine");
    break;
  case "jeudi":
    console.log("C'est le quatrième jour de la semaine");
    break;
  case "vendredi":
    console.log("C'est le cinquième jour de la semaine");
    break;
  case "samedi":
    console.log("C'est le sixième jour de la semaine");
    break;
  case "dimanche":
    console.log("C'est le septième jour de la semaine");
    break;
  default:
    console.log("Ce n'est pas un jour de la semaine");
}
```
Enregistrez ce code dans un fichier `tests.js` et exécutez-le avec la commande `node tests.js`. Vous verrez que le message "C'est le premier jour de la semaine" s'affiche dans la console.

## 9. Les Fonctions
<!-- déclaration, expression, fléchées, portée, hoisting-->
Si on reprend le code sur les années bissextiles, on pourrait le transformer en fonction. Cela permettrait de réutiliser le code pour d'autres années et plus pour une année en particulier.

### 9.1 Déclaration de fonction
La déclaration de fonction est la manière la plus courante de déclarer une fonction en JavaScript. Par exemple:

```javascript
function nomDeLaFonction(parametre1, parametre2, ...) {
  // Code à exécuter
}
```

Où nomDeLaFonction est le nom de la fonction, et parametre1, parametre2, ... sont les paramètres de la fonction.

### 9.2 Fonction qui ne retourne rien / void
Une fonction peut ne pas retourner de valeur. Généralement, on utilise ce type de fonction pour exécuter un bloc de code, faire un traitement, etc. Par exemple:

```javascript
function afficherBonjour() {
  console.log("Bonjour");
}
```
La fonction `afficherBonjour` ne retourne rien. Elle affiche simplement "Bonjour" dans la console.

### 9.3 Fonction qui retourne une valeur / return
Une fonction peut retourner une valeur. Généralement, on utilise ce type de fonction pour effectuer un calcul, une opération, un booléen, etc. Par exemple:

```javascript
function additionner(a, b) {
  return a + b;
}
```
La fonction `additionner` retourne la somme des paramètres `a` et `b`.

Reprenons l'exemple de l'année bissextile. On pourrait le transformer en fonction. Cela permettrait de réutiliser le code pour d'autres années et plus pour une année en particulier.


```javascript
function estBissextile(annee) {
  let bissextile = false;

  if (annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0)){
    bissextile = true;
  }

  return bissextile;
}

let annee = 2024;
if (estBissextile(annee)) {
  console.log(annee + " est une année bissextile");
} else {
  console.log(annee + " n'est pas une année bissextile");
}
```
La fonction `estBissextile` prend un paramètre `annee` et retourne `true` si l'année est bissextile, sinon elle retourne `false`.

Notez qu'il n'y a pas de else car bissextile est initialisé à `false`. Si la condition est vraie, on met bissextile à `true` et on retourne `true`. Sinon, on retourne `false` qui est la valeur par d'intialisation de bissextile.

Dans l'exemple précédent on voit qu'il est possible de faire autrement et directement retourner le résultat de la condition. 

```javascript
function estBissextile(annee) {
  return annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0);
}
```
C'est plus court et plus clair (c'est subjectif). On sait tout de suite que la fonction retourne le résultat de la condition.

On peut se permettre cela car le résultat de la condition est un booléen. Si on avait eu un résultat plus complexe, on aurait utilisé une variable pour stocker le résultat. Et on aurait retourné la variable.

### 9.4 Les early return
Les early return sont des retours anticipés. C'est à dire qu'on retourne directement le résultat de la condition si on sait que le reste du code ne sera pas exécuté. Par exemple:

```javascript
function estBissextile(annee) {
  if (annee % 400 === 0) return true;
  if (annee % 100 === 0) return false;
  return annee % 4 === 0;
}
```
- Si l'année est divisible par 400, on retourne directement `true`. On sait que le reste du code ne sera pas exécuté.
- Si l'année est divisible par 100, on retourne directement `false`. On sait que le reste du code ne sera pas exécuté.
- Si l'année est divisible par 4, on retourne `true` sinon on retourne `false`.



On peut utiliser aussi les early return. C'est à dire qu'on retourne directement le résultat de la condition si on sait que le reste du code ne sera pas exécuté. Par exemple:

Si on repend le code complet de l'année bissextile, on a:
```javascript
function estBissextile(annee) {
  return annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0);
}

let annee = 2024;

if (estBissextile(annee)) {
  console.log(annee + " est une année bissextile");
} else {
  console.log(annee + " n'est pas une année bissextile");
}
```
Enregistrez ce code dans un fichier `tests.js` et exécutez-le avec la commande `node tests.js`. Vous verrez que le message "C'est le premier jour de la semaine" s'affiche dans la console.

### 9.5 Les fonctions anonymes
Cette partie est un peu plus avancée et si vous ne la comprenez pas, ce n'est pas grave. Vous pouvez la sauter. C'est juste pour vous montrer qu'il existe plusieurs manières de déclarer des fonctions en JavaScript. Elles seront fort utilies lorsque vous utiliserez des librairies comme React, Angular, Vue, etc. 

#### 9.5.1 Fonction anonyme dans une variable
Une fonction anonyme est une fonction sans nom. Elle peut être stockée dans une variable. Par exemple:

```javascript
let additionner = function(a, b) {
  return a + b;
}

let somme = additionner(5, 3);
console.log(somme); // 8
```
Ou bien notre exemple de l'année bissextile:
```javascript
let estBissextile = function(annee) {
  return annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0);
}
```

#### 9.5.2 Fonction anonyme en paramètre de fonction
On peut avoir une fonction qui reçoit comme paramètre de fonction une fonction. Cette fonction peut être une fonction nommée ou anonyme. C'est ce qu'on appelle les fonctions de callback si elle est utilisée dans la fonction.

Par exemple:
```javascript
function afficherMessage(callback) {
  console.log("Début du message");
  callback();
  console.log("Fin du message");
}

afficherMessage(function() {
  console.log("Bonjour");
});

afficherMessage(function() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
});
```
Ce code va d'abord appeler la fonction `afficherMessage` avec une fonction anonyme qui affiche "Bonjour".
Dans l'ordre, le code affichera:
```text
Début du message
Bonjour
Fin du message
```
Puis, le code va appeler la fonction `afficherMessage` avec une fonction anonyme qui affiche les nombres de 0 à 4.
Dans l'ordre, le code affichera:
```text
Début du message
0
1
2
3
4
Fin du message
```

Prenons un autre exemple avec la fonction map. La fonction map permet de transformer un tableau en un autre tableau. Par exemple, on peut transformer un tableau de nombres en un tableau de nombres multipliés par 2. Par exemple:

```javascript
let nombres = [1, 2, 3, 4, 5];
console.log("Valeurs initiales:"+nombres); // [1, 2, 3, 4, 5]
let nombresMultipliesPar2 = nombres.map(function(nombre) {
  return nombre * 2;
});
console.log("Valeurs multipliées par deux:"+nombresMultipliesPar2); // [2, 4, 6, 8, 10]      
```
Dans ce code, la fonction map prend une fonction anonyme en paramètre. Cette fonction anonyme est appelée pour chaque élément du tableau `nombres`. Elle reçoit de map, le paramètre `nombre` qui est un élément du tableau `nombres`. Elle multiplie chaque élément par 2 et retourne le résultat. La fonction map retourne un nouveau tableau avec les valeurs transformées. C'est donc extrèmement puissant.

Nous aurions pu écrire la fonction anonyme en dehors de la fonction map et en faire une fonction nommée. Par exemple:

```javascript
function multiplierPar2(nombre) {
  return nombre * 2;
}

let nombres = [1, 2, 3, 4, 5];
console.log("Valeurs initiales:"+nombres); // [1, 2, 3, 4, 5]

let nombresMultipliesPar2 = nombres.map(multiplierPar2);
console.log("Valeurs multipliées par deux:"+nombresMultipliesPar2); // [2, 4, 6, 8, 10]      ```
```

Enregistrez ce code dans un fichier `tests.js` et exécutez-le avec la commande `node tests.js`. Vous verrez que les valeurs initiales et les valeurs multipliées par deux s'affichent dans la console.

#### 9.5.3 Conclusion
Les fonctions anonymes sont très utilisées en JavaScript. Elles permettent de passer des fonctions en paramètres d'autres fonctions. C'est très pratique pour les fonctions de callback. Les fonctions de callback sont des fonctions qui sont appelées par d'autres fonctions. Par exemple, la fonction `map` utilise une fonction de callback pour transformer un tableau en un autre tableau.

Les fonctions anonymes sont aussi utilisées pour les événements dans les pages web. Par exemple, on peut attacher une fonction anonyme à un bouton pour exécuter un bloc de code lorsqu'on clique sur le bouton.

Les fonctions anonymes sont aussi utilisées pour les librairies comme React, Angular, Vue, etc. On peut passer des fonctions anonymes en paramètres de fonctions pour effectuer des traitements.


L'asynchronisme est un concept qui permet d'exécuter plusieurs tâches en même temps. C'est à dire que le code ne bloque pas l'exécution du reste du code. Par exemple, on peut appeler une API pour récupérer des données. On utilise des fonctions de callback pour traiter les données une fois qu'elles sont récupérées. De cette manière, le code ne bloque pas l'exécution du reste du code. C'est ce qu'on appelle le non-blocage de l'exécution du code.

Bref, les fonctions anonymes sont très utilisées en JavaScript mais pas que. En PHP, Python, Java, C#, etc. on utilise aussi des fonctions anonymes. Nous les verrons plus tard dans le cours de Laravel pour créer nos routes.

Petit sneak preview:
```php
Route::get('/', function () {
    return "Salut ! Bienvenue sur ce site !";
});
```
Ce code est en PHP et plus précisément dans le framework Laravel. On voit bien qu'on utilise une fonction anonyme pour définir la route `/`. Cette route retourne "Salut ! Bienvenue sur ce site !". C'est un exemple de fonction anonyme en PHP.



### 9.6 Les fonctions fléchées
Les fonctions fléchées sont une autre manière de déclarer des fonctions en JavaScript. Elles sont plus courtes et plus claires que les fonctions classiques.
On va utiliser les symboles `=>` pour déclarer une fonction fléchée. Cette utilisation permettra de gagner en lisibilité du code car déjà on ne doit pas écrire le mot-clé `function`. On peut aussi omettre les accolades si la fonction ne contient qu'une seule instruction.

La syntaxe des fonctions fléchées est la suivante:
```javascript
let variable = (param1, param2, ...) => {
  // Code à exécuter
}

let variable2 = param => {
  // Code à exécuter
}

let variable3 = () => { // () si la fonction ne contient pas de paramètres
  // Code à exécuter
}

let variable4 = param => param * 2; // Si la fonction ne contient qu'une seule instruction: pas besoin d'accolades
```
Où `variable` est le nom de la variable qui contient la fonction, et `param1, param2, ...` sont les paramètres de la fonction.

Donc, notre variable est une fonction. Bizarre hein ? Mais c'est comme ça en JavaScript. On peut stocker une fonction dans une variable. C'est une fonction anonyme. C'est à dire qu'elle n'a pas de nom. On peut l'appeler avec le nom de la variable.

Notre exemple de l'année bissextile avec une fonction fléchée:
```javascript
let estBissextile = annee => annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0);
let annee = 2024;

if (estBissextile(annee)) {
  console.log(annee + " est une année bissextile");
} else {
  console.log(annee + " n'est pas une année bissextile");
}
```

## 10. Portée des variables
La portée d'une varible est la portée dans laquelle une variable est accessible. C'est à dire l'endroit où une variable peut être utilisée et connue.

En JavaScript, il existe deux types de portée des variables.

### 10.1 Portée globale
Une variable déclarée en dehors d'une fonction a une portée globale. Elle est accessible partout dans le script.

```javascript
let nom = "Piette"; // Portée globale
let prenom = "Johnny"; // Portée globale

function afficherNomComplet() {
  console.log(prenom + " " + nom); // Affiche "Johnny Piette"
}
```
On voit donc que les variables nom et prenom sont accessibles dans la fonction `afficherNomComplet`.

### 10.2 Portée locale
Une variable déclarée à l'intérieur d'une fonction a une portée locale. Elle n'est accessible qu'à l'intérieur de la fonction.

On pourrait faire de la trucologgie et créer un bloc de code pour limiter la portée d'une variable. C'est possible en JavaScript, mais je ne vais pas vous embêter avec cela. C'est une fonctionnalité qui n'est pas souvent utilisée.

Exemple de portée locale:

```javascript

afficherNomComplet(); // Affiche "Johnny Piette"
console.log(prenom); // Erreur: Uncaught ReferenceError: prenom is not defined

function afficherNomComplet() {
  let nom = "Piette"; // Portée locale
  let prenom = "Johnny"; // Portée locale
  console.log(prenom + " " + nom); // Affiche "Johnny Piette"
}
```
Dans le code précédent, les variables nom et prenom sont déclarées à l'intérieur de la fonction `afficherNomComplet`. Elles ont donc une portée locale. Elles ne sont pas accessibles en dehors de la fonction `afficherNomComplet`.

Le code `console.log(prenom);` génère une erreur car la variable prenom n'est pas accessible en dehors de la fonction `afficherNomComplet`.

## 11. Les tableaux
Un tableau est une structure de données qui permet de stocker plusieurs valeurs dans une seule variable. Les valeurs sont stockées dans des cases. Chaque case a un index qui permet d'accéder à la valeur.

### 11.1 Déclaration d'un tableau
Un tableau est déclaré en utilisant des crochets `[]`. Par exemple:

```javascript
let fruits = ["pomme", "banane", "orange"];
```
Dans ce code, le tableau `fruits` contient trois éléments: "pomme", "banane" et "orange".

### 11.2 Accès aux éléments d'un tableau
Les éléments d'un tableau sont accessibles en utilisant leur index. L'index d'un tableau commence à 0. Par exemple:

```javascript
let fruits = ["pomme", "banane", "orange"];
console.log(fruits[0]); // Affiche "pomme"
console.log(fruits[1]); // Affiche "banane"
console.log(fruits[2]); // Affiche "orange"
```
Dans ce code, `fruits[0]` renvoie "pomme", `fruits[1]` renvoie "banane" et `fruits[2]` renvoie "orange".

### 11.3 Modifier un élément d'un tableau
Pour modifier un élément d'un tableau, on utilise son index. Par exemple:

```javascript
let fruits = ["pomme", "banane", "orange"];
fruits[1] = "kiwi";
console.log(fruits); // Affiche ["pomme", "kiwi", "orange"]
```
Dans ce code, `fruits[1]` est modifié pour contenir "kiwi" au lieu de "banane".

### 11.4 Ajouter un élément à un tableau
Pour ajouter un élément à un tableau, on utilise la méthode `push()`. Par exemple:

```javascript
let fruits = ["pomme", "banane", "orange"];
fruits.push("kiwi");
console.log(fruits); // Affiche ["pomme", "banane", "orange", "kiwi"]
```
Dans ce code, la méthode `push()` ajoute l'élément "kiwi" à la fin du tableau `fruits`.

### 11.5 Supprimer un élément d'un tableau
Pour supprimer un élément d'un tableau, on utilise la méthode `splice()`. Par exemple:

```javascript
let fruits = ["pomme", "banane", "orange"];
fruits.splice(1, 1);
console.log(fruits); // Affiche ["pomme", "orange"]
```
Dans ce code, la méthode `splice(1, 1)` supprime un élément à partir de l'index 1. Le deuxième paramètre de `splice()` est le nombre d'éléments à supprimer.

### 11.6 Parcourir un tableau
Pour parcourir un tableau, on utilise une boucle `for`. Par exemple:

```javascript
let fruits = ["pomme", "banane", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```
Dans ce code, la boucle `for` parcourt le tableau `fruits` et affiche chaque élément.

## 12. Les boucles
Les boucles sont utilisées pour exécuter un bloc de code plusieurs fois. Il existe plusieurs types de boucles en JavaScript, dont les plus courantes sont les boucles `for` et `while`.

Mais il en existe d'autres comme la boucle `do...while` et la boucle `for...in`. Nous allons voir les boucles `for` et `while`.

foreach est une méthode de parcours des tableaux. On verra cela plus tard.

### 12.1 Boucle for
La boucle `for` est utilisée pour exécuter un bloc de code un nombre spécifié de fois. Par exemple:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
Dans ce code, la boucle `for` exécute le bloc de code 5 fois. La variable `i` est initialisée à 0. Tant que `i` est inférieur à 5, le bloc de code est exécuté. Après chaque exécution du bloc de code, `i` est incrémenté de 1.

### 12.2 Boucle while
La boucle `while` est utilisée pour exécuter un bloc de code tant qu'une condition est vraie. Par exemple:

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
Dans ce code, la boucle `while` exécute le bloc de code tant que `i` est inférieur à 5. Après chaque exécution du bloc de code, `i` est incrémenté de 1.

### 12.3 Boucle do...while
La boucle `do...while` est une variante de la boucle `while`. La différence est que la boucle `do...while` exécute le bloc de code une fois avant de vérifier la condition. Par exemple:

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```
Dans ce code, la boucle `do...while` exécute le bloc de code une fois, puis vérifie la condition. Tant que `i` est inférieur à 5, le bloc de code est exécuté.

### 12.4 Boucle for...in
La boucle `for...in` est utilisée pour parcourir les propriétés d'un objet. Par exemple:

```javascript
let personne = {
  prenom: "Johnny",
  nom: "Piette",
  age: 30
};

for (let propriete in personne) {
  console.log(propriete + ": " + personne[propriete]);
}
```

### 12.5 Boucles foreach
Pour parcourir un tableau on peut utiliser une boucle for. Cependant, js propose une autre méthode élégante pour le parcourir la méthode forEach.

```js
var nombres = [1, 2, 3, 4, 5];

nombres.forEach(function(nombre) {
    console.log(nombre);
});
```
Ce code va parcourir tous les éléments du tableau et exécuter la fonction anonyme qui reçoit comme paramètre l'élément en cours `nombre`. C'est super génial vous ne trouvez pas ? :-)



[:arrow_left: Revenir au menu principal.](../README.md#sommaire)

---

&copy; 2024 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).  
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._
