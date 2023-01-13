PWA Color vote créé en Next.js 
BDD : MongoDb
ORM: Prisma

lien vercel : https://color-vote.vercel.app/
lien Figma : https://www.figma.com/file/IuKYvkGECDieEmT11YSRPc/Colorvote?node-id=95%3A147&t=Z48pwXNoMjdrTEPf-0

<h2>Comment Initialiser le projet ?</h2>

Après s'être rendu sur le github, il suffit de cloner le projet. <br>
🚨 Ne pas oublier d'installer toutes les dépendances à l'aide de la commande : <strong> npm install </strong> <br>

Ensuite pour démarrer le projet en local lancer la commande : <strong> npm run dev </strong> <br>

L'application est hiérarchisé en 3 parties, <br> 
le coté serveur avec le dossier 'api', dans lequel on peut retrouver les différentes requêtes, utiliser pour les différentes fonctionnalitées<br>
le côté client qui a pour racine le dossier 'pages', dans lequel les différentes vues de l'application <br>
et dans un dernier temps le dossier 'prisma' qui regroupe la connexion entre notre serveur MongoDB et notre front next.js, le schéma Prisma ainsi que les CRUD des différentes fonctions.
<br>
<br>
- Notre application web nous permet de se connecter en tant qu'admin ou utilisateur <br> 
- Créer une nouvelle session et donc un nouveau questionnaire <br> 
- Affciher les dernières session <br> 
- Un dashboard qui permet a l'admin d'avoir une vu d'ensemble sur la dernière session <br> 

<br>
<br>

Les dépendances installé sont les suivantes : <br>
- Babel : pour compiler son css <br>
- styled-compoents <br>
- prisma <br>
- mongodb <br>
- next-pwa <br>
- chart.js<br>


🚨 Pour se connecter en tant qu'admin, il suffit de mettre en nom 'te'
et en mot de passe : 'po'<br>



Bonne pratique dev  👍 : 

Chaque fonctionnalité doit etrre créé sur sa propre branche avec pour origine la branche main <br>
- exmeple : je crée la focntionnalité connexion, je cré une branche : <br>
 add/connexion ✅

Lors d'un push je nomme mon commit avec une nomenclature spécifique en fonction de la tache réalisé :
<br>
➡️ [FEAT] : lorsque je cré la nouvelle focntionnalité
<br>
➡️ [FIX] : lorsque je regle un bug sur une fonctionnalité déja existante
<br>
➡️ [EVOL] : lorsque j'ajoute des détails ou améliore ma fonctionnalité 

la nomenclature type d'un nom de commit ressemblerai à ceci pour l'ajout d'un bouton question suivante (par exemple ) : 
<br>
'[EVOL] {nom de la page} - {modification effectué}'
<br>
'[EVOL] Questionnaire page - ajout du bouton suivant' ✅
<br>

📢 Après avoir commit et push, il faut créer une pull request pour que le code soit comparer a la branche main et valider lorsqu'elle ne crée aucun conflit.


Crédit : <br> 
Yang Justine <br>
Aaouis Zakariae <br>
Kouao Jefferson <br>
Thayandan Abidesh <br>
