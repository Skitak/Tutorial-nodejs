# Tutorial nodejs

Tutoriel Node Js

Note :
Les lignes à faire dans la console sont entourées de \*\*\*

\*\*\*<br>
`ma ligne de commande`
<br>\*\*\*<br>

Le download de nodejs (18.12 LTS) : https://nodejs.org/en/

# Exercice 1 - NPM et Hello world

Npm est un outil qui s'occupe de gérer les librairies dont on a besoin pour faire fonctionner notre site web.
*Pas besoin de l'installer, il vient tout seul avec l'installation de nodejs le malin*

## Faire fonctionner le projet git

Note :
Cette section décrit comment faire fonctionner le code que tu as pull.
La section pour faire le projet est un peu plus bas.

### Installer les librairies

Si tu viens de pull le projet, tu vas lancer cette ligne de commande :

\*\*\*<br>
`npm install`
<br>\*\*\*<br>
Cette commande sert à installes les dépendances définies dans packages.json

### Lancer le serveur

\*\*\*<br>
`node index.js`
<br>\*\*\*<br>

#### Tester

http://localhost:3000 <br>
![img_0.png](.media/img_0.png)<br>

## Faire le projet de A à Z

### Initialiser npm

\*\*\*<br>
`npm init`
<br>\*\*\*<br>
![img_1.png](.media/img_1.png) <br>
npm init est une commande qui va générer le fichier de configuration "package.json".
Dans ce fichier, on va indiquer les librairies dont on a besoin mais aussi des informations liées au projet (autheurs, licences, etc ).

### Installer Express

\*\*\*<br>
`npm install express`
<br>\*\*\*<br>
![img_2.png](.media/img_2.png) <br>
Express est un framework très light qui facilite l'utilisation de node.
Le fichier de configuration package.json a été modifie pour y répertorier express comme librairie dans la section "dependencies".

### Utiliser les derniers standards javascript ES6

Ajouter au fichier de configuration package.json la ligne `"type": "module",` cela permet d'utiliser les derniers standards javascript.<br>
![img_3.png](.media/img_3.png) <br>

## Premier Hello world

Créer un fichier à la racine du projet nommé index.js .

*Je t'invite à ouvrir le fichier index.js, j'y ai mis des commentaires pour t'expliquer les commandes.*

### Lancer le serveur

\*\*\*<br>
`node index.js`
<br>\*\*\*<br>
![img_4.png](.media/img_4.png) <br>

#### Tester

http://localhost:3000 <br>
![img_5.png](.media/img_5.png) <br>
