[:arrow_left: Revenir au menu principal.](../README.md#sommaire)
<h1 id="sommaire" style="display: flex; align-items: center; justify-content: center;">
    <img src="/Assets/eqla.png" style="height:50px">
    &nbsp;Introduction au JavaScript
</h1>



## 1. Introduction
Nous allons rapidement introduire JavaScript via différents points:

- **Création** : JavaScript a été créé en 1995 par Brendan Eich chez Netscape, initialement sous le nom de LiveScript. Son but était de permettre aux développeurs web de rendre les pages HTML interactives et dynamiques, offrant ainsi une expérience utilisateur enrichie sans nécessiter de rechargement complet de la page.

- **Évolution** : Au fil des ans, JavaScript a subi une transformation majeure, devenant un élément central du développement web. L'évolution des standards ECMAScript a permis d'introduire des fonctionnalités avancées, améliorant la robustesse et la polyvalence du langage. Son expansion au-delà des navigateurs avec Node.js a ouvert la voie à des applications JavaScript côté serveur, diversifiant ainsi son utilisation. Le JavaScript moderne, également désigné par les termes ES6, ES7, etc., ou VanillaJS pour le JavaScript pur sans bibliothèques ou frameworks, est désormais un pilier incontournable du développement logiciel, soutenu par une communauté dynamique et innovante.

- **JavaScript aujourd'hui** : Dans le paysage actuel du développement, JavaScript joue un rôle indispensable dans la création d'applications web riches et interactives, de sites web réactifs, d'applications mobiles avec React Native, et d'applications de bureau via Electron. Son écosystème florissant, enrichi par des bibliothèques et frameworks tels que React, Vue, Angular, et bien d'autres, facilite la création d'applications complexes et performantes. JavaScript est également au cœur des architectures full-stack modernes, telles que MEAN (MongoDB, Express.js, Angular, Node.js) et MERN (MongoDB, Express.js, React, Node.js), qui permettent aux développeurs de construire des applications robustes en utilisant un langage unifié à travers toute la pile technologique.

- **L'avenir de JavaScript** : Avec l'avènement de technologies telles que les WebAssembly, qui permettent d'exécuter du code à des vitesses proches de celles du code natif dans le navigateur, JavaScript continue d'évoluer et de s'adapter aux défis futurs du développement web. Les progrès dans les domaines de l'intelligence artificielle, de l'apprentissage automatique, et de l'Internet des Objets (IoT) ouvrent également de nouvelles avenues pour l'intégration et l'utilisation de JavaScript dans des applications innovantes et interconnectées. Ainsi, JavaScript reste à l'avant-garde de la technologie, s'adaptant continuellement pour répondre aux besoins changeants des développeurs et des utilisateurs dans un monde numérique en évolution rapide.

Cette évolution constante, soutenue par une communauté mondiale active et des mises à jour régulières des standards ECMAScript, assure à JavaScript une place de choix dans l'avenir du développement logiciel, démontrant sa capacité à s'adapter et à innover dans un paysage technologique en perpétuelle mutation.

Je vais ou on va (ça dépendra du temps) faire un menu Bootstrap en js et qui activera le point de menu (classe bootstrap active) automatiquement en fonction de la page en cours. L'intérêt on crée un menu à un endroit et on l'insère dans toutes les pages. Si on veut ajouter un point de menu, on le fait une fois et il sera ajouté à toutes les pages. On ne devra pas modifier chaque page. Vous pourriez aussi le faire en PHP mais bon comme on est dans un cours JS... ;-)

> So, if we have time, we will do it.

## 2. Le JavaScript dans le HTML
Le JavaScript peut être inséré dans le HTML de plusieurs manières.

Voici les trois manières les plus courantes:
### 2.1 Interne à la balise `<script>` du HTML
Le code js est inséré directement dans le HTML dans la balise `<script>`.
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Web</title>
    </head>
    <body>
        <h1>Ma page web</h1>
        <script>
            alert("Bonjour!");
        </script>
    </body>
