author: Zenika
summary: Mise en place d'une infrastructure basée sur Firebase
id: firebase-codelab

# Firebase

Prérequis:

- NPM / Node

## Firestore

Positive
: Voici la documentation utile pour cette étape

- [Blabla](blabla)

### Création du projet

- création d'un projet firebase

### Cloud Function

#### Accéder aux APIs Twitter
Avant de pouvoir accéder aux APIs Twitter, il est nécessaire de demander un compte développeur [ici](https://developer.twitter.com/en/apply-for-access).  
Ensuite, on peut suivre le [guide de démarrage de Twitter](https://developer.twitter.com/en/account/get-started) qui nous indique comment créer une App.  
Inutile de suivre les étapes suivantes (création d'un environnement de développement, etc.) car on se contente des APIs Standards de Twitter.

Une fois l'App créée, suivre ce [tuto](https://developer.twitter.com/en/docs/basics/authentication/overview/application-only) permettant de générer un token pour contacter les APIs.
À l'aide de cet access token, appeler l'API [Followers de @TwitterDev](https://api.twitter.com/1.1/followers/list.json?cursor=-1&screen_name=twitterdev&skip_status=true&include_user_entities=false)


En résumé :
	- Créer un compte développeur
	- Créer une App
	- Générer un Access Token
	- Faire un appel API

#### Écrire et Tester la Cloud Function
- écrire une cloud fonction permettant de récupérer le nombre de followers / tweets du compte passé en paramètre. Pour l'instant on retournera le résultat

### Sauvegarde
- sauvegarde de ces données dans firebase. 

### Cron
- appeler cette fonction avec un cron via la service que était dans appengine et que Google vient de sortir

