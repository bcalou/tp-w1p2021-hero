export default{
    "steps" : [
        {
            "id": 1, 
            "title": "Choisir votre personnage",
            "actions" : [
                {
                    "label" : "Homme",
                    "label2" : "Femme",
                    "to": 2
                }
            ]
        },

        {
            "id":2,
            "title": "Choix du vaisseau",
            "actions" : [
                {
                    "label": "Vaisseau 1",
                    "label2": "Vaisseau 2",
                    "to":3
                }
            ]
        },

        {
            "id":3,
            "title": "Choisir votre pizza à livrer",
            "actions": [
                {
                    "label": "Savoyarde",
                    "label2": "Canibale"
                }
            ]
        },

        {
            "id": 4,
            "title": "Choisir votre lieu de livraison",
            "actions": [
                {
                    "label": "Terre",
                    "to": 5
                },
                {
                    "label2":"Mars",
                    "to": 16

                },
                {
                    "label3":"Lune",
                    "to": 23
                }
            ]
        },

        {
            "id": 5,
            "title":"Activation du boost",
            "actions": [
                {
                    "label": "Oui",
                    "to" : 6
                },
                {
                    "label":"Non",
                    "to" : 11
                }
            ]
        },

        {
            "id" : 6,
            "title2" : "Oups ! Le boost ne fonctionne pas . Vous devez aller chez un garagiste.",
            "title": "Chez quel garagiste souhaitez vous aller?",
            "actions" : [
                {
                    "label": "Mechanic Planet",
                    "to": 7
                },

                {
                    "label": "Wheel Mecanic",
                    "to":8
                }
            ]
        },

        {
            "id" : 7,
            "title": "Mechanic Planet",
            "actions": [
                {
                    "label": "Fermer",
                    "alerte" : "Game over"
                }
            ]   
        },

        {
            "id" : 8,
            "title": "Votre boost est réparé.",
            "title2": "Feu rouge!! Que faites-vous?",        
            "actions": [
                {
                    "label" : "Passer",
                    "to": 9
                },
                {
                    "label" : "Avancer",
                    "to" : 10
                }
            ]
        },

        {
            "id" : 9,
            "title": "Une météorite apparrait.",
            "alerte": "Game over"
        },

        {
            "id" : 10,
            "title": "Vous avez livré la pizza.",
            "alerte":"Win"
        },

        {
            "id" : 11,
            "title":"Avance.Un vaisseau apparaît.",
            "actions" : [
                {
                    "label": "Attaquer",
                    "to": 12
                },
                {
                    "label": "Fuir",
                    "to": 13
                }
            ]
        },

        {
            "id" : 12, 
            "title": "Game over"
        },

        {
            "id" : 13,
            "title": "Activer le boost?",
            "actions" : [
                {
                    "label": "Oui",
                    "to" : 14
                },

                {
                    "label" : "Non",
                    "to": 15
                }
            ]
        },

        {
            "id" : 14,
            "title" : "Oui. Vous avez livré la pizza",
            "alerte":"Win"
        },
        {
            "id": 15,
            "title" : "Non",
            "alerte": "Game over"
        },

        {
            "id": 16,
            "title" : "Un homme devant vous. Que faites-vous?",
            "actions" : [
                {
                    "label": "Avancer dessus",
                    "to": 17
                },
                {
                    "label": "Contourner",
                    "to": 20
                }
            ]
        },

        {
            "id": 17,
            "title" : "L ' homme est sur votre vitre. Continuer?",
            "actions": [
                {
                    "label": "Oui",
                    "to" : 18
                },
                {
                    "label": "Non",
                    "to": 19
                }
            ]
        },

        {
            "id": 18,
            "title" : "Vous avez livré la pizza",
            "alerte": "Win"
        },

        {
            "id": 19,
            "title" : "Une météorite apparaît.",
            "alerte":"Game over"
        },

        {
            "id": 20,
            "title" : "Aller à l' armurerie.",
            "actions": [
                {
                    "label" : "Attaquer",
                    "to": 21
                },
                {
                    "label": "Fuir",
                    "to" : 22
                }
            ]
        },

        {
            "id": 21,
            "title" : "Game over"
        },
        {
            "id" : 22,
            "title" : "Vous avez livré la pizza"
        },

        {
            "id" : 23,
            "title" : "Il rencontre un alien",
            "actions" : [
                {
                    "label": "Prendre dans le vaisseau ou non" ,
                    "to" : 24
                },

                {
                    "label": "Esquiver",
                    "to" : 29
                }
            ]
        },

        {
            "id" : 24,
            "title" : "Un vaisseau apparait. Lord Commander veut un alien. Que fais-tu?",
            "actions": [
                {
                    "label" : "Donner",
                    "to" : 25
                },
                {
                    "label" : "Garder",
                    "to" : 26
                }
            ]

        },

        {
            "id" : 25,
            "title" : "Il retourne un alien contre vous",
            "alerte" : "Game over"
        },

        {
            "id" : 26,
            "title" : "Lord Commander vous attaque.Que faire?",
            "actions" : [
                {
                    "label" : "Attaquer",
                    "to" : 27
                },
                {
                    "label" : "Fuir",
                    "to" : 28
                }
            ]
        },

        {
            "id" : 27,
            "title" : "Vous réussissez à le battre avec l'alien. Vous avez livré la pizza!",
            "alerte": "Win"
        },

        {
            "id" : 28,
            "title" : "Il vous a eu..",
            "alerte": "Game over" 
        },

        {
            "id" : 29,
            "title" : "Gouvernement galactique?",
            "actions" : [
                {
                    "label" : "Donner alien",
                    "to" : 30
                },
                {
                    "label" : "Attaquer",
                    "to": 31
                }
            ]
        },

        {
            "id" : 30,
            "title" : "L 'humain est déguisé en alien . Il vous a protégé . Vous avez livré la pizza en bonne compagnie. Vous avez gagné",
            "alerte" : "Win"
        },

        {
            "id" : 31,
            "title" : "Vous etes en prison . Vous avez perdu.",
            "alerte" :"Game over"
        }
    ]
}