</html>
```
Le précédent exemple affiche une boîte de dialogue avec le message "Bonjour!". On dit que ce code est inséré dans le HTML: inline. Ce n'est pas la méthode la plus recommandée. En effet, il est préférable de séparer le code JavaScript du code HTML. Tout comme on sépare le CSS du HTML.

### 2.2 Dans un fichier externe.
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Web</title>
        <script src="script.js" defer></script>
    </head>
    <body>
        <h1>Ma page web</h1>
    </body>
</html>
```
Le précédent exemple fait appel à un fichier JavaScript externe. Le fichier `script.js` contient le code JavaScript. Cette méthode est la plus recommandée. En effet, elle permet de séparer le code JavaScript du code HTML. Tout comme on sépare le CSS du HTML.
Voici le contenu du fichier `script.js`:
```js
alert("Bonjour!");
```
L'intérêt de cette méthode est que le code JavaScript peut être réutilisé dans plusieurs pages web. Il suffit de faire appel au fichier `script.js` dans chaque page web.

Si par exemple, vous avez créé un ensemble de fonctions utilitaires, vous pourrez les réutiliser dans plusieurs pages web voire dans plusieurs projets.

N'oubliez pas, l'informaticien est paresseux. Il ne veut pas réécrire le même code plusieurs fois. ;-)
### 2.3 Dans un événement - inline
Un événement est une action que l'utilisateur effectue sur la page web. Par exemple, un clic sur un bouton, le survol d'une image, appuyer sur une touche du clavier, etc.
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Web</title>
    </head>
    <body>
        <h1>Ma page web</h1>
        <button onclick="alert('Bonjour!')">Cliquez-moi</button>
    </body>
</html>
```
Nous allons maintenant reprendre notre code pour qu'il utilise un fichier externe. Voici le contenu du fichier `index.html`:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Web</title>
        <script src="script.js" defer></script>
    </head>
    <body>
        <h1>Ma page web</h1>
        <button onclick="direBonjour()">Cliquez-moi</button>
    </body>
</html>
```
Voici le contenu du fichier `script.js`:
```js
function direBonjour() {
    alert("Bonjour!");
}
```
De cette manière, le code JavaScript est séparé du code HTML. Il est réutilisable dans plusieurs pages web. Et il est plus facile à maintenir.

## 3. Où placer la balise `<script>` dans le HTML
### 3.1. Dans le `<head>`
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

### 3.2. Avant la fermeture du `<body>`
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

## 4. Atributs defer et async
On pourrait se dire que l'on fasse du js dans le `<head>` ou avant la fermeture du `<body>`, le résultat sera le même. C'est vrai, mais pas tout à fait. Il y a deux attributs qui permettent de modifier le comportement de la balise `<script>`: `defer` et `async`.

### 4.1. L'attribut `defer`
L'attribut `defer` indique que le script ne doit pas être exécuté avant que la page ait été analysée. Cela permet de garantir que le script ne modifie pas le contenu de la page avant que la page ne soit complètement chargée.

Si vous omettez l'attribut `defer`, le script sera exécuté dès qu'il est téléchargé sans attendre que la page complète ne soit chargée. Ce qui peut entraîner des problèmes si le script a besoin de modifier le contenu de la page vu que le contenu n'est pas encore chargé.

Enfin, si vous mettez la balise `script` avant la fermeture du `body`, vous n'avez pas besoin d'utiliser l'attribut `defer` car le script sera exécuté après le chargement de la page vu que la dernière chose que le navigateur va charger c'est le script.

### 4.2. L'attribut `async`
L'attribut `async` indique que le script est indépendant de la page et peut être exécuté de manière asynchrone. Cela signifie que le script peut être téléchargé pendant que la page est en cours de chargement et exécuté dès qu'il est prêt, sans attendre que la page soit complètement chargée.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Démonstration</title>
    <script src="script.js" async></script>
