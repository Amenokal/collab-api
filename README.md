# Projet Intranet

# Config

La config est accessible via la variable Config (``/src/_config.js``) qui récupère les infos du .env

## SEQUELIZE: 

Configurer la connection string dans le fichier .env

DB_CONNECTION="``db_type``://``<username``:``password``@``database-url:port``/``database-name``"

```
exemple : DB_CONNECTION="mysql://root:@localhost:3306/exo-intranet-db"
```

<br>

# Lancer le projet

Installer les dépendances
```bash
npm install
```

Lancer le serveur
```bash
dev: npm run dev
prod: npm run serve
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
### Refresh JWT
> POST /refresh

>> @body: userId (Int)

>> @return: JWT
---
### Logout
> POST /logout

>> @header: JWT

>> @return: http code 200 (void)

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

>> @return: User (l'utilisateur supprimé)

<br>

## Message

### Récupérer les messages de l'utilisateur connecté

> GET /message

>> @header: JWT

>> @return: Array[Message]
---
### Envoyer un message

> POST /message

>> @return: http code 200 (void)
---
### Supprimer un message

> DELETE /message/:msgId

>> @header: JWT

>> @return: Message (le message supprimé)

<br>

# Models & DTOs
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
  id: Integer
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
---
## Message
```ts
type Message = {
  id: Integer
  senderId: Integer,
  receiverId: Integer,
  content: String
}
```