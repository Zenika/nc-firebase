author: Zenika
summary: Mise en place d'une infrastructure basée sur Firebase
id: firebase-codelab

# Firebase

Prérequis:

- NPM / Node

## Cloud Function

Positive
: Voici la documentation utile pour cette étape

- [Cloud Function ](https://firebase.google.com/docs/functions/)
- [Console Firebase](https://console.firebase.google.com)
- [JSDOM](https://www.npmjs.com/package/jsdom)

### Création du projet

Nous allons débuter ce codelab par initier le projet firebase. Pour rappel, notre projet aura besoin des fonctionnalités **Cloud Functions**, **Firestore**, **Authentification** et de **Hosting**

### Cloud Function

- Si cela n'est pas dèjà fait, installez via NPM le module **firebase-tools**
- Vérifiez que l'installation s'est bien passée, en executant la commande `firebase --help`
- Depuis la console **Firebase**, veuillez créer un nouveau projet.
- Depuis la ligne de commande,
  - Connectez-vous à Firebase via la commande `firebase login`
  - Initialisez votre projet via la commande `firebase init`
  - Sélectionnez les fonctionnalités nécessaires à notre projet
  - Déployez votre projet sur Firebase via la commande `firebase deploy`

Votre environnement est enfin prêt. Nous allons pouvoir créer notre première Cloud functions.

### Création d'une Cloud Function

- Ajoutez le support de Node 8 pour votre Cloud function.

Afin de passer à travers de la limitation de Firebase concernant les appels vers l'exterieur, pour ce codelab, nous allons écrire un script externe que nous pourrions par exemple appeler de manière régulière via un CRON.

- Créer un fichier `functions/cron.js` contenant la structure de ce fichier : https://gist.github.com/Gillespie59/139646836eb7955c2d3dbf2627b0c9a5
- Pour récupérer les données, nous allons faire du scraping de la page Web via le module NPM `jsdom`
  - Installez la dépendance `jsdom` et `node-fetch`
  - Voici les sélécteurs CSS pour les différentes informations utiles `ProfileNav-item--tweets .ProfileNav-value`, `ProfileNav-item--followers .ProfileNav-value` `.ProfileNav-item--favorites .ProfileNav-value` et `ProfileNav-item--following .ProfileNav-value`
  - Pour éxecuter le script, vous pouvez executer la commande `node cron.js`
- Créez une cloud function `contributions` permettant de récupérer les `body` de la requête. La cloud function doit retourner un JSON contenant :
  - une propriété `timestamp` correspondant à la date du jour.
  - une propriété `twitters` avec le contenu du body. Les données numériques doivent être retournées dans le bon format.
- Lancez en local votre Cloud function via la commande `firebase serve --only functions
- Modifiez la constante `functionUrl` afin de pointer vers l'URL de votre Cloud Function en local (il faudra la changer dans le futur afin de pointer vers celle en production)
- Déployez en local votre Cloud function via la commande `firebase deploy --only functions
- Regardez les statistiques de l'utilisation de votre cloud function depuis la console Firebase.

Au lieu de retourner ce JSON, nous persisterons ces donneées dans Firestore dans l'exercice suivant.
