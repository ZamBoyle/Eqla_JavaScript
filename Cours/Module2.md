[:arrow_left: Revenir au menu principal.](../README.md#sommaire)

<h1 id="sommaire" style="display: flex; align-items: center; justify-content: center;">
    <img src="../Assets/eqla.png" style="height:50px">
    &nbsp;Module 2: Le DOM et les événements
</h1>

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [1. Le DOM](#1-le-dom)
- [2. Sélectionner des éléments](#2-sélectionner-des-éléments)
  - [2.1. document.getElementById()](#21-documentgetelementbyid)
  - [2.2. InnerHTML](#22-innerhtml)
  - [2.3. document.getElementsByClassName()](#23-documentgetelementsbyclassname)
  - [2.4. document.getElementsByTagName()](#24-documentgetelementsbytagname)
  - [2.5 Exemple complet avec getElementById / getElementsByTagName](#25-exemple-complet-avec-getelementbyid--getelementsbytagname)
  - [2.6. document.querySelector()](#26-documentqueryselector)
    - [2.6.1 Sélection par tag](#261-sélection-par-tag)
    - [2.6.2 Sélection par id](#262-sélection-par-id)
    - [2.6.3. Sélection par classe](#263-sélection-par-classe)
    - [2.6.4. Sélection par attribut](#264-sélection-par-attribut)
    - [2.6.5 Sékectuib par attribut et valeur](#265-sékectuib-par-attribut-et-valeur)
    - [2.6.6. Sélection par tag et classe](#266-sélection-par-tag-et-classe)
    - [2.6.7. Sélection par attribut et tag](#267-sélection-par-attribut-et-tag)
    - [2.6.8. Sélection par id et tag](#268-sélection-par-id-et-tag)
  - [2.7. document.querySelectorAll()](#27-documentqueryselectorall)
  - [2.8. Les événements](#28-les-événements)
    - [2.8.1. Exemple - addEventListener](#281-exemple---addeventlistener)
    - [2.8.2. Exemple - Contraste Élevé](#282-exemple---contraste-élevé)
    - [2.8.3. Exemple - mouseover et mouseout](#283-exemple---mouseover-et-mouseout)

<!-- /code_chunk_output -->

## 1. Le DOM

Le DOM (Document Object Model) est une interface de programmation pour les documents HTML et XML. Il fournit une représentation structurée du document sous forme d'un arbre. Chaque élément du document est un nœud dans cet arbre, et chaque nœud peut être manipulé par le code JavaScript.

Il existe plusieurs méthodes pour accéder aux éléments du DOM. Les plus courantes sont `document.getElementById()`, `document.getElementsByClassName()`, `document.getElementsByTagName()`, `document.querySelector()`, et `document.querySelectorAll()`.

Nous allons les voir en détail dans les sections suivantes.

## 2. Sélectionner des éléments

### 2.1. document.getElementById()

La méthode `document.getElementById()` permet de sélectionner un élément du DOM par son identifiant. Elle prend en paramètre l'identifiant de l'élément à sélectionner et renvoie l'élément correspondant.

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Démo getElementById</title>
  </head>

  <body>
    <div id="monDiv">Ceci est un div.</div>
    <script>
      let monDiv = document.getElementById("monDiv");
      if (monDiv) {
        // Si l'élément existe
        // Modifier le contenu du div via la propriété innerHTML
        monDiv.innerHTML = "Ceci est un div modifié.";
      }
    </script>
  </body>
</html>
```

La méthode `document.getElementById()` renvoie `null` si aucun élément ne correspond à l'identifiant spécifié. Il est donc important de vérifier si l'élément existe avant de l'utiliser.

Dans l'exemple ci-dessus, nous avons un div avec l'identifiant `monDiv`. Nous utilisons `document.getElementById("monDiv")` pour sélectionner cet élément, puis nous modifions son contenu en utilisant la propriété `innerHTML`.

### 2.2. InnerHTML

La propriété `innerHTML` permet de modifier le contenu HTML d'un élément. Elle peut être utilisée pour ajouter du contenu, le remplacer ou le supprimer.

Elle est souvent utilisée pour afficher du texte ou des balises HTML dans un élément du DOM.

### 2.3. document.getElementsByClassName()

La méthode `document.getElementsByClassName()` permet de sélectionner des éléments du DOM par leur classe. Elle prend en paramètre le nom de la classe à rechercher et renvoie une liste d'éléments correspondant à cette classe.

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Démo getElementsByClassName</title>
  </head>

  <body>
    <div class="maClasse">Ceci est un div avec la classe maClasse.</div>
    <div class="maClasse">Ceci est un autre div avec la classe maClasse.</div>
    <div>Un dernier div pour la route avant le we.</div>
    <p class="maClasse">Ceci est votre dernier paragraphe préféré.</p>
    <script>
      let elements = document.getElementsByClassName("maClasse");
      for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = i + 1 + ". " + elements[i].innerHTML; //". Ceci est un div modifié via une class.";
      }
    </script>
  </body>
</html>
```

La méthode `getElementsByClassName()` renvoie une liste d'éléments correspondant à la classe spécifiée. Dans l'exemple ci-dessus, nous avons deux divs avec la classe `maClasse`. Nous utilisons `getElementsByClassName("maClasse")` pour sélectionner ces éléments, puis nous modifions leur contenu en utilisant la propriété `innerHTML`.

### 2.4. document.getElementsByTagName()

La méthode `getElementsByTagName()` permet de sélectionner des éléments du DOM par leur balise. Elle prend en paramètre le nom de la balise à rechercher et renvoie une liste d'éléments correspondant à cette balise.

Exemple:

```js
let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  if (!paragraphs[i].classList.contains("xmass")) {
    paragraphs[i].classList.add("xmass");
  }
}
```

Dans cet exemple, nous utilisons `getElementsByTagName("p")` pour sélectionner tous les éléments `p` de la page, puis nous ajoutons la classe `xmass` à ces éléments. J'ai testé si la classe n'était pas déjà présente. Normalement, le navigateur ne devrait pas rajouter cette classe plusieurs fois. Mais dans un soucis de performances autant le vérifier car nous sommes codeurs quand même. ;-)

Un autre exemple:

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Démo getElementsByClassName</title>
  </head>

  <body>
    <h1>Bienvenue sur mon site web</h1>
    <p>Ceci est un paragraphe.</p>
    <p>Ceci est un autre paragraphe.</p>
    <p>Et voici le dernier paragraphe.</p>

    <div>Ceci est un div.</div>
    <div>Ceci est un autre div.</div>
    <script>
      let elements = document.getElementsByTagName("p");
      for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML =
          i + 1 + ". Ceci est un paragraphe modifié via une balise.";
      }
    </script>
  </body>
</html>
```

### 2.5 Exemple complet avec getElementById / getElementsByTagName

Je vais vous donner un code qui va modifer la page lorsque l'on clique sur le bouton. Nous en discuterons lorsque vous l'aurez exécuté dans un navigateur.

Voici un exemple de page que je vous invite à copier-coller dans un fichier HTML pour voir le résultat:

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Démo getElementsByClassName</title>
    <style>
      div {
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
      }

      #secretDiv {
        display: none;
      }

      #container {
        padding: 15px;
        margin: auto;
        background-color: #f0f0f0;
      }

      body {
        font-family: Arial, sans-serif;
        padding: 15px;
      }

      table,
      th,
      td {
        border: 1px solid black;
        border-collapse: collapse;
      }

      th {
        padding: 5px;
        background-color: #e7c9c9;
      }
    </style>
  </head>

  <body>
    <div id="container">
      <h1>Bienvenue sur mon site web</h1>
      <p>Sur ce site, vous apprendrez le html.</p>

      <h2>Les paragraphes</h2>
      <p>Ceci est un paragraphe.</p>
      <p>Ceci est un autre paragraphe.</p>
      <p>Et voici un dernier paragraphe.</p>
      <h2>Les input</h2>
      <input id="number1" type="text" value="17" size="2" />+<input
        id="number2"
        type="text"
        value="45"
        size="2"
      />
      =
      <span id="resultat"></span>
      <h2>Les divs</h2>
      <div>
        Ceci est du texte dans un div mais qui n'est pas dans un paragraphe.
      </div>
      <div id="divP">
        <p>Ceci est un autre div.</p>
        <p>On peut y ajouter un ensemble d'éléments.</p>
      </div>
      <div>
        <p>Ceci est un paragraphe dans un div.</p>
      </div>
      <div>
        <p>Ceci est un autre paragraphe dans un div.</p>
      </div>
      <div id="secretDiv">
        <p>Et un dernier paragraphe dans un div secret. :-)</p>
        <p>
          Il était caché par le style css:
          <span style="color:black; font-weight: bold;"> display: none;</span>
        </p>
      </div>
      <h2>Les tableaux</h2>
      <table>
        <thead>
          <tr>
            <th>Colonne 1</th>
            <th>Colonne 2</th>
          </tr>
        </thead>
        <tr>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
        </tr>
      </table>
      <br />

      <button id="btngo" onclick="onclickBtn()">Let's go !</button>
    </div>
    <script>
      let alreadyClicked = false;
      let domComplet = document.documentElement.innerHTML; // Sauvegarde du DOM complet
      function onclickBtn() {
        if (alreadyClicked) {
          document.documentElement.innerHTML = domComplet;
        } else {
          centerElements("h1");
          souligneElements("h1");
          souligneElements("h2");
          alternateDivsColor();
          alternateRowTable();
          addNumbers();
          numberedParagraphs();
          setColorToElements("p", "red");
          colorP();
          setBackGroundColorByTag("body", "yellow");
          setBackGroundColorById("container", "lightgrey");
          resetBtn();
          showSecretDiv();
        }
        alreadyClicked = !alreadyClicked;
      }

      function showSecretDiv() {
        let secretDiv = document.getElementById("secretDiv");
        secretDiv.style.display = "block";
      }

      function resetBtn() {
        let btn = document.getElementById("btngo");
        btn.innerHTML = "Reset";
      }

      function setBackGroundColorByTag(tagName, color) {
        let elements = document.getElementsByTagName(tagName);
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.backgroundColor = color;
        }
      }

      function setBackGroundColorById(id, color) {
        let element = document.getElementById(id);
        element.style.backgroundColor = color;
      }

      function alternateRowTable() {
        let table = document.getElementsByTagName("table")[0];
        let rows = table.getElementsByTagName("tr");
        for (let i = 0; i < rows.length; i++) {
          if (i % 2 == 0) {
            rows[i].style.backgroundColor = "red";
          } else {
            rows[i].style.backgroundColor = "darkgreen";
          }
        }
      }

      function numberedParagraphs() {
        let pElements = document.getElementsByTagName("p");
        for (let i = 0; i < pElements.length; i++) {
          pElements[i].innerHTML = i + 1 + ". " + pElements[i].innerHTML;
        }
      }

      function addNumbers() {
        let number1 = document.getElementById("number1").value;
        let number2 = document.getElementById("number2").value;
        let resultat = parseInt(number1) + parseInt(number2);
        if (isNaN(resultat)) {
          resultat = "Erreur dans les valeurs saisies";
        }
        document.getElementById("resultat").innerHTML = resultat;
      }

      function colorP() {
        let element = document.getElementById("divP");
        let pElements = element.getElementsByTagName("p");
        for (let i = 0; i < pElements.length; i++) {
          pElements[i].style.color = "blue";
        }
      }

      function alternateDivsColor() {
        let divs = document.getElementsByTagName("div");
        for (let i = 0; i < divs.length; i++) {
          if (divs[i].id != "container") {
            if (i % 2 == 0) {
              divs[i].style.backgroundColor = "lightblue";
            } else {
              divs[i].style.backgroundColor = "lightgreen";
            }
          }
        }
      }

      function setColorToElements(tagName, color) {
        let elements = document.getElementsByTagName(tagName);
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.color = color;
        }
      }

      function centerElements(tagName) {
        let elements = document.getElementsByTagName(tagName);
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.textAlign = "center";
        }
      }

      function souligneElements(tagName) {
        let elements = document.getElementsByTagName(tagName);
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.textDecoration = "underline";
        }
      }
    </script>
  </body>
</html>
```
Testez ce code dans un fichier HTML pour voir le résultat. Vous pouvez voir le résultat à l'adresse suivante: [Démo getElementById / getElementsByTagName](https://zamboyle.github.io/Eqla_JavaScript/Cours/Demo1.html)

Pour l'exemple j'ai tout mis dans un seul fichier, mais en général on sépare le code HTML du code JavaScript dans des fichiers séparés.

Lorsqu'on clique sur le bouton "Let's go !", le code JavaScript va modifier le DOM de la page en fonction des fonctions définies. Si on clique une deuxième fois, le DOM est réinitialisé.
Quand on cliquera sur le bouton:

- Les titres `h1` seront centrés et soulignés.
- Les titres `h2` seront soulignés.
- Les divs auront une couleur de fond alternée: bleu clair et vert clair.
- Un div secret (caché) est affiché.
- Les lignes du tableau auront une couleur de fond alternée: rouge et vert foncé.
- Les nombres saisis dans les champs de texte seront additionnés et le résultat affiché.
- Les paragraphes seront numérotés.
- Les paragraphes dans le div avec l'id `divP` auront une couleur de texte bleue.
- Les paragraphes auront une couleur de texte rouge.
- Le fond de la balise `body` sera jaune.
- Le fond de la balise avec l'id `container` sera gris clair.

### 2.6. document.querySelector()

La méthode `document.querySelector()` permet de sélectionner le premier élément du DOM correspondant à un sélecteur CSS.
Pour rappel, voici la syntaxe d'un sélecteur CSS:

- `tag` pour sélectionner un élément par sa balise.
- `#id` pour sélectionner un élément par son identifiant.
- `.class` pour sélectionner un élément par sa classe.
- `[attribut=valeur]` pour sélectionner un élément par un attribut.
- `[attribut]` pour sélectionner un élément qui possède un attribut.
- `tag.class` pour sélectionner un élément par sa balise et sa classe.
- `tag[attribut]` pour sélectionner un élément par sa balise et un attribut.
- `tag[attribut=valeur]` pour sélectionner un élément par sa balise et un attribut.
- etc...

Elle prend en paramètre un sélecteur CSS et renvoie l'élément correspondant.

#### 2.6.1 Sélection par tag

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Démo querySelector</title>
  </head>
  <body>
    <div id="container">
      <h1>Bienvenue sur mon site web</h1>
      <p>Sur ce site, vous apprendrez le html.</p>
      <p>Et le CSS.</p>
      <p>Et le JavaScript.</p>
    </div>
    <script>
      let premierParagraphe = document.querySelector("p");
      if (premierParagraphe) {
        premierParagraphe.innerHTML =
          "Ceci est le premier paragraphe que nous venons de modifier.";
      }
    </script>
  </body>
</html>
```

La méthode `document.querySelector()` renvoie le premier élément correspondant au sélecteur CSS spécifié. Dans l'exemple ci-dessus, nous utilisons `document.querySelector("p")` pour sélectionner le premier paragraphe de la page, puis nous modifions son contenu en utilisant la propriété `innerHTML`.

#### 2.6.2 Sélection par id

Tout comme `document.getElementById()`, on peut sélectionner un élément par son identifiant avec `document.querySelector()` en utilisant le sélecteur CSS `#id`:

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Démo querySelector</title>
  </head>
  <body>
    <div id="container">
      <h1>Bienvenue sur mon site web</h1>
      <p>Sur ce site, vous apprendrez le html.</p>
      <p>Et le CSS.</p>
      <p>Et le JavaScript.</p>
      <p id="monParagraphe">Ceci est un paragraphe avec un identifiant.</p>
    </div>
    <script>
      let container = document.querySelector("#monParagraphe");
      if (container) {
        container.innerHTML =
          "Nous venons de modifier le paragraphe avec l'identifiant monParagraphe.";
      }
    </script>
  </body>
</html>
```

Dans cet exemple, nous utilisons `document.querySelector("#monParagraphe")` pour sélectionner le paragraphe avec l'identifiant `monParagraphe`, puis nous modifions son contenu en utilisant la propriété `innerHTML`.

Il est important de noter que `document.querySelector()` renvoie le premier élément correspondant au sélecteur CSS spécifié. Si plusieurs éléments correspondent au sélecteur, seul le premier sera sélectionné.

#### 2.6.3. Sélection par classe

On peut aussi retrouver un élément en fonction de sa classe:

```javascript
let element = document.querySelector(".maClasse");
```

Cela permet de retrouver un élément qui a la classe `maClasse`.

#### 2.6.4. Sélection par attribut

Comme je vous ai dit en classe, le développeur peut utiliser une classe qui n'est pas définie dans le CSS. Dans le but d'identifier plusieurs éléments.

Mais nos amis webdesigners pourraient ne pas être contents: ils risquent de ne pas comprendre pourquoi ce style n'est pas défini dans le CSS et le supprimer n'y voyant pas d'utilité.

Généralement, on utilise l'attribut `data-` pour créer des attributs personnalisés. Par exemple, `data-id="123"`. Ici, `id` est l'attribut personnalisé et `123` est la valeur de cet attribut. Ca pourrait être l'id dans une base de données par exemple.

Ces attributs sont utilisés pour stocker des informations supplémentaires sur les éléments, qui peuvent être utilisées par le code JavaScript.

On peut aussi retrouver un élément en fonction d'un attribut:

```javascript
let element = document.querySelector("[hidden]");

//supprime l'attribut disabled
element.removeAttribute("hidden");
```

Cela permet de retrouver un élément qui a l'attribut `hidden`.

#### 2.6.5 Sékectuib par attribut et valeur

On peut aussi retrouver un élément en fonction de son attribut et de sa valeur:

```javascript
let element = document.querySelector('[type="text"]');
```

Cela permet de retrouver un élément qui a l'attribut `type` et la valeur `text`.

#### 2.6.6. Sélection par tag et classe

On peut aussi retrouver un élément en fonction de son attribut et de sa classe:

```javascript
let element = document.querySelector("p.paragraphe");
```

Cela permet de retrouver un élément qui est un paragraphe et qui a la classe `paragraphe`.

#### 2.6.7. Sélection par attribut et tag

On peut aussi retrouver un élément en fonction de son attribut et de sa balise:

```javascript
let element = document.querySelector("input[disabled]");
```

Cela permet de retrouver un élément qui est un input et qui a l'attribut `disabled`. C'est à dire un input désactivé.

#### 2.6.8. Sélection par id et tag

On peut aussi retrouver un élément en fonction de son identifiant et de sa balise:

### 2.7. document.querySelectorAll()

Nous venons de voir que `document.querySelector()` renvoie le premier élément correspondant au sélecteur CSS spécifié. Si on veut sélectionner tous les éléments correspondant à un sélecteur CSS, on peut utiliser `document.querySelectorAll()`. Cette méthode renvoie une liste de tous les éléments correspondant au sélecteur CSS spécifié. Cette liste sera stockée dans un objet de type NodeList qui est similaire à un tableau.

Tous les exemples que nous avons vus avec `document.querySelector()` peuvent être adaptés pour utiliser `document.querySelectorAll()`. Mais à la différence de `document.querySelector()`, `document.querySelectorAll()` renvoie tous les éléments correspondant au sélecteur CSS spécifié. Ce qui signifie que si aucun élément ne correspond au sélecteur, la liste sera vide.

Voici un exemple pour sélectionner tous les paragraphes de la page:

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Démo querySelectorAll</title>
    <style>
      .container {
        width: 80%;
        margin: 0 auto;
        padding: 10px;
      }

      h1 {
        text-align: center;
      }

      h1,
      h2 {
        text-decoration: underline;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h1>Démo querySelectorAll</h1>
      <div id="sectionInteressante">
        <h2>Titre de la section intéressante</h2>
        <p>Paragraphe 1 de la section.</p>
        <p>Paragraphe 2 de la section.</p>
        <p>Paragraphe 3 de la section.</p>
      </div>
      <p>
        Ce paragraphe ne sera pas affecté car il est en dehors de la section.
      </p>
      <hr />
    </div>
    <script>
      let monthToChange = 2; // 0 = janvier, 1 = février, 2 = mars, etc.
      let today = new Date();
      let month = today.getMonth();

      if (month === monthToChange) {
        let paragraphes = document.querySelectorAll("#sectionInteressante p");
        paragraphes.forEach((paragraphe) => {
          paragraphe.style.color = "white";
          paragraphe.style.backgroundColor = "red";
          paragraphe.style.fontWeight = "bold";
          paragraphe.style.padding = "10px";
        });
      }
    </script>
  </body>
</html>
```
Testez ce code dans un fichier HTML pour voir le résultat.
Vous pouvez voir le résultat à l'adresse suivante: [Démo querySelectorAll](https://zamboyle.github.io/Eqla_JavaScript/Cours/Demo2.html)

Dans cet exemple, nous utilisons `document.querySelectorAll("#sectionInteressante p")` pour sélectionner:

- tous les paragraphes de la section
- avec l'identifiant `sectionInteressante`

Puis nous modifions leur style en utilisant les propriétés `style.color`, `style.backgroundColor`, `style.fontWeight` et `style.padding`.

Testez ce code dans un fichier HTML pour voir le résultat et changez la valeur de `monthToChange` pour voir le changement de style des paragraphes.

### 2.8. Les événements

Les événements sont des actions qui se produisent dans le navigateur, comme le chargement de la page, le clic sur un bouton, le survol d'un élément, etc. En JavaScript, on peut attacher des gestionnaires d'événements à des éléments du DOM pour exécuter du code en réponse à ces événements.

Voici la syntaxe générale pour ajouter un gestionnaire d'événements à un élément:

> element.addEventListener(event, function);

- `element` est l'élément du DOM auquel on veut ajouter le gestionnaire d'événements.
- `event` est le nom de l'événement à écouter (par exemple, "click", "mouseover", "change", etc.).
- `function` est la fonction à exécuter lorsque l'événement se produit. Cette fonction est souvent appelée un "callback". Elle peut être définie en tant que fonction nommée ou fonction anonyme.

Le nom de la méthode est très parlant: `addEventListener()`. Cela signifie que l'on ajoute (add) un écouteur (Listener) d'événements (event) à un élément. L'écouteur d'événements est une fonction qui sera exécutée lorsque l'événement se produit.

Voici quelques exemples d'événements courants:

- `click`: se produit lorsqu'un élément est cliqué.
- `mouseover`: se produit lorsque la souris survole un élément.
- `mouseout`: se produit lorsque la souris quitte un élément.
- `change`: se produit lorsqu'une valeur change (par exemple, dans un champ de texte ou une case à cocher).
- `submit`: se produit lorsqu'un formulaire est soumis.
- `load`: se produit lorsque la page est entièrement chargée.
- `keydown`: se produit lorsqu'une touche du clavier est enfoncée.
- `keyup`: se produit lorsqu'une touche du clavier est relâchée.
- etc...

Pour attacher un gestionnaire d'événements à un élément, on utilise la méthode `addEventListener()`. Cette méthode prend en paramètre le nom de l'événement à écouter et une fonction qui sera exécutée lorsque l'événement se produit.

Nous avons vu que nous pouvions ajouter dans le code html l'event `onclick` pour déclencher une action lorsqu'on clique sur un élément. Mais il est préférable d'utiliser `addEventListener()` pour ajouter des événements.

#### 2.8.1. Exemple - addEventListener

Voici un exemple pour ajouter un gestionnaire d'événements `click` à un bouton:

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Démo addEventListener</title>
    <style>
      .container {
        width: 80%;
        margin: 0 auto;
        padding: 10px;
        border: 1px solid black;
      }
      button {
        padding: 10px;
        font-size: 1.2em;
        border-radius: 5px;
      }
      button:hover {
        background-color: rgb(210, 196, 245);
      }
      #messageClickBtn,
      #textTyped {
        margin-top: 10px;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Démo addEventListener</h1>
      <p>
        Dans cette démo, vous pouvez cliquer sur un bouton et taper du texte.
      </p>
      <button id="monBouton">Cliquez ici</button>
      <div id="messageClickBtn"></div>
      <div id="textTyped"></div>
    </div>
    <script>
      let bouton = document.getElementById("monBouton");
      //Appel d'une fonction nommée onClickButton mais on peut aussi utiliser une fonction anonyme
      bouton.addEventListener("click", onClickButton);

      //Appel d'une fonction anonyme mais on peut aussi utiliser une fonction nommée
      document.addEventListener("keydown", function (event) {
        let textTyped = document.getElementById("textTyped");
        textTyped.style.backgroundColor = "lightgreen";
        //C'est quand même sympa de pouvoir effacer le texte avec la touche backspace :-)
        if (event.key === "Backspace") {
          textTyped.textContent = textTyped.innerHTML.slice(0, -1);
        }
        //ignorer les caractères de contrôle: shift, control, alt, backspace, etc.
        //Il suffit de vérifier si la longueur de la chaîne est de 1 car les caractères de contrôle ont une longueur supérieure à 1
        if (event.key.length === 1) {
          //en css prendre une couleur random
          textTyped.textContent += event.key;
        }
      });

      function onClickButton() {
        let message = document.getElementById("messageClickBtn");
        message.textContent = "Vous avez cliqué sur le bouton et il a disparu.";
        message.style.backgroundColor = "lightblue";
        bouton.style.display = "none";
      }
    </script>
  </body>
</html>
```
Testez ce code dans un fichier HTML pour voir le résultat.
Vous pouvez voir le résultat à l'adresse suivante: [Démo addEventListener](https://zamboyle.github.io/Eqla_JavaScript/Cours/Demo3.html)

- Copiez et testez ce code dans un fichier HTML pour voir le résultat pour pouvoir comprendre et le modifier.
- Vous pouvez voir le résultat à l'adresse suivante: [Démo addEventListener](https://zamboyle.github.io/Eqla_JavaScript/Cours/Demo3.html)

Dans cet exemple, nous ajoutons un gestionnaire d'événements `click` à un bouton avec `addEventListener("click", onClickButton)`. Lorsque le bouton est cliqué, la fonction `onClickButton` est appelée et affiche un message dans un élément `div`.

Nous avons appelé une fonction nommée `onClickButton` pour gérer l'événement `click`. Mais on aurait pu utiliser une fonction anonyme à la place. C'est pour vous montrer que les deux sont possibles.

Nous ajoutons également un gestionnaire d'événements `keydown` à la page entière avec `document.addEventListener("keydown", function(event))`. Lorsqu'une touche du clavier est enfoncée, la fonction anonyme est appelée et affiche le caractère tapé dans un élément `div`.

Si on analyse l'événement `keydown`, on voit on constate que notre fonction anonyme prend un paramètre `event`. Cet objet contient des informations sur l'événement, comme la touche du clavier qui a été enfoncée. Nous utilisons `event.key` pour obtenir le caractère tapé.

Nous avons aussi utilisé `textContent` pour afficher le message dans l'élément `div` au lieu de `innerHTML`. C'est une bonne pratique car `textContent` est plus sûr que `innerHTML` car il ne traite pas le contenu comme du HTML. Si vous n'avez pas besoin de traiter du HTML, utilisez `textContent`.

Dans l'exemple suivant, nous allons avoir un bouton qui lorsqu'il est cliqué change le contraste de page pour les personnes malvoyantes. C'est un exemple de ce que l'on peut faire avec les événements.

#### 2.8.2. Exemple - Contraste Élevé

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemple d'un bouton Contraste Élevé</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;
      }

      .button-container {
        display: flex;
        justify-content: flex-end;
      }

      button {
        font-size: 24px;
        background: none;
        border: none;
        cursor: pointer;
      }

      .highContrast {
        background-color: black !important;
        color: white !important;
      }

      .highContrast button {
        color: white;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  </head>
  <body>
    <div class="button-container">
      <button id="btnContrast" aria-label="Changer le mode de contraste">
        <i class="fa-solid fa-circle-half-stroke"></i>
      </button>
    </div>
    <div class="container border border-secondary rounded m-auto w-100 px-10">
      <h1 class="text-center">Exemple d'un bouton Contraste Élevé</h1>
      <p>
        Cette page est un exemple de comment utiliser
        <a href="https://fontawesome.com/search?o=r&m=free">Font Awesome</a> et
        le JavaScript pour améliorer l'accessibilité pour les personnes
        malvoyantes.
      </p>
      <p>
        En cliquant sur l'icône ci-dessus, vous pouvez changer le contraste de
        la page pour faciliter la lecture.
      </p>
      <p>
        L'accessibilité web est essentielle pour permettre à tous les
        utilisateurs, y compris ceux ayant des limitations visuelles, de
        naviguer et d'interagir avec le contenu en ligne.
      </p>
      <p>
        J'ai utilisé Font Awesome pour l'icône du bouton de contraste. Vous
        pouvez trouver plus d'informations sur Font Awesome sur leur site web.
      </p>
      <p>
        Font Awesome est une bibliothèque d'icônes vectorielles qui peut être
        utilisée pour améliorer l'accessibilité et l'expérience utilisateur sur
        les sites web.
      </p>
      <p>
        Il y a une version gratuite de Font Awesome (2037 icônes) qui peut être
        utilisée pour ajouter des icônes à votre site web et une version
        payantes (30013 icônes) avec beaucoup plus d'icônes.
      </p>
      <p>
        Pour l'intégration le plus simple est d'aller sur le site
        <a href="https://cdnjs.com/libraries/font-awesome">&lt;cdnjs&gt;</a> et
        de sélectionner la version de Font Awesome que vous voulez utiliser.
      </p>
      <p>
        Par exemple pour la version 6.5.1 et si on veut toutes les icones on
        ajoutera la balise script suivante:
      </p>
      <p>
        <b
          >&lt;link
          rel="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"&gt;</b
        >
      </p>
    </div>
    <script>
      let btnContrast = document.querySelector("#btnContrast"); //On aurait pu utiliser getElementById sans utiliser le #
      //On ajoute un écouteur d'événement pour le clic sur le bouton
      btnContrast.addEventListener("click", function () {
        document.body.classList.toggle("highContrast");
      });
    </script>
  </body>
</html>
```

- Copiez et Testez ce code dans un fichier HTML pour voir le résultat.
- Vous pouvez voir le résultat à l'adresse suivante: [Exemple d'un bouton Contraste Élevé](https://zamboyle.github.io/Eqla_JavaScript/Cours/Demo4.html)

Dans cet exemple, nous avons un bouton avec l'icône `fa-circle-half-stroke` de Font Awesome. Lorsque le bouton est cliqué, la classe `highContrast` est ajoutée ou supprimée du corps de la page. Cette classe modifie le contraste de la page pour faciliter la lecture pour les personnes malvoyantes.

Nous utilisons `document.querySelector('#btnContrast')` pour sélectionner le bouton, puis nous ajoutons un gestionnaire d'événements `click` pour changer le contraste de la page lorsque le bouton est cliqué. Nous aurions pu utiliser `document.getElementById('btnContrast')` pour sélectionner le bouton sans utiliser le `#`.

La méthode (une fonction si vous préférez) `toggle()` de la propriété `classList`:

- ajoute la classe `highContrast` si elle n'est pas présente
- supprime la classe `highContrast` si elle est déjà présente.

C'est une façon simple de basculer entre deux états. Donc, `toggle()` ajoute la classe `highContrast` si elle n'est pas présente et la supprime si elle est déjà présente. C'est sympa hein ? :-)

#### 2.8.3. Exemple - mouseover et mouseout

Dans cet exemple, nous allons voir comment utiliser les événements `mouseover` et `mouseout`. On pourrait changer la couleur de fond d'un tableau lorsqu'on survole une ligne.

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemple d'effet d'animation avec mouseover et mouseout</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    />
    <style>
      img {
        height: 100%;
        width: auto;
        transition: transform 0.5s;
      }
    </style>
  </head>

  <body>
    <div class="container m-5 mx-auto">
      <h1 class="text-center ">Événements mouseover et mouseout</h1>
      <h2>1. Flip Horizontal</h2>
      <p>
        Ici, j'ai mis sur l'image les classes Bootstrap suivantes:
        <code
          >img-fluid border border-black border-2 rounded-circle mx-auto
          d-block</code
        >.
      </p>
      <p>
        Quand on passe la souris sur l'image, elle est retournée
        horizontalement.
      </p>
      <img
        id="img_horizontal_flip"
        src="https://source.unsplash.com/300x300/?computer"
        alt="Image de la nature"
        class="img-fluid border border-black border-2 rounded-circle mx-auto d-block"
      />
      <h2>2. Zoom</h2>
      <p>
        Quand on passe la souris sur l'image, elle est agrandie en fonction du
        facteur de zoom sélectionné.
      </p>
      <label for="myNumber">Choisissez un zoom entre 1 et 5 :</label>
      <input
        type="number"
        id="myNumber"
        name="myNumber"
        min="1"
        max="5"
        value="2"
        step="0.5"
      /><br />
      <img
        id="img_zoom"
        src="https://source.unsplash.com/300x300/?ai"
        alt="Image de l'eau"
        class="img-fluid border border-black border-2 rounded-circle mx-auto d-block"
      />
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
      let img_horizontal_flip = document.querySelector("#img_horizontal_flip");
      let img_zoom = document.querySelector("#img_zoom");
      let myNumber = document.getElementById("myNumber");

      img_horizontal_flip.addEventListener("mouseover", function () {
        img_horizontal_flip.style.transform = "scaleX(-1)";
      });

      img_horizontal_flip.addEventListener("mouseout", function () {
        img_horizontal_flip.style.transform = "scaleX(1)";
      });

      img_zoom.addEventListener("mouseover", function () {
        let zoomFactor = parseFloat(myNumber.value);
        //img_zoom.style.transformOrigin = 'center';
        img_zoom.style.transform = `scale(${zoomFactor})`;
      });

      img_zoom.addEventListener("mouseout", function () {
        img_zoom.style.transform = "scale(1)";
      });
    </script>
  </body>
</html>
```
- Copiez et testez ce code dans un fichier HTML pour voir le résultat.
- Vous pouvez voir le résultat à l'adresse suivante: [Exemple d'effet d'animation avec mouseover et mouseout](https://zamboyle.github.io/Eqla_JavaScript/Cours/Demo5.html)

On a ajouté deux écouteurs d'événements `mouseover` et `mouseout` à deux images: `img_horizontal_flip` et `img_zoom`.

Nous avons deux images. Lorsque l'utilisateur passe la souris sur la première image, elle est retournée horizontalement. Cela est réalisé en modifiant la propriété `transform` de l'image avec `scaleX(-1)` pour la retourner horizontalement. Lorsque la souris quitte l'image, la propriété `transform` est réinitialisée à `scaleX(1)` pour la remettre à l'endroit.

Pour la deuxième image, lorsque l'utilisateur passe la souris sur l'image, elle est agrandie en fonction du facteur de zoom sélectionné. Cela est réalisé en modifiant la propriété `transform` de l'image avec `scale(zoomFactor)` pour agrandir l'image. Lorsque la souris quitte l'image, la propriété `transform` est réinitialisée à `scale(1)` pour la remettre à sa taille normale.

[:arrow_up: Revenir en haut](#sommaire)

[:arrow_left: Revenir au menu principal.](../README.md#sommaire)

---

&copy; 2024 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).  
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._
