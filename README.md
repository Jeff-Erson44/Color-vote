PWA Color vote créé en Next.js 
BDD : MongoDb

lien vercel : https://color-vote.vercel.app/

Bonne pratique dev : 

Chaque fonctionnalité doit etrre créé sur sa propre branche avec pour origine la branche main 
- exmeple : je crée la focntionnalité connexion, je cré une branche : add/connexion

Lors d'un push je nomme mon commit avec une nomenclature spécifique en fonction de la tache réalisé : 
[FEAT] : lorsque je cré la nouvelle focntionnalité
[FIX] : lorsque je regle un bug sur une fonctionnalité déja existante
[EVOL] : lorsque j'ajoute des détails ou améliore ma fonctionnalité 

la nomenclature type d'un nom de commit ressemblerai à ceci pour l'ajout d'un bouton question suivante (par exemple ) : 
'[EVOL] {nom de la page} - {modification effectué}'
'[EVOL] Questionnaire page - ajout du bouton suivant'

A près avoir commit et push, il faut créer une pull request pour que le code soit comparer a la branche main et valider lorsqu'elle ne crée aucun conflit.
