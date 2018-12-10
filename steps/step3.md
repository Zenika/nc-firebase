## Authentication

Positive
: Voici la documentation utile pour cette étape

- [Firebase Authentication](https://firebase.google.com/docs/auth/)
- [@angular/fire](https://github.com/angular/angularfire2/blob/master/docs/auth/getting-started.md)

### Sécurisation des données

Nous allons à présent sécuriser l'accés à nos données.

- Dans le fichier `firestore.rules`
  - Dans la collection `stats`, l'insertion des données ne peut être réalisée que par notre Cloud function. (Impossible d'ajouter des documents depuis l'application Angular par exemple)
  - Pour insérer des données dans la collection `accounts`, il faut être connecté
  - Pour récupérer les données, il faut être connecté.

Vous pouvez tester ces règles via le simulateur en ligne disponible depuis la console Firebase.

Pour aller plus loin, vous pouvez :

- Installer le plugin VSCode pour avoir de la coloration syntaxique dans le fichier `firestore.rules`
- Ajouter des tests unitaires à vos règles de sécurité