</head>
<body>
<h1>Démonstration de JavaScript</h1>
<button type="button" onclick="myFunction()">Cliquez ici</button>
<p id="demo"></p>
</body>
</html>
```

## 5 Où et comment exécuter du JavaScript 
On aurait tendance à penser que JavaScript ne peut être exécuté que dans un navigateur. C'est vrai, mais ce n'est pas la seule manière d'exécuter du JavaScript.

### 5.1 JavaScript dans la console du navigateur
JavaScript peut être exécuté dans la console de votre navigateur. Pour ouvrir la console, appuyez sur `F12` ou `Ctrl + Shift + I` ou `Cmd + Option + I` sur Mac. Puis cliquez sur l'onglet `Console`.

Vous pouvez taper du code JavaScript dans la console et appuyer sur `Entrée` pour l'exécuter.

Par exemple, tapez `alert("Bonjour!")` dans la console et appuyez sur `Entrée`. Vous verrez une boîte de dialogue avec le message "Bonjour!". Et cela sans toucher au code de la page web.

Vous pouvez aussi par exemple faire une simple addition: 1+1. Vous verrez le résultat dans la console.

Ou encore, faire une boucle for: 
```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
Vous verrez les nombres de 0 à 4 dans la console:

```text
0
1
2
3
4
```
Attention, ce qui sera écrit dans la console sera perdu si vous rechargez la page. Si vous voulez sauvegarder le code, vous devrez le mettre dans un fichier JavaScript externe.

Alors à quoi sert la console? Elle est très utile pour débugger votre code. Vous pouvez afficher des messages dans la console avec `console.log`. Vous pouvez aussi voir les erreurs de votre code dans la console. Ces messages viendront de vos fonctions ou de votre code. Ils vous aideront à comprendre ce qui ne va pas dans votre code.

### 5.2 NodeJS: Javascript en ligne de commande
JavaScript peut être exécuté en ligne de commande. Pour cela, vous devez installer Node.js. Node.js est un environnement d'exécution JavaScript côté serveur. Il vous permet d'exécuter du code JavaScript en dehors d'un navigateur.

