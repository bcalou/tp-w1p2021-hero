export default {
  "steps": [
    {
      "id": 1,
      "title": "Choisissez votre personnage",
      "actions": [
        {
          "title": "Fille",
          "to": 2
        },
        {
          "title": "Garçon",
          "to": 2
        }
      ]
    },
    {
      "id": 2,
      "title": "Où souhaitez-vous chercher de quoi vous armer ?",
      "background": require("/assets/chambrehopital.png"),
      "actions": [
        {
          "title": "Dans la chambre ?",
          "to": 3
        },
        {
          "title": "En dehors de l'hopital",
          "to": 102
        }
      ]
    },
    {
      "id": 102,
      "title": "Il fallait rester dans la chambre !",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 3,
      "title": "Vous avez trouvé un katana. Souhaitez-vous sortir par la fenêtre ou prendre les escaliers ?",
      "background": require("/assets/background_creepy.png"),
      "actions": [
        {
          "title": "Prendre les escaliers",
          "to": 103
        },
        {
          "title": "Sortir par la fenêtre",
          "to": 4
        }
      ]
    },
    {
      "id": 103,
      "title": "Tu aurais du sauter par la fenêtre ! Des morts-vivants rodent dans l'hopital",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 4,
      "title": "Vous êtes dehors. Où souhaitez-vous aller ?",
      "background": require("/assets/ville.png"),
      "actions": [
        {
          "title": "À droite ?",
          "to": 5
        },
        {
          "title": "À gauche",
          "to": 104
        }
      ]
    },
    {
      "id": 104,
      "title": "Aie! Tu as pris le mauvais chemin",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 5,
      "title": "Vous avez choisis le chemin de droite. Vous arrivez devant une église et vous y rentrez. Vous souhaitez : ",
      "background": require("/assets/eglise.png"),
      "actions": [
        {
          "title": "Regarder dans le cercueuil ouvert ?",
          "to": 6
        },
        {
          "title": "Regarder l'otel qui s'illumine",
          "to": 105
        }
      ]
    },
    {
      "id": 105,
      "title": "Tu as été hypnotiser par la lumière de l'otel !! ",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 6,
      "title": "Vous avez trouver une carte dans le cercueil, suite à ça, vous décider de retourner dehors.",
      "background": require("/assets/carte.png"),
      "actions": [
        {
          "title": "Continuer à marcher",
          "to": 7
        },
        {
          "title": "Aller dans le magasin insalubre",
          "to": 106
        }
      ]
    },
    {
      "id": 106,
      "title": "Le magasin était truffé de piège, tu es mort !",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 7,
      "title": "Une voiture abandonnée croise votre chemin. Il y a encore les clés dessus. ",
      "background": require("/assets/maison.png"),
      "actions": [
        {
          "title": "Ne pas faire confiance à cette voiture, et continuer à pied",
          "to": 8
        },
        {
          "title": "Prendre la voiture ?",
          "to": 107
        }
      ]
    },
    {
      "id": 107,
      "title": "La voiture a explosé lorsque tu as essayé de la démarrer",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 8,
      "title": "Vous avez marcher 10 mn, et vous êtes arrivé dans un cimetière. Il y a un cerceuil ouvert et un trou qui n'est pas fermé. ",
      "background": require("/assets/cimetiere.png"),
      "actions": [
        {
          "title": "Prendre la bague",
          "to": 108
        },
        {
          "title": "Prendre la clé",
          "to": 9
        }
      ]
    },
    {
      "id": 108,
      "title": "La bague était en fait une bague divine qui t'as fais perde la tête, tu t'es suicidé !",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 9,
      "title": "Mince ! un loup se dirige vers vous !! Ce loup à l'air un peu différent des loups que l'ont connait.",
      "background": require("/assets/loup.png"),
      "actions": [
        {
          "title": "Utiliser le catana et te battre",

          "to": 10
        },
        {
          "title": "Partir en courrant",
          "to": 109
        }
      ],
      "males": [
        {
          "title": "Combattre le loup au corps à corps",
          "to": 10
        },
        {
          "title": "Fuire le loup",
          "to": 1099
        }
      ]
    },
    {
      "id": 109,
      "title": "Le loup est plus rapide que toi! il t'a rattrapé et tu es mort.",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 1009,
      "title": "Tu aurais du combattre le loup ! Il t'a rattrapé et tu es mort !",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 10,
      "title": "Bravo !! tu as gagné le combat. Depuis le temps que tu es dans cette ville abandonnée, tu ne t'es pas nourrie.",
      "background": require("/assets/loup.png"),

      "actions": [
        {
          "title": "Manger le loup ?",
          "to": 110
        },
        {
          "title": "Laisser le cadavre",
          "to": 11
        }
      ]
    },
    {
      "id": 110,
      "title": "Hélas, le loup était empoisonné !",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 11,
      "title": "Tu as bien fais de laisser le cadavre et de ne pas te nourrir car le loup était empoisonné ! Désormais, tu es arrivé dans une maison très calme",
      "background": require("/assets/maison.png"),
      "actions": [
        {
          "title": "Faire une sieste pour récupérer quelques forces",

          "to": 12
        },
        {
          "title": "Changer de vêtements pleins de sang",
          "to": 111
        }
      ]
    },
    {
      "id": 111,
      "title": "Hélas !! un gros vase t'es tombé dessus lorsque tu as essayé d'ouvrir l'armoire !",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 12,
      "title": "Tu as dormis 1 heure ! Tu as fais le pleins de forces !!",
      "background": require("/assets/maison.png"),
      "actions": [
        {
          "title": "Décider de sortir de la ville avant la nuit qui approche",
          "to": 13
        },
        {
          "title": "Rester dans la maison",
          "to": 112
        }
      ]
    },
    {
      "id": 112,
      "title": "La maison était un endroit sur mais pas longtemps, des créatures ont réussis à pénétrer à l'intérieur et t'ont manger",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 13,
      "title": "Tu es maintenant dehors. Mais il y a des enfants qui semblent avoir besoin d'aide dans la maison voisine.",
      "background": require("/assets/maison__voisine.png"),
      "actions": [
        {
          "title": "Aider les enfants",
          "to": 113
        },
        {
          "title": "Ne pas aider les enfants, et fuire pour survivre",
          "to": 14
        }
      ]
    },
    {
      "id": 113,
      "title": "Les cris des enfants étaient en réalité un piège dans lequel tu es tombé. Direction le cimetière !!",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 14,
      "title": "Bravo ! tu es sortie de la ville en vie ! ",
      "background": require("/assets/route.png"),
      "actions": [
        {
          "title": "Marcher jusqu'à la prochaine ville peuplée",
          "to": 15
        },
        {
          "title": "Faire du stop pour demander de l'aide",
          "to": 114
        }
      ]
    },
    {
      "id": 114,
      "title": "Bravo ! tu as fais du stop mais tu es tombé sur la mauvaise personne... ",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 15,
      "title": "La nuit approche et ici la nuit tombe très vite !",
      "background": require("/assets/route.png"),
      "actions": [
        {
          "title": "Attendre que le jour se lève afin de ne pas aller n'importe où",
          "to": 115
        },
        {
          "title": "Continuer de marcher",
          "to": 16
        }
      ]
    },
    {
      "id": 115,
      "title": "Attendre n'était pas la solution, il fallait te souvenir que la nuit est dangereuse ici, surtout si tu es vulnerable",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 16,
      "title": "Tu as marché trop longtemps et tu es arrivé dans une forêt où il y a une cabane",
      "background": require("/assets/cabane.png"),
      "actions": [
        {
          "title": "Visiter cette cabane",
          "to": 17
        },
        {
          "title": "Regarder par la fenêtre de la cabane",
          "to": 116
        }
      ]
    },
    {
      "id": 116,
      "title": "Il y avait un trou juste avant d'atteindre la fenêtre, un loup t'attendait ",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 17,
      "title": "Tu as bien fais de rentrer dans cette cabane car dehors, des loups se dirigaient vers toi! tu t'es sauvé!",
      "background": require("/assets/interieurcabane.png"),
      "actions": [
        {
          "title": "Admirer les loups qui rodent",
          "to": 117
        },
        {
          "title": "Attendre quelques minutes que les loups partent",
          "to": 18
        }
      ]
    },
    {
      "id": 117,
      "title": "Admirer c'est bien, mais ne pas se faire repérer c'est mieux !",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 18,
      "title": "Tu as trouvé la cave de la maison",
      "background": require("/assets/cave.png"),
      "actions": [
        {
          "title": "Faire un tour dans cette cave voir ce qu'il s'y cache",
          "to": 19
        },
        {
          "title": "Rester devant la porte de la maison et attendre que les loups partent",
          "to": 118
        }
      ]
    },
    {
      "id": 118,
      "title": "Les loups ne partiront sûrement pas, ils t'ont même repérer et ont trouvés un moyen d'entrer pour te rendre visite !",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 19,
      "title": "Il fait sombre dans cette cave",
      "background": require("/assets/cave.png"),
      "actions": [
        {
          "title": "Utiliser le briquet qui est dans ma poche",
          "to": 119
        },
        {
          "title": "Tenter de trouver la lumière",
          "to": 20
        }
      ]
    },
    {
      "id": 119,
      "title": "Le gaz est silencieux tant dans la maison qu'au bout de ton briquet ! tu as fais tout explosé !",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 20,
      "title": "Il y a une boite à outils entre-ouverte et un frigo juste à côté",
      "background": require("/assets/cave.png"),
      "actions": [
        {
          "title": "Regarder à l'intérieur de la boite à outils",
          "to": 21
        },
        {
          "title": "Regarder dans le frigo",
          "to": 120
        }
      ]
    },
    {
      "id": 120,
      "title": "Il y avait un zombie caché dans le frigo !",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 21,
      "title": "Tu as trouvé une boussole qui n'indique qu'une seule direction !",
      "background": require("/assets/boussole.png"),
      "actions": [
        {
          "title": "Suivre la direction indiquée par la boussole correspond au chemin tracé sur la carte",
          "to": 22
        },
        {
          "title": "Ne pas se fier à la boussole",
          "to": 121
        }
      ]
    },
    {
      "id": 121,
      "title": "Il fallait suivre le chemin indiqué ! tu es tombé dans une embuscade",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 22,
      "title": "Tu es arrivé dans un bunker où le symbole de la carte correspond au symbole sur la porte de ce bunker",
      "background": require("/assets/bunker.png"),
      "actions": [
        {
          "title": "Lire les notes posées sur la table du bunker",
          "to": 23
        },
        {
          "title": "Sortir par l'autre porte",
          "to": 122
        }
      ]
    },
    {
      "id": 122,
      "title": "Il fallait rester dans le bunker, tu allais trouver un indice très important",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 23,
      "title": "Tu as trouvé une note où des informations à propos de cette ville étaient notées",
      "background": require("/assets/notes.png"),
      "actions": [
        {
          "title": "Continuer de lire",
          "to": 24
        },
        {
          "title": "Arrêter la lecture",
          "to": 123
        }
      ]
    },
    {
      "id": 123,
      "title": "Tu as fais l'erreur de ne pas continuer de lire, hélas !",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 24,
      "title": "Oui, tu as bien lu ! il y a bien un antidote caché dans ce bunker !",
      "background": require("/assets/note__antidote.png"),
      "actions": [
        {
          "title": "Chercher dans le bunker",
          "to": 124
        },
        {
          "title": "Continuer de lire les notes",
          "to": 25
        }
      ]
    },
    {
      "id": 124,
      "title": "Il fallait continuer de lire les notes !",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 25,
      "title": "Un indice est écrit : on dit que les morts gardent mieux les secrets que les vivants",
      "background": require("/assets/bunker.png"),
      "actions": [
        {
          "title": "Aller au cimetière",
          "to": 26
        },
        {
          "title": "Rester ici",
          "to": 125
        }
      ]
    },
    {
      "id": 125,
      "title": "Tu aurais du mieux comprendre l'indice",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 26,
      "title": "Tu es revenu au cimetière, où souhaites-tu chercher l'antidote ?",
      "background": require("/assets/pierre.png"),
      "actions": [
        {
          "title": "Sur la pierre tombale où le symbole correspond au symbole du bunker",
          "to": 27
        },
        {
          "title": "Dans la tombe que tu as déjà fouillé",
          "to": 126
        }
      ]
    },
    {
      "id": 126,
      "title": "Le zombie mort s'est reveillé car la nuit est tombée",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 27,
      "title": "Félications ! tu as trouvé l'antidote",
      "background": require("/assets/antidote.png"),
      "actions": [
        {
          "title": "Courir en dehors du cimetière",
          "to": 28
        },
        {
          "title": "Visiter une dernière fois",
          "to": 127
        }
      ]
    },
    {
      "id": 127,
      "title": "Tu aurais du fuir car tu avais trouvé l'antitdote, oublies pas, la nuit est dangereuse ici !! ",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 28,
      "title": "En sortant du cimetière un loup t'as mordu !",
      "background": require("/assets/loup.png"),
      "actions": [
        {
          "title": "Prendre l'antidote et sortir de la ville",
          "to": 128
        },
        {
          "title": "Partager l'antidote avec le peuple",
          "to": 29
        }
      ]
    },
    {
      "id": 128,
      "title": "Tu as pris l'antidote, mais un autre zombie t'as mordu et il n'y en a plus !! ",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 29,
      "title": "Tu as partagé l'antidote, tu as sauvé le peuple ! Tu dois prendre une dernière décison !",
      "background": require("/assets/peuple.png"),
      "actions": [
        {
          "title": "Convaincre le peuple de fuir la ville",
          "to": 30
        },
        {
          "title": "Écouter les dires du peuple, et rester dans cette ville ",
          "to": 129
        }
      ]
    },
    {
      "id": 129,
      "title": "Tu n'aurais jamais du écouter le peuple, il restait une personne contaminée ",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": 30,
      "title": "VIIIIIITE ! les loups vous suivent de très près !!!",
      "background": require("/assets/meute.png"),
      "actions": [
        {
          "title": "Utiliser la clé trouvée précédement pour fermer les grilles de la ville",
          "to": "/win"
        },
        {
          "title": "Continuer de courrir",
          "to": 130
        }
      ]
    },
    {
      "id": 130,
      "title": "Tu n'as pas utilisé la clé depuis le début ! tu aurais du l'utiliser pour fermer cette ville hantér !!!! ",
      "background": require("/assets/pagedead.png"),
      "actions": [
        {
          "title": "Recommencer",
          "to": 2
        }
      ]
    },
    {
      "id": "game",
      "title": "gagné",
      "background": require("/assets/win.png"),
    }
  ]
}