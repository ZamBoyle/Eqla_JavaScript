[:arrow_left: Revenir au menu principal.](../README.md#sommaire)

<h1 id="sommaire" style="display: flex; align-items: center; justify-content: center;">
    <img src="/Assets/eqla.png" style="height:50px">
    &nbsp;Module 2: Le DOM et les événements
</h1>


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [1. Le DOM](#1-le-dom)
- [2. Sélectionner des éléments](#2-sélectionner-des-éléments)
  - [2.1. document.getElementById()](#21-documentgetelementbyid)
  - [2.3. InnerHTML](#23-innerhtml)
  - [2.2. document.getElementsByClassName()](#22-documentgetelementsbyclassname)
  - [2.3. document.getElementsByTagName()](#23-documentgetelementsbytagname)
  - [2.4 Exemple complet avec getElementById / getElementsByTagName](#24-exemple-complet-avec-getelementbyid--getelementsbytagname)
  - [2.5. document.querySelector()](#25-documentqueryselector)

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
        if (monDiv) { // Si l'élément existe
            // Modifier le contenu du div via la propriété innerHTML
            monDiv.innerHTML = "Ceci est un div modifié.";
        }
    </script>
</body>
</html>
```
La méthode `document.getElementById()` renvoie `null` si aucun élément ne correspond à l'identifiant spécifié. Il est donc important de vérifier si l'élément existe avant de l'utiliser.

Dans l'exemple ci-dessus, nous avons un div avec l'identifiant `monDiv`. Nous utilisons `document.getElementById("monDiv")` pour sélectionner cet élément, puis nous modifions son contenu en utilisant la propriété `innerHTML`.

### 2.3. InnerHTML
La propriété `innerHTML` permet de modifier le contenu HTML d'un élément. Elle peut être utilisée pour ajouter du contenu, le remplacer ou le supprimer.

Elle est souvent utilisée pour afficher du texte ou des balises HTML dans un élément du DOM.

### 2.2. document.getElementsByClassName()
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
    <script>
        let elements = document.getElementsByClassName("maClasse");
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = i + 1 + ". Ceci est un div modifié via une class.";
        }
    </script>
</body>

</html>
```
La méthode `getElementsByClassName()` renvoie une liste d'éléments correspondant à la classe spécifiée. Dans l'exemple ci-dessus, nous avons deux divs avec la classe `maClasse`. Nous utilisons `getElementsByClassName("maClasse")` pour sélectionner ces éléments, puis nous modifions leur contenu en utilisant la propriété `innerHTML`.

### 2.3. document.getElementsByTagName()
La méthode `getElementsByTagName()` permet de sélectionner des éléments du DOM par leur balise. Elle prend en paramètre le nom de la balise à rechercher et renvoie une liste d'éléments correspondant à cette balise.

Exemple:
```js
let paragraphs = document.getElementsByTagName("p");
for (let i=0; i<paragraphs.length; i++) {
    if(!paragraphs[i].classList.contains("xmass")) {
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
        elements[i].innerHTML = i + 1 + ". Ceci est un div modifié via une balise.";
    }
</script>
</body>
</html>
```

### 2.4 Exemple complet avec getElementById / getElementsByTagName
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
        <input id="number1" type="text" value="17" size="2" />+<input id="number2" type="text" value="45" size="2" /> =
        <span id="resultat"></span>
        <h2>Les divs</h2>
        <div>Ceci est du texte dans un div mais qui n'est pas dans un paragraphe.</div>
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
            <p>Il était caché par le style css: <span style="color:black; font-weight: bold;"> display: none;</span></p>
        </div>
        <h2>Les tableaux </h2>
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
        </table><br>

        <button id="btngo" onclick="onclickBtn()">Let's go !</button>
    </div>
    <script>
        let alreadyClicked = false;
        let domComplet = document.documentElement.innerHTML; // Sauvegarde du DOM complet
        function onclickBtn() {
            if (alreadyClicked) {
                document.documentElement.innerHTML = domComplet;
            }
            else {
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

### 2.5. document.querySelector()
La méthode `document.querySelector()` permet de sélectionner le premier élément du DOM correspondant à un sélecteur CSS. Elle prend en paramètre un sélecteur CSS et renvoie l'élément correspondant.

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
                premierParagraphe.innerHTML = "Ceci est le premier paragraphe modifié.";
            }
        </script>
    </body>
</html>
```
La méthode `document.querySelector()` renvoie le premier élément correspondant au sélecteur CSS spécifié. Dans l'exemple ci-dessus, nous utilisons `document.querySelector("p")` pour sélectionner le premier paragraphe de la page, puis nous modifions son contenu en utilisant la propriété `innerHTML`.

On peut aussi retrouver un élément en fonction d'un attribut:
```javascript
let element = document.querySelector('[data-id="123"]');
let element2 = document.querySelector('[disabled]');
```
Cela permet de retrouver un élément qui a un attribut `data-id` avec la valeur `123` ou un élément qui a l'attribut `disabled`.



code qui fait disparaitre un élément:
```javascript
document.querySelector("#monElement").style.display = "none";
```


---
Nous vrrons plus tard ce code
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
            var premierParagraphe = document.querySelector("p");
            if (premierParagraphe) {
                premierParagraphe.innerHTML = "Ceci est le premier paragraphe modifié.";
            }
        </script>
    </body>
</html>
```

[:arrow_up: Revenir en haut](#sommaire)















[:arrow_left: Revenir au menu principal.](../README.md#sommaire)

---

&copy; 2024 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).  
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._

