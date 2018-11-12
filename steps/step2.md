## Firestore

Positive
: Voici la documentation utile pour cette étape

- [Firestore](https://firebase.google.com/docs/firestore/quickstart)
- [Angular Fire](https://github.com/angular/angularfire2/blob/master/docs/firestore/collections.md)

## Intégration dans la Cloud Function

- Dans la cloud function développée précédemment, nous souhaitons à présent persister les données dans `Firestore`
- Depuis l'interface de Firebase, veuillez récupérer l'object de configuration permettant d'intéragir avec Firebase depuis vos applications
- Dans la cloud function,
  - importez le module `firebase-admin`
  - initialisez l'accès à Firestore via la méthode `initializeApp`.
  - sauvegardez la donnée retournée précédemment dans une collection `stats`

## Intégration dans l'application Angular

Nous allons à présent récupérer ces données depuis notre application Angular.

- Installez les modules `@angular/fire` et `firebase`
- Dans le module applicatif, veuillez importer les modules Angular nécessaires : `AngularFireModule` et `AngularFirestoreModule`
- Afin d'initialiser le module `AngularFireModule`, il est nécessaire de définir la paramètrage défini dans la console **Firebase**
- Modifiez le service `data.service.js` afin de récupérer les données stockées dans Firestore.
  - Les méthodes `getData` et `getAccountsToSpy` doivent retournées des Observables émettant les données stockées dans Firestore.
  - Les méthodes `addTwitter` et `removeTwitter` permettront d'ajouter et de supprimer des comptes Twitter.
