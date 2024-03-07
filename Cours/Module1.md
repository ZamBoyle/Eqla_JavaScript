
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
- [4. Opérateurs (arithmétiques, d'affectation, de comparaison, logiques)](#4-opérateurs-arithmétiques-daffectation-de-comparaison-logiques)
  - [4.1 Opérateurs arithmétiques](#41-opérateurs-arithmétiques)
  - [4.2 Opérateurs d'affectation](#42-opérateurs-daffectation)
  - [4.3 Opérateurs de Comparaison](#43-opérateurs-de-comparaison)
  - [4.4 Opérateurs logiques](#44-opérateurs-logiques)
  - [4.5 Opérateurs de concaténation](#45-opérateurs-de-concaténation)

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

Rappelez-vous notre lors de notre introduction où nous avons dit que JavaScript est un langage de programmation faiblement typé. Cela signifie que les variables peuvent changer de type. C'est pour cette raison que TypeScript a été créé.

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

## 4. Opérateurs (arithmétiques, d'affectation, de comparaison, logiques)
Les opérateurs sont utilisés pour effectuer des opérations sur des variables et des valeurs. JavaScript possède plusieurs types d'opérateurs, dont les plus courants sont les opérateurs arithmétiques, d'affectation, de comparaison et logiques.
### 4.1 Opérateurs arithmétiques
Les opérateurs arithmétiques sont utilisés pour effectuer des opérations mathématiques.

- **Addition (+)** : Additionne deux valeurs.
- **Soustraction (-)** : Soustrait la valeur de droite de celle de gauche.
- **Multiplication (*)** : Multiplie deux valeurs.
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
console.log(a % b); // 0

// Incrémentation
a++;
console.log(a); // 11

// Décrémentation
b--;
console.log(b); // 4
```

### 4.2 Opérateurs d'affectation
Les opérateurs d'affectation sont utilisés pour attribuer des valeurs à des variables JavaScript.

- **Affectation simple (=)** : Attribue la valeur de droite à l'opérande de gauche.
- **Addition et affectation (+=)** : Ajoute la valeur de droite à la variable de gauche et assigne le résultat à cette variable.
- **Soustraction et affectation (-=)** : Soustrait la valeur de droite de la variable de gauche et assigne le résultat.
- **Multiplication et affectation (*=)** : Multiplie la variable de gauche par la valeur de droite et assigne le résultat.
- **Division et affectation (/=)** : Divise la variable de gauche par la valeur de droite et assigne le résultat.

```javascript
let c = 10;

// Affectation simple
c = b; // c est maintenant 4

// Addition et affectation
c += a; // c = c + a
console.log(c); // 15

// Soustraction et affectation
c -= a; // c = c - a
console.log(c); // 5

// Multiplication et affectation
c *= a; // c = c * a
console.log(c); // 110

// Division et affectation
c /= a; // c = c / a
console.log(c); // 11
```

### 4.3 Opérateurs de Comparaison
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
let x = 5, y = "5", z = 6;

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
Notons que >, <, >= et <= convertissent les chaînes de caractères en nombres pour les comparer. Par exemple, "6" > "5" est vrai car "6" est converti en 6 et "5" est converti en 5.

Ce qui poser problème... On peut palier au problème de cette manière:
```javascript
if ((typeof x === typeof y) && x >= y) {
  console.log("x est supérieur ou égal à y");
} else {
  console.log("x n'est pas supérieur ou égal à y");
}
```
Ici, on vérifie d'abord que les types des variables x et y sont les mêmes, et ensuite on compare les valeurs. On sera sûr que les types sont les mêmes et que la comparaison se fera correctement.

Voilà un exemple de code qui montre le problème d'un langage de programmation faiblement typé. C'est pour cela que TypeScript a été créé.

### 4.4 Opérateurs logiques

```javascript
let condition1 = true;
let condition2 = false;

// ET logique
console.log(condition1 && condition2); // false

// OU logique
console.log(condition1 || condition2); // true

// NON logique
console.log(!condition1); // false
```

### 4.5 Opérateurs de concaténation
L'opérateur de concaténation (+) est utilisé pour concaténer (c'est-à-dire joindre) deux chaînes de caractères. Par exemple:
```javascript
let prenom = "Johnny";
let nom = "Piette";
console.log(prenom + " " + nom); // Johnny Piette
```















[:arrow_left: Revenir au menu principal.](../README.md#sommaire)

--- 
&copy; 2024 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).   
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._
