## Firestore

Voici la documentation utile pour cette étape

- [Firestore Quick Start](https://firebase.google.com/docs/firestore/quickstart)
- [Firestore Read Data](https://firebase.google.com/docs/firestore/query-data/get-data)
- [Angular Firestore](https://github.com/angular/angularfire2/blob/master/docs/firestore/collections.md)

### Intégration dans la _Cloud Function_

- Dans la _Cloud Function_ développée précédemment, nous souhaitons à présent persister les données dans _Firestore_
- Depuis l'interface de _Firebase_, veuillez récupérer l'object de configuration permettant d'intéragir avec _Firebase_ depuis vos applications
- Dans la _Cloud Function_,
  - importez le module `firebase-admin`
  - initialisez l'accès à _Firestore_ via la méthode `initializeApp`.
  - sauvegardez la donnée retournée précédemment dans une collection `stats`
- Nous allons également avoir une collection `accounts` dans lequel nous persisterons les comptes Twitter que nous souhaitons suivre.
  - Créez cette collection, et ajouter les comptes que vous voulez suivre. Le document aura une propriété `handle` avec comme valeur le nom du compte Twitter.
  - Modifiez la dernière ligne du fichier `cron.js` en allant récupérer tout d'abord la liste des comptes depuis _Firestore_ avant d'appeler notre _Cloud Function_.
    - Tips: `cron.js` étant hors du contexte projet _Firebase_, il est important d'initialiser la connexion à _Firestore_ à l'aide d'un compte de service. Ce compte de service peut-être créé via la console _Firebase_ > Roue crantée > Utilisateurs et autorisations > Comptes de service