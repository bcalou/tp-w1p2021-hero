# Le site dont vous êtes le héros

URL du site : https://urinup.netlify.com/

### Groupe

- Hélène MARGARY
- Sarah GÜNGÖR

### Grille d'auto-évaluation

| Type  | Objectif | Fait ? | 
| ----- | -------- | ------ |
| Setup | Le repository respecte la nomenclature `w1p2021-hero-amsellem-calou`, avec tous les noms des membres, et les membres sont cités dans le README.md | OUI |
| Setup | Le site est en ligne, et l'URL est citée dans le README.md | OUI |
| Setup | Le site utilise VueJS | OUI |
| Setup | Cloner le repository et exécuter `npm install` puis `npm run dev` s'effectue sans encombre | OUI |
| Données | Un fichier `data.json` est utilisé pour stocker la structure du jeu | OUI |
| Données | Le fichier `data.json` décrit 30 phases de jeu ou plus. Indiquez *En partie* s'il en décrit plus de 15. | OUI |
| Pages | Une page d'accueil est présente | OUI |
| Pages | Une page de choix du personnage est présente | OUI |
| Pages | Une page de victoire est présente | OUI |
| Pages | Une page d'échec est présente | OUI |
| Routing | Une route dont l'`id` varie permet d'afficher les différentes étapes du jeu | OUI |
| Routing | Lorsqu'on recharge la page (`Ctrl + R`), on se trouve toujours à la même étape | OUI |
| Transitions | Chaque page apparaît grâce à une transition fluide (la complexité de la transition n'est pas prise en compte ici) | EN PARTIE |
| Transitions | Les transitions internes au jeu (d'une étape à une autre) et externes (intro, fin...) sont différentes | EN PARTIE |
| État | Le choix du personnage et/ou de ses caractéristiques impacte l'aventure au moins une fois. **Indiquez ici comment succintement.** | OUI, chacun des personnages a un item associé (portable ou journal) qui peut mener vers des chemins spécifiques. L'un des deux entrave d'avantage le chemin du joueur vers la victoire |
| État | Une décision ou un événement aléatoire survenu pendant l'aventure a un impact sur la suite, au moins une fois. **Indiquez ici comment succintement.** | OUI, le joueur a la possibilité de récupérer un objet dans le métro, s'il ne le fait pas et qu'il a également choisi le personnage qui ne facilite pas la victoire, alors il perdra à coup sûr |
| État | Le choix du personnage et/ou ce qu'il s'est passé pendant l'aventure impactent l'écran de fin. **Indiquez ici comment succintement.** | OUI, le contenu de l'écran de fin n'affiche pas le même message à chaque fois |
| État | Au moins un service (classe de type `GameService`) est utilisé | OUI |
| Sauvegarde | Lorsqu'on recharge la page (`Ctrl + R`), le personnage, ses caractéristiques, les choix du joueur et tout le reste sont rétablis | EN PARTIE... le choix du personnage est rétabli, mais pas ses animations |
| Sauvegarde | Lorsqu'on quitte le jeu et qu'on revient plus tard à la page d'accueil (sur le même navigateur), il est possible de reprendre l'aventure où on l'avait laissée | NON |
| Multimédia | L'expérience présente une vidéo ou plus | NON, nous avons préféré faire des animations svg/css |
| Multimédia | L'expérience présente un audio ou plus | OUI |
| Multimédia | L'utilisateur a la possibilité de couper le son à tout moment | OUI |

L'arborescence : 

Le schéma de départ est un peu obsolète. Une dizaine d'étapes qui n'y apparaissent pas ont été ajoutées à l'histoire. 

![schéma](https://github.com/hlnmargary/w1p2021-hero-gungor-margary/blob/master/app/assets/img/arborescence.pdf)
