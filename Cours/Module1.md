
[:arrow_left: Revenir au menu principal.](../README.md#sommaire)
<h1 id="sommaire" style="display: flex; align-items: center; justify-content: center;">
    <img src="/Assets/eqla.png" style="height:50px">
    &nbsp;Module 1: Fondamentaux de JavaScript
</h1>


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [1. Objectif](#1-objectif)
- [2. Afficher un message](#2-afficher-un-message)
  - [2.1 la fonction `alert()`](#21-la-fonction-alert)
  - [2.2 la fonction `console.log()`](#22-la-fonction-consolelog)
  - [2.3 la propriété `innerHTML`](#23-la-propriété-innerhtml)
- [2. Types de données](#2-types-de-données)
- [3. Variables](#3-variables)
  - [3.1 Naming convention Variables et fonctions](#31-naming-convention-variables-et-fonctions)
  - [3.2 var, let et const](#32-var-let-et-const)
  - [3.3 Déclarer plusieurs variables](#33-déclarer-plusieurs-variables)
  - [3.4 Déclarer une variable sans lui affecter de valeur](#34-déclarer-une-variable-sans-lui-affecter-de-valeur)
  - [3.5 Résumons](#35-résumons)

<!-- /code_chunk_output -->


## 1. Objectif
Il vise en premier à expliquer comment ajouter du JavaScript à une page web, puis à introduire les concepts de base de JavaScript, permettant aux participants de comprendre les structures fondamentales du langage, telles que les variables, les types de données, les structures de contrôle, et les fonctions. L'accent sera mis sur la pratique avec des exercices d'application pour chaque concept.

## 2. Afficher un message
Si on veut afficher un message à l'utilisateur nous avons plusieurs possibilités:

### 2.1 la fonction `alert()`
La fonction `alert()` affiche une boîte de dialogue avec un message et un bouton "OK". Par exemple:
```javascript
alert('Hello les BlindCoders!');
```
Le problème avec cette fonction c'est qu'elle est bloquante, c'est-à-dire que l'utilisateur ne peut pas faire autre chose tant qu'il n'a pas cliqué sur le bouton "OK". Elle est donc peu utilisée sauf dans l'apprentissage du JavaScript où l'on veut afficher rapidement un message à l'utilisateur. 

### 2.2 la fonction `console.log()`
La fonction `console.log()` affiche un message dans la console du navigateur. Par exemple:
```javascript
console.log('Hello les BlindCoders!');
```
Ce message écrira "Hello les BlindCoders!" dans la console du navigateur. Pour ouvrir la console, il suffit de faire un clic droit sur la page web, puis de sélectionner "Inspecter" ou "Inspecter l'élément" (selon le navigateur), puis de cliquer sur l'onglet "Console". Vous pouvez aussi ouvrir la console en appuyant sur la touche F12 de votre clavier.

Si vous utilisez node.js, vous pouvez aussi utiliser `console.log()` pour afficher des messages dans la console de votre terminal.

### 2.3 la propriété `innerHTML`
La propriété `innerHTML` permet de modifier le contenu d'un élément HTML. Par exemple:
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Démo innerHTML</title>
</head>
<body>
  <h1 id="aChanger">Hello !</h1>
  <script>
    document.getElementById("aChanger").innerHTML = "Bonjour les BlindCoders et BlindCodeuses !";
  </script>
</body>
</html>
```
Nous allons voir en détail comment modifier le contenu d'un élément HTML plus tard dans le cours. C'est juste pour vous montrer que c'est possible. Le code js est exécuté après le chargement de la page et changera le contenu de l'élément `h1` avec l'id `aChanger` par "Bonjour les BlindCoders et BlindCodeuses !".

Nous aurions bien entendu pu mettre le code js dans un fichier séparé.

## 2. Types de données
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

## 3. Variables
Une variable est un conteneur pour stocker des données. Vous pouvez utiliser une variable pour stocker des données, et vous pouvez les réutiliser. En JavaScript, on utilise le mot-clé `let` pour déclarer une variable. Nous l'avons vu juste avant.

Par exemple:
```javascript
let prenom = "Johnny";
console.log(prenom); // Affiche "Johnny"
```
Le code ci-dessus déclare une variable `prenom` et lui affecte la valeur "Johnny". Ensuite, on affiche la valeur de la variable `prenom` dans la console.

### 3.1 Naming convention Variables et fonctions
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

### 3.2 var, let et const
Avant ES6 (2015), on utilisait le mot-clé `var` pour déclarer une variable. Mais depuis ES6, on utilise le mot-clé `let` pour déclarer une variable. `var` est toujours utilisé, mais il est déconseillé de l'utiliser. Par contre, on utilise le mot-clé `const` pour déclarer une constante. Une constante est une variable dont la valeur ne peut pas être modifiée. Par exemple:
```javascript
const prenom = "Johnny";
prenom = "Philip"; // Erreur: Assignment to constant variable.
```
Le code ci-dessus déclare une constante `prenom` et lui affecte la valeur "Johnny". Ensuite, on essaie de changer la valeur de la constante `prenom` par "Philip", mais on obtient une erreur car on ne peut pas changer la valeur d'une constante.

### 3.3 Déclarer plusieurs variables
Il est possible de déclarer plusieurs variables en une seule ligne. Par exemple:
```javascript
let prenom = "Johnny", nom = "Piette", age = 30;
console.log(prenom, nom, age); // Affiche "Johnny Piette 30"
```
Le code ci-dessus déclare trois variables `prenom`, `nom` et `age` et leur affecte respectivement les valeurs "Johnny", "Piette" et 30. Ensuite, on affiche les valeurs des variables `prenom`, `nom` et `age` dans la console.

### 3.4 Déclarer une variable sans lui affecter de valeur
Il est possible de déclarer une variable sans lui affecter de valeur. Par exemple:
```javascript
let prenom;
console.log(prenom); // Affiche "undefined"
```
Le code ci-dessus déclare une variable `prenom` sans lui affecter de valeur. Ensuite, on affiche la valeur de la variable `prenom` dans la console. La valeur affichée est "undefined" car la variable `prenom` n'a pas de valeur.

### 3.5 Résumons
On utilise `let` ou `const` pour déclarer des variables.

On utilise `let` pour déclarer des variables dont la valeur peut être modifiée, et `const` pour déclarer des constantes dont la valeur ne peut pas être modifiée. On utilise le camelCase pour nommer les variables et les fonctions.

On n'utilise plus `var` pour déclarer des variables: on utilise `let`.

On peut déclarer plusieurs variables en une seule ligne.

Il est possible de déclarer une variable sans lui affecter de valeur.

On utilise comme naming convention le `camelCase` pour nommer les variables et les fonctions.
















[:arrow_left: Revenir au menu principal.](../README.md#sommaire)

--- 
&copy; 2024 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).   
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._
