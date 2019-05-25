# Le site dont vous êtes le héros

URL du site : https://happybirthdead.netlify.com/

### Groupe

- Samir Chalal
- Léa De Amorin


### Rendu final

Cette grille va vous permettre de pré-évaluer votre travail. Pour chaque ligne, indiquez *Oui*, *Non* ou *En partie*. Plus placez la grille en haut de votre fichier README.md. La non-complétion de la grille entraînera des malus.

Notes :
- Il ne s'agit pas du barême final, mais d'une checklist vous permettant d'évaluer la conformité de votre travail par rapport au cahier des charges.
- Si une contrainte semble ne pas s'appliquer à votre situation, posez-nous la question !

| Type  | Objectif | Fait ? | 
| ----- | -------- | ------ |
| Setup | Le repository respecte la nomenclature `w1p2021-hero-amsellem-calou`, avec tous les noms des membres, et les membres sont cités dans le README.md | Oui |
| Setup | Le site est en ligne, et l'URL est citée dans le README.md | Oui |
| Setup | Le site utilise VueJS | Oui |
| Setup | Cloner le repository et exécuter `npm install` puis `npm run dev` s'effectue sans encombre | Oui |
| Données | Un fichier `data.json` est utilisé pour stocker la structure du jeu | Oui |
| Données | Le fichier `data.json` décrit 30 phases de jeu ou plus. Indiquez *En partie* s'il en décrit plus de 15. | Oui |
| Pages | Une page d'accueil est présente | Oui |
| Pages | Une page de choix du personnage est présente | Oui |
| Pages | Une page de victoire est présente | Oui |
| Pages | Une page d'échec est présente | Oui |
| Routing | Une route dont l'`id` varie permet d'afficher les différentes étapes du jeu | Oui |
| Routing | Lorsqu'on recharge la page (`Ctrl + R`), on se trouve toujours à la même étape | Oui |
| Transitions | Chaque page apparaît grâce à une transition fluide (la complexité de la transition n'est pas prise en compte ici) | Oui |
| Transitions | Les transitions internes au jeu (d'une étape à une autre) et externes (intro, fin...) sont différentes | Oui |
| État | Le choix du personnage et/ou de ses caractéristiques impacte l'aventure au moins une fois. **Dans la phase 13 du jeu si on choisit Lisa, un des chois sera "regarder un film", si on choisit Bart, un des choix sera "Faire un beerpong"** | Oui |
| État | Une décision ou un événement aléatoire survenu pendant l'aventure a un impact sur la suite, au moins une fois. **Indiquez ici comment succintement.** | NON |
| État | Le choix du personnage et/ou ce qu'il s'est passé pendant l'aventure impactent l'écran de fin. **Si on choisit le personnage de Lisa, dans l'écran de fin il y aura un gif de Lisa, si on choisiy Bart, le gif sera de Bart** | Oui |
| État | Au moins un service (classe de type `GameService`) est utilisé | NON |
| Sauvegarde | Lorsqu'on recharge la page (`Ctrl + R`), le personnage, ses caractéristiques, les choix du joueur et tout le reste sont rétablis | NON |
| Sauvegarde | Lorsqu'on quitte le jeu et qu'on revient plus tard à la page d'accueil (sur le même navigateur), il est possible de reprendre l'aventure où on l'avait laissée | NON |
| Multimédia | L'expérience présente une vidéo ou plus **Un gif sur l'écran de fin** | Oui |
| Multimédia | L'expérience présente un audio ou plus | Oui |
| Multimédia | L'utilisateur a la possibilité de couper le son à tout moment | Oui |
