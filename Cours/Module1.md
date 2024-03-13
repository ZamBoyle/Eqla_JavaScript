[:arrow_left: Revenir au menu principal.](../README.md#sommaire)

<h1 id="sommaire" style="display: flex; align-items: center; justify-content: center;">
    <img src="/Assets/eqla.png" style="height:50px">
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
- [5. Variables](#5-variables)
  - [5.1 Naming convention Variables et fonctions](#51-naming-convention-variables-et-fonctions)
  - [5.2 var, let et const](#52-var-let-et-const)
  - [5.3 Déclarer plusieurs variables](#53-déclarer-plusieurs-variables)
  - [5.4 Déclarer une variable sans lui affecter de valeur](#54-déclarer-une-variable-sans-lui-affecter-de-valeur)
  - [5.5 Résumons](#55-résumons)
- [6. Opérateurs (arithmétiques, d'affectation, de comparaison, logiques)](#6-opérateurs-arithmétiques-daffectation-de-comparaison-logiques)
  - [6.1 Opérateurs arithmétiques](#61-opérateurs-arithmétiques)
  - [6.2 Opérateurs d'affectation](#62-opérateurs-daffectation)
  - [6.3 Opérateurs de Comparaison](#63-opérateurs-de-comparaison)
  - [6.4 Opérateurs logiques](#64-opérateurs-logiques)
  - [6.5 Opérateurs de concaténation](#65-opérateurs-de-concaténation)
- [7. Structures de contrôle (if, else, switch, boucles for, while)](#7-structures-de-contrôle-if-else-switch-boucles-for-while)
  - [7.1 if, else](#71-if-else)
    - [7.1.1 Syntaxe](#711-syntaxe)
    - [7.1.2 if](#712-if)
    - [7.1.3 else](#713-else)
    - [7.1.4 Opérateurs logiques dans les conditions](#714-opérateurs-logiques-dans-les-conditions)
    - [7.1.5 Exemple avec les années bissextiles](#715-exemple-avec-les-années-bissextiles)
  - [7.2 switch](#72-switch)
- [8. Les Fonctions : déclaration, expression, fléchées, portée, hoisting](#8-les-fonctions--déclaration-expression-fléchées-portée-hoisting)
- [9. Portée des variables](#9-portée-des-variables)
  - [9.1 Portée globale](#91-portée-globale)
  - [9.2 Portée locale](#92-portée-locale)
- [10. Gestion des erreurs et exceptions (try, catch, finally)](#10-gestion-des-erreurs-et-exceptions-try-catch-finally)

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

## 5. Variables

Une variable est un conteneur pour stocker des données. Vous pouvez utiliser une variable pour stocker des données, et vous pouvez les réutiliser. En JavaScript, on utilise le mot-clé `let` pour déclarer une variable. Nous l'avons vu juste avant.

Par exemple:

```javascript
let prenom = "Johnny";
console.log(prenom); // Affiche "Johnny"
```

Le code ci-dessus déclare une variable `prenom` et lui affecte la valeur "Johnny". Ensuite, on affiche la valeur de la variable `prenom` dans la console.

### 5.1 Naming convention Variables et fonctions

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



### 5.2 var, let et const

Avant ES6 (2015), on utilisait le mot-clé `var` pour déclarer une variable. Mais depuis ES6, on utilise le mot-clé `let` pour déclarer une variable. `var` est toujours utilisé, mais il est déconseillé de l'utiliser.

Pour déclarer une constante, on utilise le mot-clé `const`. Une constante est une variable dont la valeur ne peut pas être modifiée. Par exemple:

```javascript
const prenom = "Johnny";
prenom = "Philip"; // Erreur: Assignment to constant variable.
```

Le code ci-dessus déclare une constante `prenom` et lui affecte la valeur "Johnny". Ensuite, on essaie de changer la valeur de la constante `prenom` par "Philip", mais on obtient une erreur car on ne peut pas changer la valeur d'une constante.

### 5.3 Déclarer plusieurs variables

Il est possible de déclarer plusieurs variables en une seule ligne. Par exemple:

```javascript
let prenom = "Johnny",
  nom = "Piette",
  age = 30;
console.log(prenom, nom, age); // Affiche "Johnny Piette 30"
```

Le code ci-dessus déclare trois variables `prenom`, `nom` et `age` et leur affecte respectivement les valeurs "Johnny", "Piette" et 30. Ensuite, on affiche les valeurs des variables `prenom`, `nom` et `age` dans la console.

Personnellement, je préfère déclarer une variable par ligne, mais c'est une question de goût.

### 5.4 Déclarer une variable sans lui affecter de valeur

Il est possible de déclarer une variable sans lui affecter de valeur. Par exemple:

```javascript
let prenom;
console.log(prenom); // Affiche "undefined"
```

Le code ci-dessus déclare une variable `prenom` sans lui affecter de valeur. Ensuite, on affiche la valeur de la variable `prenom` dans la console. La valeur affichée est "undefined" car la variable `prenom` n'a pas de valeur.

### 5.5 Résumons

On utilise `let` ou `const` pour déclarer des variables.

On utilise `let` pour déclarer des variables dont la valeur peut être modifiée, et `const` pour déclarer des constantes dont la valeur ne peut pas être modifiée. On utilise le camelCase pour nommer les variables et les fonctions.

On n'utilise plus `var` pour déclarer des variables: on utilise `let`.

On peut déclarer plusieurs variables en une seule ligne.

Il est possible de déclarer une variable sans lui affecter de valeur.

On utilise comme naming convention le `camelCase` pour nommer les variables et les fonctions.

## 6. Opérateurs (arithmétiques, d'affectation, de comparaison, logiques)

Les opérateurs sont utilisés pour effectuer des opérations sur des variables et des valeurs. JavaScript possède plusieurs types d'opérateurs, dont les plus courants sont les opérateurs arithmétiques, d'affectation, de comparaison et logiques.

### 6.1 Opérateurs arithmétiques

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

### 6.2 Opérateurs d'affectation

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

### 6.3 Opérateurs de Comparaison

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

### 6.4 Opérateurs logiques

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

### 6.5 Opérateurs de concaténation

L'opérateur de concaténation (+) est utilisé pour concaténer (c'est-à-dire joindre) deux chaînes de caractères. Par exemple:

```javascript
let prenom = "Johnny";
let nom = "Piette";
console.log(prenom + " " + nom); // Johnny Piette
```
Enregistrez ce code dans un fichier `tests.js` et exécutez-le avec la commande `node tests.js`. Vous verrez que le résultat de chaque opération logique s'affiche dans la console.

## 7. Structures de contrôle (if, else, switch, boucles for, while)
Elles permettent de conditionner l'exécution de code. Par exemple, si une condition est vraie, on exécute un bloc de code, sinon on exécute un autre bloc de code. On peut aussi exécuter un bloc de code plusieurs fois avec une boucle.
### 7.1 if, else
La structure de contrôle `if` est utilisée pour exécuter un bloc de code si une condition est vraie. Si la condition est fausse, un bloc de code différent peut être exécuté via la structure de contrôle `else`.
#### 7.1.1 Syntaxe
La syntaxe de la structure de contrôle `if` est la suivante:
```javascript
if (condition) {
  // Code à exécuter si la condition est vraie
} else {
  // Code à exécuter si la condition est fausse
}
```
Où `condition` est une expression qui est évaluée. Si la condition est vraie, le bloc de code dans les accolades après `if` est exécuté. Sinon, le bloc de code dans les accolades après `else` est exécuté.

#### 7.1.2 if
La structure de contrôle `if` permet d'exécuter un bloc de code si une condition est vraie. Par exemple:
```javascript
let age = 18;
if (age >= 18) {
  console.log("Vous êtes majeur");
}
```
Le code ci-dessus affiche "Vous êtes majeur" si la variable `age` est supérieure ou égale à 18.

#### 7.1.3 else
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

#### 7.1.4 Opérateurs logiques dans les conditions
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

#### 7.1.5 Exemple avec les années bissextiles
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


### 7.2 switch
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

## 8. Les Fonctions : déclaration, expression, fléchées, portée, hoisting
Si on reprend le code sur les années bissextiles, on pourrait le transformer en fonction. Cela permettrait de réutiliser le code pour d'autres années et plus pour une année en particulier.

```javascript
function estBissextile(annee) {
  let estBissextile = annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0);
  return estBissextile;
}
```
Ici on est passé par une variable pour stocker le résultat de la condition.
C'est bien, mais on peut aussi retourner directement le résultat de la condition.

```javascript
function estBissextile(annee) {
  return annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0);
}
```
C'est plus court et plus clair. On sait tout de suite que la fonction retourne le résultat de la condition.

On peut se permettre cela car le résultat de la condition est un booléen. Si on avait eu un résultat plus complexe, on aurait utilisé une variable pour stocker le résultat. Et on aurait retourné la variable.

Mais, faites comme vous le sentez. C'est une question de goût. ;-)

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

## 9. Portée des variables
La portée d'une varible est la portée dans laquelle une variable est accessible. C'est à dire l'endroit où une variable peut être utilisée et connue.

En JavaScript, il existe deux types de portée des variables.

### 9.1 Portée globale
 Une variable déclarée en dehors d'une fonction a une portée globale. Elle est accessible partout dans le script.

```javascript
let nom = "Piette"; // Portée globale
let prenom = "Johnny"; // Portée globale

function afficherNomComplet() {
  console.log(prenom + " " + nom); // Affiche "Philip Piette"
}
```
On voit donc que les variables nom et prenom sont accessibles dans la fonction `afficherNomComplet`.

### 9.2 Portée locale
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




## 10. Gestion des erreurs et exceptions (try, catch, finally)
La gestion des erreurs et des exceptions est une partie importante de la programmation. Les erreurs et les exceptions peuvent survenir lors de l'exécution d'un programme, et il est important de les gérer correctement.


[:arrow_left: Revenir au menu principal.](../README.md#sommaire)

---

&copy; 2024 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).  
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._
