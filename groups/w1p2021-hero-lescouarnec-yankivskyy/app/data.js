import { addListener } from 'cluster';
import { promisify } from 'util';
import { start } from 'repl';

const walking = require('./assets/img/Walking.png');
const monstre = require('./assets/img/méchant.png');
const monstreMort = require('./assets/img/die.png');
const eat = require('./assets/img/eat.png');
const eating = require('./assets/img/eating.png');
const dead = require('./assets/img/cadavre.png');
const think = require('./assets/img/think.png');
const devil = require('./assets/img/devil.png');
const man = require('./assets/img/man.png');
const woman = require('./assets/img/femme.png');
const choqué = require('./assets/img/choqué.png');
const déprime = require('./assets/img/déprime.png');
const prof = require('./assets/img/prof.png');
const boy = require('./assets/img/boy.png');
const duelStart = require('./assets/img/duel-start.png');
const duel = require('./assets/img/duel.png');
const tete = require('./assets/img/tete.png');
const ghost = require('./assets/img/ghost.png');
const énervé = require('./assets/img/énervé.png');
const fuck = require('./assets/img/fuck.png');
const blue = require('./assets/img/womanbadass.png');
const goodWin = require('./assets/img/goodWin.png')

export default{
"1": {
    "img": walking,
    "title": "Vous vous êtes mis en route vers votre destinée, le chemin sera périlleux vous devrez faire les bons choix pour sauver la démoncratie capitaliste !",
    "BTNA":"En route !",
    "toOne":"2",
  },
"2": {
    "img": walking,
    "img2": monstre,
    "title": "Au milieu de cette marche exténuante un mutant vous attaque par surprise, c’est sûrement un communiste !",
    "BTNA": "Sortir votre épée démocratique",
    "BTNB": "Je suis venu en paix l'ami...",
    "toOne":"3",
    "toTwo": "/lose/fantome"
  },
  "3": {
    "img": monstreMort,
    "title": "Vous avez tué le mutant! Continuons notre quête...",
    "BTNA":"Prélever un trophé sur le mutant",
    "BTNB": "Poursuivre notre chemin",
    "toOne":"4",
    "toTwo": "5"
  },
  "4": {
    "img": devil,
    "title": "Le cadavre est vraiment gigantesque, quelle partie serait la plus simple à transporter? Après avoir examiné le corps du mutant quasiment coupé en deux vous décidez de...",
    "BTNA":"Prendre un orteil, ça fera un beau pendentif!",
    "BTNB": "Utiliser son estomac comme gourde",
    "toOne":"8",
    "toTwo": "8"
  },
  "5": {
    "img": eat,
    "title": "Après plusieurs heures de marche, vous êtes épuisé et affamé... Par chance vous repérez un insecte radioactif!",
    "BTNA":"Un vrai patriote a besoin de forces!",
    "BTNB": "Ça ne me semble pas très prudent",
    "toOne":"6",
    "toTwo": "19"
  },
  "6": {
    "img": eating,
    "title": "Bien joué patriote vous avez repris des forces, vous allez sûrement avoir le cancer mais je doute que vous survivrez jusque là dans ce monde cruel ",
    "BTNA":"Reprendre la marche vers la gloire",
    "toOne":"9"
  },
  "8": {
    "img": man,
    "title": "Maintenant vous êtes devenu un vrai mâle aplha américain! Poursuivons notre aventure!",
    "BTNA":"Continuer",
    "toOne":"9"
  },
  "9": {
    "img": man,
    "img2": woman,
    "title": "Sur votre route vous rencontrez une femelle. Tel un mâle alpha américain vous lui dîtes...",
    "BTNA":"Halte! Que faites-vous dans un lieu si dangereux? Nous devrions rester ensemble, nous aurions plus de chances de survivre",
    "BTNB": "Huuum... Elle n'a ni d'armes, ni vivres... L'ignorer et continuer de marcher",
    "toOne":"10",
    "toTwo":"11"
  },
  "10": {
    "img": choqué,
    "title": "Cette femelle a profité de votre gentillese et vous a dépouillé. Vous n'êtes plus un mâle alpha américain!",
    "BTNA": "Continuer l'aventure ça me servira de leçon !",
    "BTNB": "La rattraper et lui ordonner de rendre nos affaires !",
    "toOne": "12",
    "toTwo": "/lose/cadavre"
  },
  "12": {
    "img": déprime,
    "title": "Ne perdez pas espoir! Nous ne sommes plus très loin du repére des pillards nous sommes à deux doigts de rétablir la démocratie et a mettre un terme au COMMUNISME !!!",
    "BTNA": "Continuer",
    "toOne": "13",
  },
  "13": {
    "img": prof,
    "title": "Hey camarade, vous n'avez pas l'air dans votre assiette...",
    "BTNA": "Camarade..? Il ne m'inspire pas confiance...",
    "BTNB": "Demander où se trouvent les pillards",
    "toOne": "14",
    "toTwo": "15"
  },
  "14": {
    "img": walking,
    "img2": boy,
    "title": "Après quelques minutes de marche, vous apercever un individu... C'est eux! Ceux que nous cherchons depuis le début! Les pillards!",
    "BTNA": "Avancer vers eux avec un air énervé",
    "BTNB": "Courir dans leur direction en hurlant de rage",
    "toOne": "16",
    "toTwo": "/lose/tete"
  },
  "15": {
    "img": prof,
    "title": "Je sais exactement où ils sont! Vous les trouverez dans la maison là-bas",
    "BTNA": "Se méfier et partir sans prendre compte de ce qu'il a dit",
    "BTNB": "Le croire sur parole et aller botter le cul de ces salauds",
    "toOne": "14",
    "toTwo":"18",
  },
  "16": {
    "img": énervé,
    "img2": boy,
    "title": "Halte camarade! Avez vous besoin d'aide !?",
    "BTNA": "Je vais mettre un terme à votre idéologie barbare du partage équitable des richesses !!!",
    "BTNB": "Les convaicre de devenir de bons citoyens capitalistes",
    "toOne": "17",
    "toTwo": "/lose/tete"
  },
  "17": {
    "img": duelStart,
    "title": "Un des pillards pointe son fusil sur vous !",
    "BTNA": "HAHAHA, je connais le point faible de cette arme!",
    "BTNB": "Se battre jusqu'au bout contre cet homme abominable",
    "toOne": "20",
    "toTwo": "/win"
  },
  "18": {
    "img": boy,
    "title": "Vous arrivez à la fameuse maison et rencontrez les pillards. Ou plutôt une femme étrange ressemblant à une pillarde. Après tout qu'est-ce que vous risquez..?",
    "BTNA": "La tuer de sang froid",
    "BTNB": "Bonjour madame! Êtes-vous capitaliste?",
    "toOne": "/win/bad",
    "toTwo": "/lose/cadavre"
  },
  "19": {
    "img": boy,
    "title": "Vous êtes un vrai sage, la démocratie américaine est entre de bonnes mains",
    "BTNA": "Continuer",
    "toOne": "12"
  },
  "20": {
    "img": duel,
    "title": "Êtes-vous sûr de vouloir jouer les héros?",
    "BTNA": "Non, je devrai l'affronter intelligemment",
    "BTNB": "Oui, je suis sûr de moi!",
    "toOne": "/win/good",
    "toTwo": "/lose/cadavre"
  },
  "fantome": {
    "img": ghost,
    "title": "T'es nul t'es crevé",
  },
  "tete": {
    "img": tete,
    "title": "Vous avez perdu votre tête"
  },
  "cadavre": {
    "img": dead,
    "title": "Vous avez perdu votre moitié"
  },
  "bad": {
    "img":think,
    "title": "Vous parvenez à la tuer mais vous vous êtes fait manipuler par l'individu fort aimable juste avant! Quel salaud ce Vladimir! Vous n'avez pas rétabli la démocratie mais vous avez vécu une aventure incroyable non?",
  },
  "good": {
    "img": goodWin,
    "title": "Après un combat acharné vous remportez la bataille! La démocratie est rétablie, bien joué!"
  }
}