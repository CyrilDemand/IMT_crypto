# Application de votes

## État d'avancement

- Le Back est fonctionnel. Le contrat se déploie et il est possible de l'appeler.
- Nous n'avons pas réussi la liasion entre le front et le back avec web3.js.
- Le front est fonctionnel avec une page admin et une page electeur (vers lesquelles ont aurait été automatiquement redirigé si nous avons réussi à lier le front au back).

## Notre groupe

Nous avons travaillé en méthode Scrum. Nous avons utilisé git pour gérer les versions.

**Noé Delcroix** : Front End
<br>
<img src="./app/client/src/img/noe.png"  width="150" height="150">

**Cyril Demand** : Front End
<br>
<img src="./app/client/src/img/cyril.png"  width="150" height="150">

**Alexis Bourdarias** : Liaison entre le Back et le Front
<br>
<img src="./app/client/src/img/alexis.png"  width="150" height="150">

**Lucas Senez** : Liaison entre le Back et le Front
<br>
<img src="./app/client/src/img/lucas.png"  width="150" height="150">

**Thomas Nigault** : Back End et Scrum Master
<br>
<img src="./app/client/src/img/thomas.png"  width="150" height="150">

**Louis Clorennec** : Back End
<br>
<img src="./app/client/src/img/louis.png"  width="150" height="150">

## Instrutions pour lancer le projet en local

- `npm i` dans tous les dossiers où il y a un package.json

- Commencer par installer et lancer ganache (dans un terminal à part)<br>
  `npm install -g ganache`
  `ganache`

- Compiler et migrer truffle<br>
  dans le dossier truffle :
  `truffle compile`
  `truffle migrate`

- lancer le client web (dans un autre terminal)<br>
  dans le dossier client :
  `npm start`