Pour installer Node.js, rendez-vous sur le site officiel de Node.js: [https://nodejs.org/](https://nodejs.org/)

Une fois Node.js installé, ouvrez un terminal et tapez `node`. Vous pouvez maintenant taper du code JavaScript et appuyer sur `Entrée` pour l'exécuter.

Evidemment, vous ne pourrez pas faire un `alert` en ligne de commande. Vous devrez utiliser `console.log` pour afficher des messages. En effet, `alert` est une fonction qui n'existe que dans les navigateurs.

Si vous avez des fonctions qui retournent des valeurs ou font un traitement, vous pouvez les appeler et voir le résultat dans la console.

Cela peut être utile pour tester des fonctions ou des algorithmes et ne pas perdre de temps à les intégrer dans une page web.

Pour exécuter un fichier JavaScript en ligne de commande, tapez `node nomDuFichier.js` dans le terminal.

Soit le fichier `bonjour.js`:
```js
console.log("Bonjour depuis Node.js !");
console.log("Voici un exemple de boucle for:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
Pour l'exécuter, tapez `node bonjour.js` dans le terminal.

Voici le résultat:
```text
Bonjour depuis Node.js !
Voici un exemple de boucle for:
0
1
2
3
4
```

### 5.3 Frameworks et bibliothèques JavaScript

JavaScript s'exécute également au cœur de nombreux frameworks et bibliothèques, augmentant ainsi son utilisation au-delà des navigateurs web et de l'environnement serveur avec Node.js. Ces outils permettent de construire des applications web complexes, des applications mobiles, des applications de bureau, et même des jeux. Parmi les plus connus, on trouve :

- **React** : Une bibliothèque développée par Facebook pour construire des interfaces utilisateur dynamiques et réactives pour le web et le mobile.
- **Angular** : Un framework complet pour le développement d'applications web modernes, développé par Google.
- **Vue.js** : Un framework progressif pour construire des interfaces utilisateur, qui se concentre sur la simplicité et la performance.
- **Electron** : Permet de développer des applications de bureau natives avec des technologies web (HTML, CSS, et JavaScript).
- **React Native** : Permet de construire des applications mobiles natives en utilisant JavaScript et React.
- **Three.js** : Une bibliothèque pour créer des graphiques 3D dans un navigateur web à l'aide de WebGL.
- **D3.js** : Une bibliothèque pour créer des visualisations de données dynamiques et interactives dans un navigateur web.
- **Babylon.js** : Un framework pour créer des jeux 3D dans un navigateur web à l'aide de WebGL.
- **Phaser** : Un framework pour créer des jeux en 2D pour le web et le mobile.
- **TensorFlow.js** : Une bibliothèque pour l'apprentissage automatique et l'intelligence artificielle dans le navigateur web.
- Et bien d'autres...

Ces outils transforment JavaScript en un langage extrêmement polyvalent, capable de s'adapter à une vaste gamme de projets de développement.

### 5.4 Serveurs Web et API avec JavaScript

JavaScript est également utilisé pour le développement de serveurs et d'APIs grâce à des environnements comme Node.js. Avec des frameworks comme Express.js, vous pouvez créer des serveurs web robustes et des APIs RESTful rapidement et efficacement. Ces serveurs peuvent gérer des requêtes web, interagir avec des bases de données, et servir des applications web à des clients.

L'an passé, j'avais un groupe pour la formation PHP (BXL) et un autre pour la formation JAVA (Mons). On a voulu les faire travailler ensemble mais à BXL ils n'avaient fait que du HTML à ce moment. Et ceux de Mons que du Java console.

J'ai donc créé un [serveur web en node.js](https://github.com/ZamBoyle/Eqla_Hackathon): il permet d'exécuter du code Java depuis un dépôt GitHub. Il ne peut exécuter que le code d'un seul fichier. Donc pas d'utilisation de packages, etc: tout dans un seul fichier situé dans un dépôt GitHub. Il a été fait dans le cadre d'un Hackathon de la formation BlindCode. Le But était de faire travailler les deux groupes ensemble. Les étudiants de BXL devaient créer une page web qui permettait d'envoyer du code Java à exécuter. Les étudiants de Mons devaient créer un programme Java qui permettait par exemple de calculer la moyenne de 3 nombres. Le serveur web devait exécuter le code Java et renvoyer le résultat à la page web.

### 5.5 Internet des Objets (IoT)

JavaScript s'étend aussi à l'Internet des Objets (IoT). Des plateformes comme Johnny-Five permettent de contrôler du matériel électronique et des dispositifs IoT directement avec JavaScript, ouvrant la voie à des projets d'automatisation domestique, de capteurs intelligents, et bien plus encore.

### 5.6 Tests Automatisés

JavaScript joue un rôle crucial dans le développement de tests automatisés pour des applications web. Des frameworks de test comme Jest (pour les applications React), Mocha, et Jasmine permettent de créer et d'exécuter des tests unitaires et d'intégration, assurant ainsi la fiabilité et la robustesse du code.

### 5.7 Conclusion

JavaScript dépasse largement le cadre des navigateurs web. Son écosystème riche et diversifié, composé de frameworks, de bibliothèques, et d'outils de développement, en fait un langage de choix pour pratiquement tout type de projet de développement logiciel, du front-end au back-end, en passant par le mobile, le bureau, et l'IoT. Son utilisation dans les tests automatisés contribue également à améliorer la qualité et la fiabilité des applications.

## 6. Exercices
Faites l'exercice suivant: 


[:arrow_left: Revenir au menu principal.](../README.md#sommaire)

--- 
&copy; 2024 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).   
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._
