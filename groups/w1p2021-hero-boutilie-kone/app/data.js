export default {
    "game": [
      ////
      {
        "step" : "0" ,
         "background"  : require('./assets/image/steps/step1.png'),
         "text" : "Avec votre petite famille, vous avez comme projet de retourner en vacances dans la maison de vos parents. C'est une maison dans laquelle vous avez cependant vécu un traumatisme étant petite et y retourner vous rend un peu nerveuse, même si vous y êtes attachée... Comme l'endroit est beau et pour contenter tout le monde vous acceptez tout de même d'y aller !",
         "links" : [ "1" ],
         "time" : 160 , 
      },
      {
        "step" : "1" ,
         "background"  : require('./assets/image/steps/step1.png'),
         "text" : "Arrivés sur place, vos enfants et mari veulent aller à la plage voisine, l'endroit même où vous avez eu ce fameux problème étant petite... Malgré votre réticence, votre mari Gabe insiste et vous vous y rendez",
         "links" : [ "3" ],
         "time" : 160 , 
      },{
        "step" : "3" ,
         "background"  : require('./assets/image/steps/step2.png'),
         "text" : `Arrivés à la plage, votre famille s’installe et pendant que vous fermez les yeux pour vous détendre, votre fils 
         Jason part se balader parce que faire des chateaux de sable à 11 ans ça va deux minutes. 
         Vous commencez à le chercher et vous le voyez de loin face à un homme étrange, cette scène vous fait paniquer.
         Voulez vous rentrer à la maison ? `,
         "choice" : ['Rentrer à la maison ?' , 'Aller acheter une glace'],
         "links" : [ "4" , "5" ],
         "time" : 160 , 
      },{
        "step" : "5" ,
         "background"  : require('./assets/image/steps/usIceCream.jpg'),
         "text" : `Plutôt que de rentrer à la maison, vous allez chercher des glaces pour tout le monde afin de détendre l'atmosphère. puis vous rentrez à la maison `,
         "links" : [ "4" ],
         "items" : "glace" ,
         "time" : 160 , 
      },{
        "step" : "4" ,
         "background"  : require('./assets/image/steps/step3.png'),
         "text" : `De retour à la maison, c'est le soir. On aperçoit derrière la fenêtre une étrange famille dont les silhouettes vous
         apparaissent familières... Malgré les menaces, aucun d’eux ne bouge que faites vous ?`,
         "choice" : ['Appeler la police' , `Attendre qu'ils partent d'eux-même`],
         "links" : [ "7" , "8" ],
         "time" : 160 , 
      },{
        "step" : "7" ,
         "background"  : require('./assets/image/steps/step7.png'),
         "text" : `Bien que vous ayez décidé de vous passer de la police, Gabe, votre mari décide de sortir pour leur faire peur.
         Voulez vous le laissez sortir et prendre la batte de baseball comme arme ?`,
         "choice" : ['OUI' , `NON`],
         "links" : [ "9" , "10" ],
         "time" : 160 , 
      },{
        "step" : "9" ,
         "background"  : require('./assets/image/steps/step9.png'),
         "text" : `Gabe sort avec la batte, menaçant, il s'avance vers l'autre père qui lui casse la jambe, c'est un échec `,
         "links" : [ "11"],
         "time" : 160 , 
      },{
        "step" : "11" ,
         "background"  : require('./assets/image/steps/step11bis.jpg'),
         "text" : `Vous voyez que votre famille est menacée par cette autre famille orange, la mif rentre dans la maison et vous encercle. Chaque membre est visé par le membre qui lui ressemble et doit le suivre, votre double vous ordonne de laisser partir vos enfants.`,
         "links" : [ "12"],
         "time" : 160 , 
      },{
        "step" : "12" ,
         "background"  : require('./assets/image/steps/step11bis.jpg'),
         "text" : `Pour ne pas voir votre famille se faire torturer, votre double vous ordonne de vous enchaîner à la table`,
         "links" : [ "14" , "/60"],
         "choice" : [ "Vous refusez" , "Vous vous enchaînez"] ,
         "items" : [ "glace" ,  " autre" ] ,
         "time" : 160 , 
      },{
        "step" : "/60" ,
         "background"  : require('./assets/image/steps/usLOSE.jpg'),
         "text" : `C’était un piège, votre double en profite et vous fait tellement de guilis que vous mourez d’une crise cardiaque.`,
         "links" : [ "/lose"],
         "time" : 160 , 
      },{
        "step" : "14" ,
         "background"  : require('./assets/image/steps/step14.jpg'),
         "text" : `Votre double fait du mal à Jason, qui s'évanouit et Jason s'évanouit `,
         "links" : [ "15" ],
         "items" : [ "glace" ] ,
         "time" : 160 , 
      },{
        "step" : "15" ,
         "background"  : require('./assets/image/steps/step15.jpg'),
         "text" : `Devant cette scène, vous ne répondez plus de vous, comme vous n'êtes pas enchaîné vous attrapez le tisonnier qui est au sol` ,
         "choice" : ["Attaquer votre double" , "Essayer de lui faire peur" ], 
         "links" : [ "16" , "17"],
         "time" : 160 , 
      },{
        "step" : "16" ,
         "background"  : require('./assets/image/steps/step1.png'),
         "text" : `WIN 
         Vous lui mettez la misère et la tuez, motivé par cette force toute votre famille se jète sur leur double et les neutralise.` ,
         "links" : [ "/win" ],
         "time" : 160 , 
      },{
        "step" : "17" ,
         "background"  : require('./assets/image/steps/step1.png'),
         "text" : `Lose Votre double éclate de rire et tue votre fils devant vos yeux. ` ,
         "links" : [ "/lose" ],
         "time" : 160 , 
      },{
        "step" : "10" ,
         "background"  : require('./assets/image/steps/step10.png'),
         "text" : `Gabe ne prend pas la batte mais va chercher le fusil à pompe qui se trouvait sous le lit de votre chambre. Il se positionne derrière les fenêtres et tire sur la famille sans sommation. `,
         "links" : [ "18" ],
         "time" : 160 , 
      },{
        "step" : "18" ,
         "background"  : require('./assets/image/steps/step10.png'),
         "text" : `gabe veut s'approcher  `,
         "choice" : [ "le retenir" , "le laisser s'approcher" ],
         "links" : [ "19"  , "20" ],
         "time" : 160 , 
      },{
        "step" : "19" ,
         "background"  : require('./assets/image/steps/step1.png'),
         "text" : `Vous l'avez échappé belle, la famille allait vous trucider. Gabe a fait preuve d'un instinct de survie hors du commun on peut l'applaudir. `,
         "choice" : [ "le laissez s'approchez" , "le laissez s'approchez" ],
         "links" : [ "/win" ],
         "time" : 160 , 
      },{
        "step" : "20" ,
         "background"  : require('./assets/image/steps/step20.png'),
         "text" : `Seul le petit double de Jason survit. Vous vous approchez et il vous mord, mais telle une sainte, vous le prenez dans vos bras et décidez de l'adopter
         Vous aimeriez qu'il se sente plus à l'aise au sein de votre famille`,
         "choice" : [ "Lui payer une chirurgie esthétique pour réparer son visage brulé" , "Lui payer une psychanalyse qui durera 8 ans (pour de vrai)" ],
         "links" : [ "21" , "autre" ],
         "time" : 160 , 
      },{
        "step" : "21" ,
         "background"  : require('./assets/image/steps/step1.png'),
         "text" : `Malgré son nouveau visage, le petit double reste totalement hors de contrôle et il vous est retiré pour finir à la DDASS, PERDU`,
         "links" : [ "/Lose" ],
         "time" : 160 , 
      },{
        "step" : "22" ,
         "background"  : require('./assets/image/steps/step1.png'),
         "text" : `WIN Jason et son double s'entendent de mieux en mieux, c'est gagné !`,
         "links" : [ "/win"],
         "time" : 160 , 
      },{
        "step" : "8" ,
         "background"  : require('./assets/image/steps/step8.jpeg'),
         "text" : `En attendant la police vous faites une partie de monopoly pour calmer et distraire vos enfants. Vous voyez que vous allez gagner la partie `,
         "choice" : ['Vous décidez de gagner car vous détestez perdre' , `Vous laissez gagner vos enfants par bonté d’âme`],
         "links" : [ "31" , "30" ],
         "time" : 160 , 
      },{
        "step" : "30" ,
         "background"  : require('./assets/image/steps/step1.png'),
         "text" : `Win La police arrive et asperge la famille double de gaz lacrymogène, puis l'embarque. Vous pourrez enfin dormir tranquille, c'est gagné !`,
         "links" : [ "/win"  ],
         "time" : 160 , 
      },{
        "step" : "31" ,
         "background"  : require('./assets/image/steps/step31.jpg'),
         "text" : `Jason devient fou après avoir perdu et s'enfuit alors que vous attendiez la police, la famille double l'attrape et l'assomme`,
         "choice" : ['SAUVER JASON ?' , `ATTENDRE LA POLICE`],
         "links" : [ "33" , "32"  ],
         "time" : 160 , 
      },{
        "step" : "33" ,
         "background"  : require('./assets/image/steps/step33.jpg'),
         "text" : `Vous réussissez à attraper le tuyau d'arrosage du jardin et vous lancez de l'eau sur la famille, le jet est tellement fort que tout le monde tombe et glisse sur l'eau, Jason réussit à s'échapper et vous retrouve. La police arrive à ce moment là...`,
         "links" : [ "50" ],
         "time" : 160 , 
      },{
        "step" : "50" ,
         "background"  : require('./assets/image/steps/step1.png'),
         "text" : `apprès plusieur moi vous avez le choix entre porter plainte & abandonné les poursuite`,
         "choice" : ['porter plainte?' , `abandonné les poursuites`],
         "links" : [ "34" , "35"  ],
         "time" : 160 , 
      },{
        "step" : "34" ,
         "background"  : require('./assets/image/steps/step1.png'),
         "text" : `Perdu ! Vous avez préféré placer votre sort entre les mains de la justice américaine alors que vous êtes une famille de noirs américains, il aurait mieux valu rester scred`,
         "choice" : [''],
         "links" : [ "34" , "35"  ],
         "time" : 160 , 
      },{
        "step" : "35" ,
         "background"  : require('./assets/image/steps/step1.png'),
         "text" : `Gagné ! C'est la loi de la jungle le system judiciér américain est corrompu vous n'avez perdu votre argent `,
         "links" : [ "/WIN"  ],
         "time" : 160 , 
      },{
        "step" : "32" ,
         "background"  : require('./assets/image/steps/step32.jpg'),
         "text" : `Vous voyez par la fenêtre que votre double commence à taillader Jason avec des ciseaux, vous commencez à pleurer mais la police arrive, vous entendez les gyrophares, La police attrape la famille double et vient prendre votre déposition`,
         "links" : [ "33"  ],
         "time" : 160 , 
      },{
        "step" : "33" ,
         "background"  : require('./assets/image/steps/step1.png'),
         "text" : `Perdu ! Vous avez abandonné votre fils et fait confiance à la justice alors que vous êtes une famille de noirs américains, il fallait se débrouiller tout seul`,
         "links" : [ "/lose" ],
         "time" : 160 , 
      }




     

      

      ////$

    
    //,{
    //   "step" : "8" ,
    //    "background"  : require('./assets/image/steps/step3.png'),
    //    "text" : `PORTER PLAINTE ?`,
    //   "choice" : [
    //     "OUI",
    //     "NON"
    //   ] ,
    //    "links" : [ "lose/9" ],
    //    "time" : 100 , 
    // },
    // ///// lose //////
    // {
    //   "step" : "9" ,
    //    "background"  : require('./assets/image/steps/step3.png'),
    //    "text" : `Perdu ! Vous avez abandonné votre fils et fait confiance à la justice alors que vous êtes une famille de noirs américains, il fallait se débrouiller tout seul`,
    //    "links" : [ "9" ],
    //    "time" : 100 , 
    // },


    ]
  }




