# DONGEON RUSH

### Présentation du jeu

Perdu au fin fond d’une forêt dense vous entrez par mégarde dans un donjon se refermant immédiatement derrière vous. 

Vous voilà piégé , inspiré de jeu tel que Zelda , dofus ou labyrinthe, Dungeon rush vous propose de partir à l’exploration de ce donjon composé de 25 pièces différentes.

L’élément central de ce donjon étant une étrange stèle vous devrez interagir avec les éléments de ce donjon afin de pouvoir activer son effet! 

Brigand , méchant , mendiant et bien d’autres embûches se trouvent sur votre chemin, prenez garde à vous et qui sait peut être serez vous en mesure de sortir de ce donjon !!!

Si la rage , la colère , l’égarement ou l’insatisfaction s’empare de vous, la solution se trouve dans le read me ;) 

Bon courage !

- URL du site : https://dungeon-rush.netlify.com/

### Groupe

- Jason Gauvin
- Corentin Thibault

### Grille d'auto-évaluation

| Type  | Objectif | Fait ? | 
| ----- | -------- | ------ |
| Setup | Le repository respecte la nomenclature `w1p2021-hero-amsellem-calou`, avec tous les noms des membres, et les membres sont cités dans le README.md | oui |
| Setup | Le site est en ligne, et l'URL est citée dans le README.md | oui |
| Setup | Le site utilise VueJS | oui |
| Setup | Cloner le repository et exécuter `npm install` puis `npm run dev` s'effectue sans encombre | oui |
| Données | Un schéma numérique ou papier (scanné ou photographié) décrivant les différentes étapes et enchaînements possible. Affiché dans ce readme (si plusieurs images sont nécessaires, en afficher plusieurs, mais essayer d'être synthétique). | - |
| Données | Un fichier `data.json` est utilisé pour stocker la structure du jeu | oui |
| Données | Le fichier `data.json` décrit 30 phases de jeu ou plus. Indiquez s'il en décrit plus de 15. | oui |
| Pages | Une page d'accueil est présente | oui |
| Pages | Une page de choix du personnage est présente | oui |
| Pages | Une page de victoire est présente | oui |
| Pages | Une page d'échec est présente | oui |
| Routing | Une route dont l'`id` varie permet d'afficher les différentes étapes du jeu | oui |
| Routing | Lorsqu'on recharge la page (`Ctrl + R`), on se trouve toujours à la même étape | oui |
| Transitions | Chaque page apparaît grâce à une transition fluide (la complexité de la transition n'est pas prise en compte ici) | oui |
| Transitions | Les transitions internes au jeu (d'une étape à une autre) et externes (intro, fin...) sont différentes | oui |
| État | Le choix du personnage et/ou de ses caractéristiques impacte l'aventure au moins une fois. **Les caractéristiques de base de chaque personnage sont différentes. Elles donnent ainsi un avantage ou un désavantage de départ différent en fonction de notre choix. Par exemple, l'un est imunisé contre les poison et l'autre aux morçures** | oui |
| État | Une décision ou un événement aléatoire survenu pendant l'aventure a un impact sur la suite, au moins une fois. **Chaque choix, les accessoires influe sur les caractéristiques des personnages en les augmentant ou les diminuant. Par la suite, il sera nécessaire d'avoir un certain nombre de d'accessoires pour passer certaines étapes du jeu** | oui |
| État | Le choix du personnage et/ou ce qu'il s'est passé pendant l'aventure impactent l'écran de fin. **Avant la page de fin, il génère une phrase d'alerte qui dépend du choix qui a tué le joueur** | oui |
| État | Au moins un service (classe de type `GameService`) est utilisé | oui |
| Sauvegarde | Lorsqu'on recharge la page (`Ctrl + R`), le personnage, ses caractéristiques, les choix du joueur et tout le reste sont rétablis | oui |
| Sauvegarde | Lorsqu'on quitte le jeu et qu'on revient plus tard à la page d'accueil (sur le même navigateur), il est possible de reprendre l'aventure où on l'avait laissée | oui |
| Multimédia | L'expérience présente une vidéo ou plus | oui |
| Multimédia | L'expérience présente un audio ou plus | oui, mais not working with parcel.... Le code est là ! |
| Multimédia | L'utilisateur a la possibilité de couper le son à tout moment | mais not working with parcel.... Le code est là ! |

![Image d'explication du jeu](../assets/images/coco/assets-readme.png)