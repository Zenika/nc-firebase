## Authentication

Positive
: Voici la documentation utile pour cette étape

- [Firebase Authentication](https://firebase.google.com/docs/auth/)
- [@angular/fire](https://github.com/angular/angularfire2/blob/master/docs/auth/getting-started.md)

- Depuis la console de Firebase, veuillez activer l'authentification via les providers **Google** et **Twitter**
- Ajoutez dans Firestore les regles suivantes : 
  - l'insertion des donnees ne peut être réalisée que par notre Cloud function. (Impossible d'ajouter des documents depuis l'application Angular par exemple)
  - Pour récupérer les données, il faut être connecté. 
- Dans l'application Angular, veuillez modifier le service `UserService` afin d'appeler l'api d'`@angular/fire` pour gérer l'authentification de vos utilisateurs. Vous devez modifier les methodes `signInWithGoogle`, `signInWithTwitter`, `logout` et `isLoggedIn`.

