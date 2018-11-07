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
  - sauvegardez la donnée retournée précédemment dans une collcation `stats`

## Intégration dans l'application Angular

Nous allons à présent récupérer ces données depuis notre application Angular.

- Installez les modules `@angular/fire`
- Dans le module applicatif, veuillez importer les modules Angular nécessaires : `AngularFireModule` et `AngularFirestoreModule`
- Modifiez le service `data.service.js` afin de récupérer les données stockssées dans Firestore.
