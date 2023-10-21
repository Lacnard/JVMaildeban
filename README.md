# JVMaildeban

JVMaildeban est un userscript qui facilite l'envoi de courriels pour demander un débannissement sur le site [JeuxVideo.com](https://www.jeuxvideo.com/). Il génère un sujet de mail, y ajoute le pseudo en question et un début de message aléatoires pour votre demande de débannissement le script est optimiser pour [protonmail](https://proton.me/fr/mail).
![alt text](https://image.noelshack.com/fichiers/2023/42/6/1697923810-image.png)
## Fonctionnalités

- Génère un titre aléatoire pour votre mail de demande de déban.
- Fournit un début de message aléatoire pour votre mail.
- C/C le message de glados dans le mail.
- Insère un bouton dans l'interface MP de JeuxVideo.com pour faciliter l'envoi de la demande (1click).



## Installation

1. Vous devez avoir [Tampermonkey](https://tampermonkey.net/) .
2. Cliquez sur le lien suivant : [Installer le script](https://github.com/Lacnard/JVMaildeban/blob/main/JVMaildeban.js)
3. Suivez les instructions pour ajouter le script à Tampermonkey.

## Cas specifique
Si le script ne fait rien quand vous appuyez sur le bouton il est possible que votre navigateur bloque la fonctionnalité MAILTO, probleme rencontrer sur les navigateur chromium.
Edge : edge://settings/content/handlers
Chrome : chrome://settings/handlers
Opera :  opera://settings/handlers
Autoriser votre messagerie a etre utiliser comme MAILTO ![alt text](https://image.noelshack.com/fichiers/2023/42/6/1697922406-image.png) ![alt text](https://image.noelshack.com/fichiers/2023/42/6/1697922415-image.png)
Assurez vous d'avoir egalement votre navigateur comme application de MAILTO par defaut ![alt text](https://image.noelshack.com/fichiers/2023/42/6/1697922430-image.png)

## Comment ça marche ?

Lorsque vous naviguez dans vos messages privés sur JeuxVideo.com, un bouton "Demande de deban" apparaîtra. Cliquez dessus pour générer un e-mail aléatoire pour la demande de débannissement. Le script utilisera votre pseudo comme référence et ajoutera un contenu de message approprié.

## Contributeur

👤 **Lacnard**

## Contribution

Les contributions, problèmes et demandes de fonctionnalités sont les bienvenus!

## Support

Si vous rencontrez des problèmes avec ce script, veuillez ouvrir une requete sur ce dépôt GitHub.

## Licence

Ce projet est sous licence MIT.
