# Le site 

URL du site : http://underthedome.netlify.com

### Groupe

- Eden Bergel
- Hanna Bergel

### Shéma explicatif

1ère photo

![Shéma](https://github.com/edenbergel/w1p2021-hero-bergel-bergel/blob/master/app/assets/images/1.png)

2nde photo

![Shéma](https://github.com/edenbergel/w1p2021-hero-bergel-bergel/blob/master/app/assets/images/2.png)

3ème photo

![Shéma](https://github.com/edenbergel/w1p2021-hero-bergel-bergel/blob/master/app/assets/images/3.png)



### Grille d'auto-évaluation

| Type  | Objectif | Fait ? | 
| ----- | -------- | ------ |
| Setup | Le repository respecte la nomenclature `w1p2021-hero-amsellem-calou`, avec tous les noms des membres, et les membres sont cités dans le README.md | - OUI|
| Setup | Le site est en ligne, et l'URL est citée dans le README.md | - OUI|
| Setup | Le site utilise VueJS | - OUI|
| Setup | Cloner le repository et exécuter `npm install` puis `npm run dev` s'effectue sans encombre | - OUI|
| Données | Un schéma numérique ou papier (scanné ou photographié) décrivant les différentes étapes et enchaînements possible. Affiché dans ce readme (si plusieurs images sont nécessaires, en afficher plusieurs, mais essayer d'être synthétique). | - OUI|
| Données | Un fichier `data.json` est utilisé pour stocker la structure du jeu | - OUI|
| Données | Le fichier `data.json` décrit 30 phases de jeu ou plus. Indiquez *En partie* s'il en décrit plus de 15. | - OUI|
| Pages | Une page d'accueil est présente | - OUI|
| Pages | Une page de choix du personnage est présente | - OUI|
| Pages | Une page de victoire est présente | - OUI|
| Pages | Une page d'échec est présente | - OUI|
| Routing | Une route dont l'`id` varie permet d'afficher les différentes étapes du jeu | - OUI|
| Routing | Lorsqu'on recharge la page (`Ctrl + R`), on se trouve toujours à la même étape | - OUI|
| Transitions | Chaque page apparaît grâce à une transition fluide (la complexité de la transition n'est pas prise en compte ici) | - OUI|
| Transitions | Les transitions internes au jeu (d'une étape à une autre) et externes (intro, fin...) sont différentes | - OUI|
| État | Le choix du personnage et/ou de ses caractéristiques impacte l'aventure au moins une fois. **Indiquez ici comment succintement.** | - OUI, /game/1 : l'un des personnages choisis aura plus de choix possibles que l'autre|
| État | Une décision ou un événement aléatoire survenu pendant l'aventure a un impact sur la suite, au moins une fois. **Indiquez ici comment succintement.** | - OUI, /game/20 : le choix aura un impact lors du futur combat à /game/25|
| État | Le choix du personnage et/ou ce qu'il s'est passé pendant l'aventure impactent l'écran de fin. **Indiquez ici comment succintement.** | - OUI, la phrase qui explique pourquoi il est mort change en fonction actions faites|
| État | Au moins un service (classe de type `GameService`) est utilisé | - OUI|
| Sauvegarde | Lorsqu'on recharge la page (`Ctrl + R`), le personnage, ses caractéristiques, les choix du joueur et tout le reste sont rétablis | - OUI|
| Sauvegarde | Lorsqu'on quitte le jeu et qu'on revient plus tard à la page d'accueil (sur le même navigateur), il est possible de reprendre l'aventure où on l'avait laissée | - NON|
| Multimédia | L'expérience présente une vidéo ou plus | - OUI|
| Multimédia | L'expérience présente un audio ou plus | - OUI|
| Multimédia | L'utilisateur a la possibilité de couper le son à tout moment | - NON|

