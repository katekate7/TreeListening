## Installation
 
### Backend (API Symfony)
 
1. Clonez le repository :
   
   git clone https://github.com/katekate7/TreeListening
   
2. Naviguez vers le dossier de l'API :
   
   cd TpOnline_back/api-modules
   
3. Installez les dépendances :
   
   composer install
   
4. Configurez votre base de données dans le fichier `.env`
5. Créez la base de données :
   
   php bin/console doctrine:database:create
   
6. Exécutez les migrations :
   
   php bin/console doctrine:migrations:migrate
   
7. Lancez le serveur Symfony :
   
   symfony server --no-tls
 
 
### Frontend (React)
 
1. Naviguez vers le dossier frontend :
   
   cd TpOnline_front/client
   
2. Installez les dépendances :
   
   npm install
   
3. Lancez l'application :
   
   npm start
   
 
## Présentation de l'application
 
Learn Online est une plateforme d'apprentissage en ligne qui permet aux utilisateurs de s'inscrire, de se connecter et d'accéder à différents modules de cours.
 
### Détails des endpoints
 
- POST `/api/login_check` : Authentification de l'utilisateur
- GET `/api/modules` : Récupération de tous les modules
- POST `/api/logout` : Déconnexion de l'utilisateur
 
## Stacks techniques
 
- Frontend : React, TypeScript, Redux Toolkit
- Backend : Symfony 6, PHP 8.1, PostgreSQL
- Authentification : JWT (JSON Web Tokens)
- API : RESTful
 
## Structure de la base de données
 https://lucid.app/lucidchart/3e32c83f-c469-442b-80a0-6c273b9992ee/edit?viewport_loc=-830%2C-443%2C3134%2C1756%2C0_0&invitationId=inv_5cfb6219-1922-4f8d-bd64-94c932a1409d

## Généralité Sécurité
 
- Utilisation de JWT pour l'authentification
- Hachage des mots de passe avec bcrypt
- Validation des données côté serveur
- Protection CSRF
- Gestion des rôles et permissions
 
### Wireframe
\Tree_learning\wireframe.png
 ![Screenshot 2024-12-01 225936](https://github.com/user-attachments/assets/97820f33-3a32-47ea-94c4-7c906bae237d)

### Intégration des wireframes

L'interface utilisateur a été créée avec une grande précision, comme sur la maquette.
 
### Authentification JWT
 
![photo_2024-11-27_22-53-50](https://github.com/user-attachments/assets/ead475b2-5569-4150-b76d-215a0641beb1)

L'authentification repose sur les JSON Web Tokens (JWT) pour garantir la sécurité des échanges entre le frontend et le backend. Voici comment cela se déroule :

L'utilisateur transmet ses identifiants (email et mot de passe).
Le serveur contrôle ces informations dans la base de données des utilisateurs.
Si les identifiants sont corrects, le serveur génère un JWT qui contient l'identifiant (ID) et les rôles de l'utilisateur.
Le JWT est renvoyé au client qui le stocke
À chaque requête, le client joint le JWT dans l'en-tête Authorization.
Le serveur vérifie le JWT pour chaque requête afin de valider l'accès aux ressources.
 
### Récupération des modules
 
Les modules sont obtenus depuis l'API backend et affichés dans l'interface utilisateur. Seuls les utilisateurs authentifiés ont accès à ces modules.

 
## Explication du JWT Token
 
Le token est utilisé pour maintenir l'état de connexion de l'utilisateur et autoriser l'accès aux ressources protégées sans avoir besoin de constamment ré-authentifier l'utilisateur.

## Frontend
Composants : Organisés selon la méthodologie Atomic Design, ils sont classés par niveau de complexité :

- Atoms : Composants de base, comme les boutons ou les champs de saisie.
- Molecules : Groupes d’éléments atomiques, comme un formulaire de connexion.
- Organisms : Composants plus avancés qui combinent plusieurs molécules.
- Templates : Structures réutilisables pour construire des pages.
- Routes : Définit les chemins de l’application, comme ceux pour accéder aux modules ou aux utilisateurs.

- Store : Centralise et gère l’état global de l’application à l’aide de Redux.

- API : Contient les configurations pour interagir avec le backend via des endpoints.

## Backend
- API Symfony : Responsable de la logique métier et des échanges avec la base de données.

- Controllers : Gèrent les requêtes HTTP et envoient les réponses correspondantes.
- Entities : Représentent les modèles de données stockés dans la base de données.
- Repositories : Permettent l’accès et la gestion des données.
- Base de données : Utilise PostgreSQL pour le stockage des données.

## Interactions entre Frontend et Backend
Le frontend envoie des requêtes API vers le backend.
Les controllers traitent les requêtes et utilisent les repositories pour récupérer ou modifier les données.
Les repositories accèdent directement à la base de données PostgreSQL pour gérer les informations nécessaires.
