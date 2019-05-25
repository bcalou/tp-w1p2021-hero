export default {
  "steps": [ 
    {
      "id": 1,
      "title": "Bienvenue au Ciel",
      "actions": [ 
        {
          "label": "Paradis",
          "to": 2
        },
        {
          "label": "Enfer",
          "to": 3
        }
      ],
      "conversation": true,
      "conversationBox" : require("/assets/img/god-conversation.png"),
      "conversationNext" : true,
      "messages" : ["Bienvenue au Ciel parmis tant d'autres ....", "Tu as suivis ton destin..", "La vie après la mort tu dis ?", "Choisis une de ces deux portes !"],
      "choices": [
        messageParadis, Enfer]
    },
    {
      "id": 2,
      "title": "Bienvenue au Ciel",
      "actions": [
        {
          "label":"Enfer",
          "to": 3
        }
      ]
    },
    {
      "id": 3,
      "title": "MAP 1",
      "actions": [
        {
          "label": "Continuer",
          "arrow": "right",
          "to": 4
        }
      ],
      "conversation": false,
      "background": require("/assets/img/map-1.png")
    },
    {
      "id": 4,
      "title": "MAP 2",
      "actions": [
        {
          "label":"Haut",
          "arrow": "top",
          "to": 5
        },
        {
          "label":"Droite",
          "arrow": "right",
          "to": 6
        }
      ],
      "background": require("/assets/img/map-2.png")
    },
    { 
      "id": 5,
      "title": "MAP 12", 
      "actions": [
        {
          "label":"Droite",
          "arrow": "right",
          "to": 14
        },
        {
          "label":"Gauche",
          "arrow": "left",
          "to": 12
        }
      ],
      "background": require("/assets/img/map-5.png")
    },
    {
      "id": 6,
      "title": "MAP 3",
      "actions": [
        {
          "label":"Bas",
          "arrow": "bottom",
          "to": 7 
        },
        {
          "label":"Droite",
          "arrow": "right",
          "to": 8
        },
        {
          "label":"Gauche",
          "arrow": "left",
          "to": 4 
        }
      ],
      "background": require("/assets/img/map-3.png")
    },
    {
      "id": 7,
      "title": "MAP 4",
      "actions": [
        {
          "label":"Gauche",
          "arrow": "left",
          "to": 10 
        },
        {
          "label":"Droite",
          "arrow": "right",
          "to": 9
        },
        {
          "label":"Haut",
          "arrow": "top",
          "to": 6
        }
      ],
      "background": require("/assets/img/map-2.png")
    },
    {
      "id": 9,
      "title": "MAP 5",
      "actions": [
        {
          "label":"Gauche",
          "arrow": "left",
          "to": 7 
        }
      ],
      "background": require("/assets/img/map-4.png")
    },
    {
      "id": 10,
      "title": "MAP 6",
      "actions": [
        {
          "label":"Gauche",
          "arrow": "left",
          "to": 11
        },
        {
          "label":"Droite",
          "arrow": "right",
          "to": 7
        }
      ],
      "background": require("/assets/img/map-1.png")
    },
    {
      "id": 11,
      "title": "MAP 7",
      "actions": [
        {
          "label":"Droite",
          "arrow": "right",
          "to": 10
        }
      ]
    },
    {
      "id": 12,
      "title": "MAP 13",
      "actions": [
        {
          "label":"Haut",
          "arrow": "top",
          "to": 13
        },
        {
          "label":"Bas",
          "arrow": "bottom",
          "to": 3,
          "lose": true
        },
        {
          "label":"Droite",
          "arrow": "right",
          "to": 5
        }
      ]
    },
    {
      "id": 13,
      "title": "MAP 14",
      "actions": [
        {
          "label":"Bas",
          "arrow": "bottom",
          "to": 12
        }
      ],
      "background": require("/assets/img/map-6.png")
    },
    {
      "id": 14,
      "title": "MAP 15",
      "actions": [
        {
          "label":"Droite",
          "arrow": "right",
          "to": 15 
        },
        {
          "label":"Haut",
          "arrow": "top",
          "to": 16 
        },
        {
          "label":"Gauche",
          "arrow": "left",
          "to": 5
        }
      ],
      "background": require("/assets/img/map-2.png")
    },
    {
      "id": 15,
      "title": "MAP 16",
      "actions": [
        {
          "label":"Haut",
          "arrow": "top",
          "to": 26
        },
        {
          "label":"Gauche",
          "arrow": "left",
          "to": 14
        }
      ],
      "background": require("/assets/img/map-7.png")
    },
    {
      "id": 16,
      "title": "MAP 17",
      "actions": [
        {
          "label":"Bas",
          "arrow": "bottom",
          "to": 14
        },
        {
          "label":"Gauche",
          "arrow": "left",
          "to": 17
        }
      ]
    },
    {
      "id": 17,
      "title": "MAP 18",
      "actions": [
        {
          "label":"Haut",
          "arrow": "top",
          "to":  19
        },
        {
          "label":"Gauche",
          "arrow": "left",
          "to": 18 
        },
        {
          "label":"Droite",
          "arrow": "right",
          "to": 16
        }
      ],
      "background": require("/assets/img/map-2.png")
    },
    {
      "id": 18,
      "title": "Kit de Torture",
      "actions": [
        {
          "label":"Droite",
          "arrow": "right",
          "to": 17
        }
      ],
      "background": require("/assets/img/map-8.png")
    },
    {
      "id": 19,
      "title": "MAP 19",
      "actions": [
        {
          "label":"Bas",
          "arrow": "bottom",
          "to":  17
        },
        {
          "label":"Gauche",
          "arrow": "left",
          "to": 20
        },
        {
          "label":"Droite",
          "arrow": "right",
          "to": 21
        }
      ],
      "background": require("/assets/img/map-3.png")
    },
    {
      "id": 20,
      "title": "PNJ CORNE PORTE",
      "actions": [
        {
          "label":"Droite",
          "arrow": "right",
          "to":  19
        }
      ],
      "background": require("/assets/img/map-1.png")
    },
    {
      "id": 21,
      "title": "MAP 20",
      "actions": [
        {
          "label":"Haut",
          "arrow": "top",
          "to": 23
        },
        {
          "label":"Gauche",
          "arrow": "left",
          "to": 19
        },
        {
          "label":"Droite",
          "arrow": "right",
          "to": 22
        }
      ],
      "background": require("/assets/img/map-2.png")
    },
    {
      "id": 22,
      "title": "MAP 21",
      "actions": [
        {
          "label":"Bas",
          "arrow": "bottom",
          "to": 27
        },
        {
          "label":"Gauche",
          "arrow": "left",
          "to": 21
        }
      ]
    },
    {
      "id": 23,
      "title": "MAP 22",
      "actions": [
        {
          "label":"Bas",
          "arrow": "bottom",
          "to": 21
        },
        {
          "label":"Gauche",
          "arrow": "left",
          "to": 24
        },
        {
          "label":"Droite",
          "arrow": "right",
          "to": 25
        }
      ],
      "background": require("/assets/img/map-9.png")
    },
    {
      "id": 24,
      "title": "YOU LOOSE",
      "actions": [
        {
          "lose": true
        }
      ],
      "background": require("/assets/img/map-1.png")
    },
    {
      "id": 25,
      "title": "Coffre avec Lave",
      "actions": [
        {
          "label":"Gauche",
          "arrow": "left",
          "to": 23
        }
      ]
    }, 
    {
      "id": 26,
      "title": "PORTE BEFORE WIN",
      "actions": [
        {
          "label":"Bas",
          "arrow": "bottom",
          "to": 15
        }
      ]
    },
    {
      "id": 27,
      "title": "PORTE BEFORE WIN",
      "actions": [
        {
          "label":"Haut",
          "arrow": "top",
          "to": 22
        },
        {
          "label":"Bas",
          "arrow": "bottom",
          "to": 15
        },
        {
          "label":"Porte",
          "to": 28
        }
      ]
    },
    {
      "id": 28,
      "title": "WINNING",
      "actions": [
        {
          "win": true
        }
      ]
    }
  ]
}