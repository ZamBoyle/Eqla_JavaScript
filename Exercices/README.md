[:arrow_left:Revenir au menu principal.](../README.md#sommaire)
<h1 id="sommaire" style="display: flex; align-items: center; justify-content: center;">
    <img src="/Assets/eqla.png" style="height:50px">
    &nbsp;Exercices
</h1>

<br/>

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
4. Ouvrez la page dans un navigateur et observez le résultat.

## Exercice 3 - Ficher JS Externe
1. Créez une page HTML nommée Exercice3.html
2. Créez un fichier JavaScript nommé Exercice3.js
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
1. Créez une page HTML nommée Exercice4.html
2. Insérez les balises `<script src='ex4.js'>` `</script>` juste avant la fermeture de la balise `<body>` de la page.
3. Créez un fichier JavaScript nommé ex4.js
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
14. Testez aussi via node.js en utilisant la commande `node ex4.js`.

## Exercice 6 - conditions
1. Créez une page HTML nommée Exercice5.html
2. Insérez les balises `<script src='ex5.js' defer>` `</script>` dans le `<head>` de la page.
3. Créez un fichier JavaScript nommé ex5.js
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
14. Testez aussi via node.js en utilisant la commande `node ex5.js`.









[:arrow_left:Revenir au menu principal.](../README.md#sommaire)

--- 
&copy; 2024 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).   
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._
