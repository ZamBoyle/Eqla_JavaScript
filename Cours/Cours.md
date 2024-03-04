[:arrow_left: Revenir au menu principal.](../README.md#sommaire)
<h1 id="sommaire" style="display: flex; align-items: center; justify-content: center;">
    <img src="/Assets/eqla.png" style="height:50px">
    &nbsp;Cours de JavaScript
</h1>

<br/>


## 1. Le JavaScript dans le HTML
Le JavaScript peut être inséré dans le HTML de plusieurs manières.

Voici les trois manières les plus courantes:
### 1.1 Dans la balise `<script>` du HTML.
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

### 1.2 Dans un fichier externe.
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Web</title>
        <script src="script.js"></script>
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

N'oubliez pas, l'informaticien est paresseux. Il ne veut pas réécrire le même code plusieurs fois.
### 1.3 Dans un événement
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
        <script src="script.js"></script>
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

## 2. JavaScript dans la console du navigateur
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


## 3. NodeJS: Javascript en ligne de commande
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







[:arrow_left: Revenir au menu principal.](../README.md#sommaire)

--- 
&copy; 2024 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).   
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._


