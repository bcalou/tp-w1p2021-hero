const images = require("./images/*.jpg");
const sounds = require("./sounds/*.mp3");
const videos = require("./video/*.mp4");

export default {
  "1" : {
    "messages": {
      "first": "Allo ? quelqu'un me reçoit ?",
      "second": "Est-ce que quelqu'un m'entend ?",
      "third": "Je suis bloqué, j'ai besoin d'aide"
    },
    "btnA": " Qui est-ce ?",
    "btnB": " Oui je vous reçois",
    "actionA" : "/game/3",
    "actionB" : "/game/2",
    "scene" : "dark-scene",
    "img" : images.test,
    "snd" : sounds.vent,
    "vid" : videos.pluie
  },
  "2" : {
    "messages": {
      "first": "Dieu soit loué, je ne suis pas seul..",
      "second": "J'ai vraiment besoin d'aide !"
    },
    "btnA": " Mais qui êtes vous ?",
    "btnB": " Qu'attendez vous de moi ?",
    "actionA" : "/game/3",
    "actionB" : "/game/4",
    "scene" : "light-scene",
    "snd" : sounds.feu,
    "vid" : videos.poussiere
  },
  "3" : {
    "messages": {
      "first": "Je suis le Capitaine Cooper",
      "third": "Mais tu peu m'appeler Coop",
      "fourth": "Il faut que tu me sortes de là !",
    },
    "btnA": " Ne paniquez pas je vais vous aider, décrivez moi les alentours",
    "btnB": " Qu'est ce vous voyez ?",
    "actionA" : "/game/5",
    "actionB" : "/game/5",
    "snd" : sounds.vent,
  },
  "4" : {
    "messages": {
      "first": "Je viens de me réveiller ...",
      "second": "La dernière chose dont je me souvienne, c'est que je devais atterir avec mon équipage sur pegasus",
      "third": "Je suis absolument seul et j'aurais besoin de vous pour m'aider à retrouver le vaisseau avec lequel je me suis crashé",
      "fourth": "Il pourrait peut-être y avoir d'autres survivant..."
    },
    "btnA": " Ok je vais vous aider, où vous situez vous actuellement ?",
    "btnB": " Je ne sais toujours pas qui vous êtes",
    "actionA" : "/game/5",
    "actionB" : "/game/3"
  },
  "5" : {
    "messages": {
      "first": "Je ne sais pas vraiment..",
      "second": "Je viens de me réveiller au milieu de nulle part.",
      "third": "J'ai seulement une légère vue d'ensemble autour de moi..",
      "fourth": "Il y à deux élements qui m'intriguent actuellement !",
      "fifth": "Cette mystérieuse tour que j'aperçois assez loin à l'horizon",
      "sixth": "L'autre est une fumée assez épaisse..",
      "seven": "J'aurais naturellement envie d'y aller question de survit mais je ne sais pas trop...",
      "height": "Qu'est ce que tu en penses ?",
    },
    "btnA": " La tour te permettera d'avoir une vue d'ensemble",
    "btnB": " Vas voir la fumée, c'est peut-être les restes de ton vaisseau",
    "actionA" : "/game/6",
    "actionB" : "/game/7"
  },
  "6" : {
    "messages": {
      "first": "Je pense que tu as raison",
      "second": "La fumée donne vraiment envie mais il faut savoir être sage et choisir ce qui est sûr",
      "third": " Cooper se dirige vers la tour",
      "fourth": "Je pense que j'en ai pour un bon moment, la tour est assez loin..",
      "fifth": "La nuit devrait bientot tomber, ça me fait un peu peur..",
      "sixth": "Par contre je ne ressens ni faim, ni soif, c'est bizarrz, mais tant mieux !",
      "seven": "C'est quand même étrange cette histoire, comment je me suis retrouvé aussi loin de mon vaisseau ?",
    },
    "btnA": " Ca n'a pas vraiment d'importance.",
    "btnB": " Continue ton chemin, tu le découvrira peut-être plus tard !",
    "actionA" : "/game/9",
    "actionB" : "/game/9"
  },
  "7" : {
    "messages": {
      "first": "Tu as probablement raison, j'y vais de ce pas",
      "second": "Ce serait vraiment génial que mon équipage y soit encore",
      "third": "C'est vraiment pas loin, je pense pouvoir y être en à peine une demi heure",
      "fourth": "Je te recontacte quand j'y suis",
      "fifth": " Cooper est en chemin.",
      "sixth": "Ok je suis ne suis vraiment pas loin, mais je ne sais toujours pas d'ou émane cette fumée",
      "seven": "Je continue un peu ...",
      "height": " Cooper s'approche du lieu",
      "nine": "Ok, il y à une sorte de lumière rouge derrière la fumée",
      "ten": "J'ai auncun moyen de contourner cette fumée...",
      "eleven": "J'ai donc le choix entre m'aventurer dedans et aller voir quelle est cette mystèrieuse chose",
      "twelve": "Ou me diriger finalement vers la tour.."
    },
    "btnA": " Ok retourne vers la tour c'est probablement plus sage comme ça",
    "btnB": " Va voir ce qu'il y a, c'est peutêtre dangereux mais tu trouvers s^rement quelque chose",
    "actionA" : "/game/6",
    "actionB" : "/game/8"
  },
  "8" : {
    "messages": {
      "first": "Ok... j'y vais",
      "second": "La lumière rouge n'est pas très loin",
      "third": "Mais je crois que j'ai du mal à respirer..",
      "fourth": "Je vais donner le tout pour le tout !",
      "fifth": "...",
      "sixth": "Je crois que...",
      "seven": "kof ! kof !",
      "height": "Je suis allé..",
      "nine": "Beaucoup trop loin...",
      "ten": " Cooper suffoque, la fumée était toxique, il n'a pas survécu",
    },
    "btnA": " Recommencer",
    "btnB": " Revenir au dernier checkpoint",
    "actionA" : "/game/1",
    "actionB" : "/game/7"
  },
  "9" : {
    "messages": {
      "first": "Tu as raison",
      "second": "Je vais continuer vers la tour et essayer de ne pas trop me poser de questions..",
      "third": " Cooper poursuit son chemin",
      "fourth": "Ok il y a un truc louche",
      "fifth": "Une sorte de petit habitation, elle n'a pas l'air en mauvais état"
    },
    "btnA": " Ok vas voir ce que c'est, tu vas peut-être trouver de l'aide",
    "btnB": " Continue vers la tour tu n'as pas de temps à perdre",
    "actionA" : "/game/10",
    "actionB" : "/game/12"
  },
  "10" : {
    "messages": {
      "first": "Ok je vais voir",
      "second": " Cooper rentre dans le bâtiment",
      "third": "C'est absolument vie, l'intérieur semble plus détérioré que l'exterieur",
      "fourth": "Il fait totalement noir",
      "fifth": "Est-ce que je continue à explorer ou je cotinue mon chemin vers la tour ?"
    },
    "btnA": " Continue à l'intérieur",
    "btnB": " Repars vers la tour, c'est peut-être un piège",
    "actionA" : "/game/11",
    "actionB" : "/game/12"
  },
  "11" : {
    "messages": {
      "first": "Je continue...",
      "second": "...",
      "third": "AAAAAH!",
      "fourth": "Je viens de marcher sur quelque chose",
      "fifth": "Mon pied est complètement coincé !!",
      "sixth": "Je ne vois absolument rien !",
      "seven": "Je ne veux pas mourir ici mec...",
      "height": " Cooper est mort, coincé dans un piège d'origine humaine."
    },
    "btnA": " Recommencer",
    "btnB": " Revenir au derneir checkpoint",
    "actionA" : "/game/1",
    "actionB" : "/game/10"
  },
  "12" : {
    "messages": {
      "first": "Tu as raison je n'ai aps le temps de m'attarder avec tout ça !",
      "second": " Cooper poursuit son chemin vers la tour",
      "third": "J'ai encore beaucoup de chemin à faire",
      "fourth": "Putin mais comment je me suis retrouvé dans une tel situation...",
      "fifth": "...",
      "sixth": "Je venais d'avoir une fille...",
      "seven": "Je n'ai même pas pu assister à sa naissance...",
      "height": "Ma femme m'avait bien dit qu'il fallait que j'arêtte ces explorations..",
      "nine": "Mais je ne l'ai pas écouté ..."
    },
    "btnA": " On fait tous des erreurs...",
    "btnB": " T'as vraiment joué au con Coop !",
    "actionA" : "/game/13",
    "actionB" : "/game/13"
  },
  "13" : {
    "messages": {
      "first": "T'as raison",
      "second": "Il faut pas que je me décourage... Je vais continuer pour elles",
      "third": "...",
      "fourth": "Il commence vraiment à faire nuit",
      "fifth": "...",
      "sixth": "Je vois une cavité un peu plus loin !",
      "seven": "On dirait une espèce de grotte",
      "height": "J'y vais ? Ou je continue vers la tour ?",
      "nine": "Sachant que je ne suis pas fatigué et les potentiels survivants de l'accident on surement besoin de moi.."
    },
    "btnA": " Vas dormir, t'as besoin de force mon grand",
    "btnB": " Tes cohéquipiers ont besoins de toi !",
    "actionA" : "/game/14",
    "actionB" : "/game/15"
  },
  "14" : {
    "messages": {
      "first": "Ok je vais aller m'installer dans cette grotte",
      "second": "...",
      "third": "J'y suis, les paroies ont pas l'air super stables",
      "fourth": "Mais je vais quand même passer la nuit ici",
      "fifth": "...",
      "sixth": " Cooper sombre dans un sommeil profond",
      "seven": " Sans se rendre compte, qu'un partie des paroies se sont écroulées",
      "height": " Il restera enfermé dans cette grotte",
      "nine": " Et toute communication sera perdue..."
    },
    "btnA": " Recommencer",
    "btnB": " Revenir au dernier checkpoint",
    "actionA" : "/game/1",
    "actionB" : "/game/13"
  },
  "15" : {
    "messages": {
      "first": "Ok je continue",
      "second": "J'éspère sincèrement que je trouverais mon vaisseau",
      "third": "Je crois que tu vas devoir continuer la conversation, j'ai besoin de soutient la...",
      "fourth": "Je me souviens avoir heurté un objet celeste, je crois que c'était un météor",
      "fifth": "Il à percuté l'ail droit de mon vaisseau, et la panique générale à commencé...",
      "sixth": "Jackson à perdu le contrôle de l'enfin, et la gravité de Pegasus nous à attiré",
      "seven": "Après ça, je ne me souviens que d'un BOUM et plus rien",
    },
    "btnA": " Ca avait l'air vraiment violent",
    "btnB": " Rien ne sert de te remémorer tout ça...",
    "actionA" : "/game/16",
    "actionB" : "/game/16"
  },
  "16" : {
    "messages": {
      "first": "Bref, continuons",
      "second": "C'est pas le moment de se démoraliser",
      "third": "Je vais avoir pas mal de marche, je te recontacte une fois à la tour.",
      "fourth": " Cooper continue sa route vers la tour",
      "fifth": "Hey !",
      "sixth": "T'es là ?!",
      "seven": "Allo !!",
    },
    "btnA": " Oui ! Tu es arrivé ?",
    "btnB": " Tu en es où Coop ?",
    "actionA" : "/game/17",
    "actionB" : "/game/17"
  },
  "17" : {
    "messages": {
      "first": "Je suis arrivé au niveau de la tour",
      "second": "Elle est mega haute, et il ne semble pas y avoir d'entrée",
      "third": "Je pense que je vais devoir escalader pour arriver au sommet",
      "fourth": "Il y a une espèce de poulie, je pourrais l'utiliser",
      "fifth": "Mais elle à l'air vraiment usée",
      "sixth": "Il y a quelques accroches, je pourrais aussi tenter le coup à mains nues",
      "seven": "Qu'est ce que je fais ?",
    },
    "btnA": " Utilise la poulie tu n'aura jamais assez de force autrement",
    "btnB": " Grimpe, la poulie va céder c'est sûr..",
    "actionA" : "/game/18",
    "actionB" : "/game/19"
  },
  "18" : {
    "messages": {
      "first": "Ok ! Je vais accrocher le cable autour de moi, et essayer de grimper avec !",
      "second": "Aller c'est partie !",
      "third": " Cooper grimpe",
      "fourth": " ...",
      "fifth": " ...",
      "sixth": "Il y a quelques accroches, je pourrais aussi tenter le coup à mains nues",
      "seven": "Qu'est ce que je fais ?",
    },
    "btnA": " Alors t'es en haut ?",
    "btnB": " Coop ?",
    "actionA" : "/game/20",
    "actionB" : "/game/20"
  },
  "19" : {
    "messages": {
      "first": "Ok ! Bon, il va falloir être fort..",
      "second": "Heuresement que tu es là pour prendre les bonnes décisions",
      "third": "Aller... c'est partie je grimpe !",
      "fourth": " Cooper grimpe",
      "fifth": " ...",
      "sixth": " Le silence ce fait long",
      "seven": " Plus aucune nouvelle de Cooper",
    },
    "btnA": " Recommencer",
    "btnB": " Revenir au dernier checkpoint",
    "actionA" : "/game/1",
    "actionB" : "/game/18"
  },
  "20" : {
    "messages": {
      "first": "Ouaii c'est bon !",
      "second": "Putaain, j'ai bien cru que ce truc allait me lâcher",
      "third": "Ok, je suis en haut, et c'est carrément cool",
      "fourth": "J'ai une vue globale sur absolument tout",
      "fifth": "et...",
      "sixth": "Je crois que je vois mon vaisseau !!!",
      "seven": "Ok ne crions pas victoire trop vite...",
      "height": "Il faut encore que je redescende",
      "nine": "Si j'ai pu grimper, je devrais pouvoir redescendre",
      "ten": " Cooper descent la tour.",
      "eleven": "C'est bon je suis en bas",
      "twelve": "Il faut que je parte vers l'ouest, en traversant la forêt",
      "thirteen": " Cooper s'enfonce dans la fôret",
      "fourteen": "Ok, j'ai le choix entre passer dans une sorte de marécage, ou baigne un liquide étrange",
      "fifteen": "Ou passer dans un champs de fougères... ça semble moins dangereux mais la visibilité la dedans sera pas terrible",
    },
    "btnA": " Le marécage ! Tu pourras voir le danger s'il y en a",
    "btnB": " Vas dans le champs, le liquide peut être toxique...",
    "actionA" : "/game/23",
    "actionB" : "/game/21" ,
    "vid" : videos.foret
  },
  "21" : {
    "messages": {
      "first": "Il à pas l'air toxique, mais tu as probalement raison, c'est plus sage",
      "second": "Aller c'est partie",
      "third": "Je suis dedans, mon champs de vision est extrêmement réduit",
      "fourth": "Je ne sais pas trop où je vais",
      "fifth": "...",
      "sixth": "Putain je sais plus par où aller !",
      "seven": "J'essaye de pas paniquer mais je sais pas quoi faire !",
    },
    "btnA": " Ok panique pas, essayes de rebrousser chemin..",
    "btnB": " Continue tout droit, tu en sortira forcément.",
    "actionA" : "/game/23",
    "actionB" : "/game/22"  
  },
  "22" : {
    "messages": {
      "first": "Tu dois avoir raison, je continue je te tiens au courant",
      "second": " Cooper continue sa route dans le champs, dans jamais en voir la sortie",
      "third": "Ca fait des heures que je marche dans ce champs ... je tourne en rond...",
      "fourth": "Je suis à bout...",
      "fifth": " Cooper ne trouvera jamais la sortie du champs de fougères.",
    },
    "btnA": " Recommencer",
    "btnB": " Revenir au dernier checkpoint",
    "actionA" : "/game/1",
    "actionB" : "/game/21"  
  },
  "23" : {
    "messages": {
      "first": "Je vais faire ça !",
      "second": "Ce liquide n'a pas l'air si dangereux",
      "third": "...",
      "fourth": "Ok je rentre dans le marécage",
      "fifth": "Je m'enfonce un peu, mais j'ai pas l'impression que ce soit très profond",
      "sixth": "J'éspère ne pas faire de mauvaise rencontre",
    },
    "btnA": " T'inquiète, tu n'as rencontré personne jusqu'ici",
    "btnB": " Continue, personne ne se toruvera dans ce marécage",
    "actionA" : "/game/24",
    "actionB" : "/game/24"  
  },
  "24" : {
    "messages": {
      "first": "J'avoue, il n'y à aucune raison que je croise quelqu'un maintenant...",
      "second": "Bon je continue",
      "third": " Cooper continue sa route dans le marécage",
      "fourth": "Oh putain !",
      "fifth": "Ca aurait été trop beau que tout ce passe comme sur des roulettes",
      "sixth": "Je t'explique, je suis devant une créature assez étrange, je ne sais pas si elle est agréssive...",
      "seven": "J'essaie de l'effrayer en paraissant plus imposant ?",
      "height": "Ou bien je passe doucement en faisant en sorte qu'elle ne me voit pas ?",
    },
    "btnA": " Passe à côté, c'est trop risqué de devoir l'effrayer.",
    "btnB": " Effrayes la, elle aura peur et s'en ira",
    "actionA" : "/game/26",
    "actionB" : "/game/25"  
  },
  "25" : {
    "messages": {
      "first": "Ok, il va falloir que je sois fort !",
      "second": "GRRRRAAAAAHHHH  !!",
      "third": " Cooper tente d'effrayer la créature",
      "fourth": " La créature bondit, mais revient aussitôt à l'assaut",
      "fifth": " Elle frappe Cooper en plein visage",
      "sixth": " Celui-ci perds conaissance...",
    },
    "btnA": " Recommencer",
    "btnB": " Revenir au dernier checkpoint",
    "actionA" : "/game/1",
    "actionB" : "/game/24"  
  },
  "26" : {
    "messages": {
      "first": "Ok c'est partie je vais me faire discret",
      "second": " Cooper passe à côté de la créature qui semble innofensive",
      "third": "Ok je suis passé !",
      "fourth": "Je sors bientôt de la forrêt",
      "fifth": " Cooper appércoit enfin son vaisseau, il accourt vers celui-ci",
      "sixth": " Incroyable, je suis arrivé !",
    },
    "btnA": " Prends ton temps pour tout explorer",
    "btnB": " Calme toi, ça peut toujours être dangereux",
    "actionA" : "/game/27",
    "actionB" : "/game/27"  
  },
  "27" : {
    "messages": {
      "first": "Ok je vais y aller doucement",
      "second": "J'ai presque envie de pleurer en voyant l'état de mon vaisseau",
      "third": "J'ai l'impression de n'avoir jamais quitté le vaisseau..., tout semble tellement faux d'un coup.",
      "fourth": "J'arrive dans le cockpit",
      "fifth": "Oh...Je...",
      "seven": "Il y a tellement de morts ici...",
      "height": "Comment ai-je pu survire ?...",
      "nine": "Que... Je suis en face de ...",
      "eleven": "De... mon... Mon cadavre...",
      "twelve": "Comment est-ce possible",
    },
    "btnA": " Tu es mort Cooper, tu ne t'es jamais réveillé de ce crash.",
    "btnB": " Il est temps pour toi de te laisser aller",
    "actionA" : "/game/28",
    "actionB" : "/game/28"  
  },
  "27" : {
    "messages": {
      "first": "Je parlais alors à moi même...",
      "second": "Ca y est, je vois la lumière...",
      "third": "Je vais les rejoindre...",
    },
    "btnA": " Recommencer",
    "actionA" : "/game/1",
    "vid" : videos.lumiere
  },
}