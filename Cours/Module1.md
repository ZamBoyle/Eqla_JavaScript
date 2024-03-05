
[:arrow_left: Revenir au menu principal.](../README.md#sommaire)
<h1 id="sommaire" style="display: flex; align-items: center; justify-content: center;">
    <img src="/Assets/eqla.png" style="height:50px">
    &nbsp;Module 1: Fondamentaux de JavaScript
</h1>


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [1. Objectif](#1-objectif)
- [2. Ajouter du JavaScript à une page web](#2-ajouter-du-javascript-à-une-page-web)
  - [2.1. Inline](#21-inline)
  - [2.2. Interne](#22-interne)
- [2.3. Externe](#23-externe)
  - [2.3.1. Dans le `<head>`](#231-dans-le-head)
  - [2.3.2. Dans le `<body>`](#232-dans-le-body)
  - [2.3.3. Avantages et inconvénients](#233-avantages-et-inconvénients)
  - [2.4 Exercices](#24-exercices)
- [3. Types de données](#3-types-de-données)

<!-- /code_chunk_output -->


## 1. Objectif
Il vise en premier à expliquer comment ajouter du JavaScript à une page web, puis à introduire les concepts de base de JavaScript, permettant aux participants de comprendre les structures fondamentales du langage, telles que les variables, les types de données, les structures de contrôle, et les fonctions. L'accent sera mis sur la pratique avec des exercices d'application pour chaque concept.

## 2. Ajouter du JavaScript à une page web
Il existe trois façons d'ajouter du JavaScript à une page web:
- `Inline`: en utilisant l'attribut `onclick` dans une balise HTML
- `Interne`: en utilisant la balise `<script>` dans le `<head>` ou le `<body>` de la page
- `Externe`: en utilisant un fichier JavaScript externe

### 2.1. Inline
```html
<!DOCTYPE html>
<html>
<body>
<h1>Démonstration de JavaScript</h1>
<button type="button" onclick="alert('Hello world!')">Cliquez ici</button>
</body>
</html>
```
Lorsque vous cliquez sur le bouton, une boîte de dialogue s'affiche avec le message "Hello world!".

### 2.2. Interne
```html
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Démonstration</title>
    <script>
    function myFunction() {
        document.getElementById("demo").innerHTML = "Hello World";
    }
    </script>
</head>
<body>
<h1>Démonstration de JavaScript</h1>
<button type="button" onclick="myFunction()">Cliquez ici</button>
<p id="demo"></p>
</body>
</html>
```
Lorsque vous cliquez sur le bouton, le texte "Hello World" est ajouté à la balise `<p>` avec l'id "demo". Donc, dynamiquement, on change le contenu d'un élément HTML. On peut aussi lire le contenu d'un élément HTML, ou changer les attributs d'un élément HTML, etc.

## 2.3. Externe
Pour ajouter du javascript externe, on utilise la balise `<script>` dans le `<head>` ou le `<body>` de la page. C'est comme vous voulez. Dans tous les cas, le fichier sera chargé après le chargement de la page. 

### 2.3.1. Dans le `<head>`
Si on le met dans le `<head>` on utilise l'attribut `defer` pour que le script soit exécuté après le chargement de la page.

Par exemple:
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js" defer></script>    
    <title>Démonstration</title>
</head>
<body>
<h1>Démonstration de JavaScript</h1>
<button type="button" onclick="myFunction()">Cliquez ici</button>
<p id="demo"></p>
</body>
</html>
```
On va utiliser la balise `<script>` pour inclure un fichier JavaScript externe. Par exemple, si on a un fichier `script.js` avec le contenu suivant:

```javascript
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
```

### 2.3.2. Dans le `<body>`
Si on le met avant la fermeture du `<body>` on n'a pas besoin d'utiliser l'attribut `defer` car le script sera exécuté après le chargement de la page vu que la dernière chose que le navigateur va charger c'est le script.

Par exemple:
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Démonstration</title>
</head>
<body>
<h1>Démonstration de JavaScript</h1>
<button type="button" onclick="myFunction()">Cliquez ici</button>
<p id="demo"></p>
<script src="script.js"></script>
</body>
</html>
```
### 2.3.3. Avantages et inconvénients
- `Inline`: c'est la méthode la plus simple, mais elle n'est pas recommandée car elle mélange le code HTML et le code JavaScript, ce qui rend le code difficile à lire et à maintenir. Mais très utilisée pour les démonstrations rapides. Comme ici. :smile:
- `Interne`: c'est une méthode plus propre que l'inline, mais elle n'est pas recommandée non plus car elle mélange le code HTML et le code JavaScript, ce qui rend le code difficile à lire et à maintenir.
- `Externe`: c'est la méthode la plus recommandée car elle sépare le code HTML du code JavaScript, ce qui rend le code plus facile à lire et à maintenir. De plus, le code JavaScript peut être réutilisé dans plusieurs pages, ce qui permet de gagner du temps et de l'espace. C'est la méthode la plus utilisée en production.

### 2.4 Exercices
Faites les exercices suivants:
- Exercice 1
- Exercice 2

## 3. Types de données
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










[:arrow_left: Revenir au menu principal.](../README.md#sommaire)

--- 
&copy; 2024 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).   
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._
