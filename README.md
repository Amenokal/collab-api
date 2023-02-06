# Projet Intranet

# Config

Configurer la connection string dans config.js
```
template : 'mysql://username:password@database-url:port/database-name'
exemple  : 'mysql://root:@localhost:3306/intranet'
```

<br>

# Lancer le projet

Installer les dépendances
```bash
npm install
```

Lancer le serveur
```bash
npm run dev
```

<br>

# Routes

NOTES :

- @header fait référence au JWT qui doit être envoyé sous la clé "Authorization" dans le header
- @body fait référence au paramètres à passer dans le body de la requête
- @return fait référence à ce que renvoie l'API dans la response

## Auth

### Login
> POST /login

>> @body: Credentials

>> @return: JWT
---
### Logout
> POST /logout

>> @header: JWT

>> @return: 200

<br>

## User
### Récupérer tous les utilisateurs
> GET /user

>> @return: Array[User]
---
### Récupérer un seul utilisateur
> GET /user/:userId

>> @return: User (l'utilisateur dont l'id est passé dans l'URL)
---
### Récupérer un utilisateur aléatoire
> GET /user/random

>> @return: User
---
### Créer un utilisateur (admin only)
> POST /user

>> @header: JWT

>> @body: User

>> @return: User (l'utilisateur créé)
---
### Modifier un utilisateur (admin only)
> PUT /user/:userId

>> @header: JWT

>> @body: User

>> @return: User (l'utilisateur modifié)
---
### Supprimer un utilisateur (admin only)
> DELETE /user/:userId

>> @header: JWT

>> @body: User

>> @return: Array[User] (Tous les utilisateurs sauf celui venant d'être supprimé)

<br>

# DTOs
## JWT
```ts
type JWT = {
  token: String
}
```
---
## Credentials
```ts
type Credentials = {
  email: String,
  password: String
}
```
---
## User
```ts
type User = {
  gender: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  phone: String,
  city: String,
  country: String,
  photo: String,
  category: String,
  birthdate: Date,
  isAdmin: Boolean,
}
```