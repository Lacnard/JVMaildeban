// ==UserScript==
// @name         JVMaildeban
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Envois un mail de demande de deban a reclamation
// @author       Lacnard
// @match        https://www.jeuxvideo.com/messages-prives/message.php?id=*
// @match        https://www.jeuxvideo.com/messages-prives/nouveau.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Fonction pour un titre aléatoire vous pouvez en ajouter/supprimer ou mettre en commentaire ce que vous ne voullez pas
    function getRandomSubject(pseudo) {
        let subjects = [
            `DEBAN ${pseudo}`,
            `Demande de débannissement ${pseudo}`,
            `Requête de déban pour ${pseudo}`,
            `Appel à revoir la sanction de ${pseudo}`,
            `Sollicitation pour débannir ${pseudo}`
        ];
        let randomIndex = Math.floor(Math.random() * subjects.length);
        return subjects[randomIndex];
    }

    // Fonction pour obtenir un début de message aléatoire CONFUS, vous pouvez en ajouter/supprimer ou mettre en commentaire ce que vous ne voullez pas
    function getRandomMessageStart() {
        let starts = [
            `je ne comprends pas la sanction et je pense qu'elle est injustifiée`,
            `Je voudrais discuter de la sanction imposée que je trouve non méritée`,
            `Bonjour je trouve le ban est excessif`,
            `Je suis perplexe quant à la raison de mon bannissement`,
            `Je pense qu'il y a eu une erreur avec ma sanction`,
            `Je ne suis pas d'accord avec la sanction`
        ];
        let randomIndex = Math.floor(Math.random() * starts.length);
        return starts[randomIndex];
    }

    // Fonction pour envoyer le mail
    function sendMail(pseudo, subject, messageBody) {
        let mailtoLink = `mailto:reclamations@jeuxvideo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBody)}`;
        window.open(mailtoLink, '_blank');
    }

    // bouton
    let btn = document.createElement('button');
    btn.innerText = 'Mail de deban';
    btn.classList.add('btn', 'btn-quitter', 'icon-message');
    btn.style.marginLeft = '10px';
    let referenceElement = document.querySelector('.action-left');
    if (referenceElement) {
        referenceElement.parentNode.insertBefore(btn, referenceElement.nextSibling);
    }

    btn.onclick = function() {
        let pseudo = document.querySelector('.headerAccount__pseudo').innerText;
        let messageElement = document.querySelector('.txt-msg.text-enrichi-forum');
        let messageContent = messageElement ? messageElement.innerHTML : '';
        let randomSubject = getRandomSubject(pseudo);
        let randomMessageStart = getRandomMessageStart();
        let emailBody = `${randomMessageStart}\n\n${messageContent}`;
        sendMail(pseudo, randomSubject, emailBody);
    };

})();
