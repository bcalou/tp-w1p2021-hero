# Le site dont vous êtes le héros

URL du site : https://nifty-kare-1b7351.netlify.com/

### Groupe

- Louis Genestier
- Louise Formery

### Schéma

https://i.imgur.com/6fqdJzW.jpg

### Grille d'auto-évaluation

| Type  | Objectif | Fait ? | 
| ----- | -------- | ------ |
| Setup | Le repository respecte la nomenclature `w1p2021-hero-amsellem-calou`, avec tous les noms des membres, et les membres sont cités dans le README.md | oui |
| Setup | Le site est en ligne, et l'URL est citée dans le README.md | oui |
| Setup | Le site utilise VueJS | oui |
| Setup | Cloner le repository et exécuter `npm install` puis `npm run dev` s'effectue sans encombre | oui |
| Données | Un schéma numérique ou papier (scanné ou photographié) décrivant les différentes étapes et enchaînements possible. Affiché dans ce readme (si plusieurs images sont nécessaires, en afficher plusieurs, mais essayer d'être synthétique). | oui |
| Données | Un fichier `data.json` est utilisé pour stocker la structure du jeu | oui |
| Données | Le fichier `data.json` décrit 30 phases de jeu ou plus. Indiquez *En partie* s'il en décrit plus de 15. | oui |
| Pages | Une page d'accueil est présente | oui |
| Pages | Une page de choix du personnage est présente | oui |
| Pages | Une page de victoire est présente | oui |
| Pages | Une page d'échec est présente | oui |
| Routing | Une route dont l'`id` varie permet d'afficher les différentes étapes du jeu | oui |
| Routing | Lorsqu'on recharge la page (`Ctrl + R`), on se trouve toujours à la même étape | - |
| Transitions | Chaque page apparaît grâce à une transition fluide (la complexité de la transition n'est pas prise en compte ici) | oui |
| Transitions | Les transitions internes au jeu (d'une étape à une autre) et externes (intro, fin...) sont différentes | non |
| État | Le choix du personnage et/ou de ses caractéristiques impacte l'aventure au moins une fois. **Indiquez ici comment succintement.** | non |
| État | Une décision ou un événement aléatoire survenu pendant l'aventure a un impact sur la suite, au moins une fois. **Indiquez ici comment succintement.** | oui car certains personnages peuvent nous trahir |
| État | Le choix du personnage et/ou ce qu'il s'est passé pendant l'aventure impactent l'écran de fin. **Indiquez ici comment succintement.** | oui en fonction du game over du joueur la page d'accueil explique où il s'est trompé |
| État | Au moins un service (classe de type `GameService`) est utilisé | non |
| Sauvegarde | Lorsqu'on recharge la page (`Ctrl + R`), le personnage, ses caractéristiques, les choix du joueur et tout le reste sont rétablis | non |
| Sauvegarde | Lorsqu'on quitte le jeu et qu'on revient plus tard à la page d'accueil (sur le même navigateur), il est possible de reprendre l'aventure où on l'avait laissée | non |
| Multimédia | L'expérience présente une vidéo ou plus | non |
| Multimédia | L'expérience présente un audio ou plus | oui |
| Multimédia | L'utilisateur a la possibilité de couper le son à tout moment | non |
