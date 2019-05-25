# Le site dont vous êtes le héros

URL du site : https://betweenthedeath.netlify.com/



LIEN POUR VOIR LE SCHÉMA DU JEU (screens impossible) : https://www.gloomaps.com/GWQDwgfkGw
### Groupe

- Teddy Boirin
- Céline Teixeira


## Grille auto-eval


Cette grille va vous permettre de pré-évaluer votre travail. Pour chaque ligne, indiquez *Oui*, *Non* ou *En partie*. Plus placez la grille en haut de votre fichier README.md. La non-complétion de la grille entraînera des malus.

Notes :
- Il ne s'agit pas du barême final, mais d'une checklist vous permettant d'évaluer la conformité de votre travail par rapport au cahier des charges.
- Si une contrainte semble ne pas s'appliquer à votre situation, posez-nous la question !

| Type  | Objectif | Fait ? | 
| ----- | -------- | ------ |
| Setup | Le repository respecte la nomenclature `w1p2021-hero-amsellem-calou`, avec tous les noms des membres, et les membres sont cités dans le README.md | *Oui* |
| Setup | Le site est en ligne, et l'URL est citée dans le README.md | *Oui* |
| Setup | Le site utilise VueJS | *oui* |
| Setup | Cloner le repository et exécuter `npm install` puis `npm run dev` s'effectue sans encombre | *oui* |
| Données | Un fichier `data.json` est utilisé pour stocker la structure du jeu | *oui*|
| Données | Le fichier `data.json` décrit 30 phases de jeu ou plus. Indiquez *En partie* s'il en décrit plus de 15. | *oui* |
| Pages | Une page d'accueil est présente | *Oui* | 
| Pages | Une page de choix du personnage est présente | *Oui* |
| Pages | Une page de victoire est présente | *Oui* |
| Pages | Une page d'échec est présente | *Oui* |
| Routing | Une route dont l'`id` varie permet d'afficher les différentes étapes du jeu | *oui* |
| Routing | Lorsqu'on recharge la page (`Ctrl + R`), on se trouve toujours à la même étape | *oui* |
| Transitions | Chaque page apparaît grâce à une transition fluide (la complexité de la transition n'est pas prise en compte ici) | *oui* |
| Transitions | Les transitions internes au jeu (d'une étape à une autre) et externes (intro, fin...) sont différentes | *non* |
| État | Le choix du personnage et/ou de ses caractéristiques impacte l'aventure au moins une fois. **Choix des réponses différentes à une étape.** | *oui* |
| État | Une décision ou un événement aléatoire survenu pendant l'aventure a un impact sur la suite, au moins une fois. **Le choix du personnage influe sur un choix de réponse à une étape du jeu (arme différentes).** | *Oui* |
| État | Le choix du personnage et/ou ce qu'il s'est passé pendant l'aventure impactent l'écran de fin. **Indiquez ici comment succintement.** | *oui* |
| État | Au moins un service (classe de type `GameService`) est utilisé | *Oui* |
| Sauvegarde | Lorsqu'on recharge la page (`Ctrl + R`), le personnage, ses caractéristiques, les choix du joueur et tout le reste sont rétablis | *oui* |
| Sauvegarde | Lorsqu'on quitte le jeu et qu'on revient plus tard à la page d'accueil (sur le même navigateur), il est possible de reprendre l'aventure où on l'avait laissée | *non* |
| Multimédia | L'expérience présente une vidéo ou plus | *non* |
| Multimédia | L'expérience présente un audio ou plus | *oui* |
| Multimédia | L'utilisateur a la possibilité de couper le son à tout moment | *non* |


## Prologue

- Voici le cahier des charges que doit respecter **au minimum** le projet.
- Tout ce qui n'est pas précisé relève de vos choix personnels.

### Git

1. Forkez ce repository et renommez-le selon la nommenclature `w1p2021-hero-amsellem-calou`, en remplaçant les noms par les vôtres.
2. Utilisez [netlify](https://www.netlify.com/) ou le service de votre choix pour mettre votre projet en ligne.
3. Remplacez la fausse URL en haut de ce fichier par l'URL de votre projet.
4. Renseignez les membres de votre groupe en haut du fichier.

### Environnement technique

Le projet doit être construit avec le framework [VueJS](https://vuejs.org/).

### Lancer le projet

Se mettre dans un terminal dans le répertoire du projet forké, puis :

- `npm i`
- `npm run dev`

#### Plugins conseillés

- [Vue.js devtools pour Chrome, inspecteur vue](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Vue.js devtools pour Firefox, inspecteur vue](https://addons.mozilla.org/fr/firefox/addon/vue-js-devtools/)
- [Plugin vue pour VSCode, coloration syntaxique](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [Plugin eslint pour VSCode, validation de code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Structure des données

Le projet doit contenir un fichier `data.json` contenant l'intégralité des données nécessaires à la génération du jeu.

#### Données de test

Avant d'écrire votre histoire, commencez par un jeu de données de test constitué ainsi :

| phase n° | titre             | action A                 | action B             | Fin ?    |
| -------- | ----------------- | ------------------------ | -------------------- | -------- |
| 1        | Bienvenue !       | avancer (-> vers 2)      |                      |
| 2        | Ou aller ?        | à gauche (-> vers 3)     | à droite (-> vers 4) |
| 3        | Chemin tranquille | avancer (-> vers 5)      |                      |
| 4        | Chemin dangereux  | revenir (-> vers 2)      | avancer (-> vers 6)  |
| 5        | Arrivée           | continuer (vers `/win`)  |                      | Victoire |
| 6        | Piège mortel      | continuer (vers `/lose`) |                      | Échec    |

- À vous de trouver comment représenter ces données sous forme d'un `json` exploitable par votre JavaScript.
- Par la suite, vous écrirez une histoire complète constituée d'au moins **30 phases**.
- Les chemins peuvent s'entremêler, et les victoires et les échecs peuvent être multiples.
- Chaque phase pourra offrir un ou plusieurs choix (sans se limiter à deux).
- Votre `json` s'enrichira de nouvelles informations pour chaque phase (texte(s), image(s)...).

## Semaine 1 : Routing & transitions

### Routes

Le projet doit contenir les pages suivantes :

| url          | description                 | paramètres                   | destination                      |
| ------------ | --------------------------- | ---------------------------- | -------------------------------- |
| `/`          | Page d'accueil              |                              | `/character`                     |
| `/character` | Page de choix du personnage |                              | `/game/1`                        |
| `/game/:id`  | Pages de l'aventure         | id : identifiant de la phase | `/game/:id` ou `/win` ou `/lose` |
| `/win`       | Page de victoire            |                              | `/`                              |
| `/lose`      | Page d'échec                |                              | `/`                              |

- Commencez par créer des pages constituées d'un simple texte de test. Elles se construiront par la suite.
- Lorsque l'utilisateur recharge le navigateur, la page courante doit être restaurée correctement. Si je suis sur `game/3` et que je rafraîchi, je suis toujours sur `game/3`.

#### La page /character

Vide pour l'instant, sa logique sera approfondie au cours des semaines suivantes.

#### La page /game/:id

- Chaque phase est un `object` identifié par un `id` dans le fichier `data.json`.
- Lorsque la page est affichée, elle doit charger la phase de jeu correspondante.
- Au début, affichez seulement l'`object` brut. Le contenu des pages sera mis en place plus tard.

### Transitions

- Le passage d'une page à l'autre doit être fluide pour l'utilisateur.
- Utilisez les transitions et les animations de votre choix pour parvenir à cet effet.
- Les transitions ne seront pas toutes identiques.

Voici un exemple de trame :

- _Loader_ <sub><sup>(3 secondes fixes pour l'instant, logique à implémenter par la suite)</sup></sub>
- _Transition d'ouverture_
  - Page d'accueil
- _Transition_
  - Page de sélection du personnage
- _Transition du hors-jeu vers le jeu_ <sub><sup>(ex: passage par un écran noir, comme un jeu vidéo - soyez inventifs !)</sup></sub>
  - Phase 1
- _Transition de phase_
  - Phase 2
- _Transition de phase_
  - Phase 3
- _Transition du jeu vers le hors-jeu_
  - Page de victoire ou d'échec

## Semaine 2 : À venir

Proposez vos idées de fonctionnalités pour la semaine 2 et votez pour celles des autres [sur ce sondage collaboratif](https://poll.ly/#/Pw7KgAnK).
