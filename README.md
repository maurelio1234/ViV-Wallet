# Le VIV Wallet

Table des matières :

- [Introduction](#introduction)
- [Contribuer au projet fil rouge](#contribuer-au-projet-fil-rouge)
- [À lire avant de commencer](#à-lire-avant-de-commencer)
- [Let's code](#lets-code)

## Introduction

Grow Together est un programme d'entreprise qui a un double objectif : permettre aux consultants qui souhaitent s&#39;impliquer de développer et de faire valoir leur expertise, et faire évoluer le positionnement d&#39;Invivoo vers une offre à plus forte valeur ajoutée répondant aux besoins de nos clients. Comme son nom l&#39;indique, il s&#39;agit bien de grandir tous ensemble.

Pour cela, le programme repose principalement sur la mise en place d&#39;un parcours d&#39;évolution cadré pour les consultants désireux de développer des compétences tout en s&#39;impliquant dans le développement d&#39;Invivoo. Ce parcours propose différents niveaux d&#39;implication allant de Consultant Senior à Partner en passant par Manager ou Manager Senior. S&#39;impliquer dans un de ces rôles est récompensé par une réelle plus-value que ce soit en termes d&#39;évolution de carrière, de responsabilités confiées ou d&#39;incentive financier sous la forme d&#39;une monnaie Virtuel, le VIV, la Virtual Invivoo Value en fonction de la contribution.

Le VIV-Wallet est une application qui s&#39;adresses à différents types d&#39;utilisateurs, ou persona. Il va permettre :

- à chaque consultant de suivre sa cagnotte de VIV
- à chaque membre des équipes RH, Recrutement, Sales et Communication, d&#39;attribuer ces VIV
- aux membres de l&#39;équipe Admin, de convertir ses VIV sur la paie du collaborateur.

## Contribuer au projet fil rouge

Le VIV Wallet est un projet fil rouge dans le cadre du Programme Grow Together. Il est open-source.

Si tu veux contribuer, voilà la marche à suivre :

- Lis bien l'intégralité de ce README !
- Choisis le ticket que tu veux développer dans [la version en cours de développement](https://github.com/Invivoo/ViV-Wallet/projects/1)
- Notifie sur Teams [dans le canal du projet](https://teams.microsoft.com/l/channel/19%3a4ad8360f9c4e4016a157bfe3f7ca968a%40thread.skype/VIV-Wallet?groupId=d5a0827f-1103-4e19-89f3-d85e7caeb167&tenantId=6d13640c-ba8f-4480-a2a0-0093bacdb7c1) le ticket sur lequel tu souhaites t'impliquer en créant une conversation avec le lien du ticket
- Attend le go d'un manager d'expertise (il vérifiera que le ticket est faisable et n'est pas déjà traité par quelqu'un d'autre
- Déplace le ticket dans In Progress en t'affectant sur le ticket [ici](https://github.com/Invivoo/ViV-Wallet/projects/1). N'hésite pas à demander plus d'info dans la conversation sut Teams liée au ticket.
- Crée une branche intitulée _viv/feature|hotfix/id-du-ticket_ à partir de la branche develop
- Un fois le développement fait, fait une pull request et demander via Teams à un consultant senior de la valider dans la conversation que tu as créée pour demander si le ticket était disponible.
- _Et Voilà_, le nombre de VIV associé au ticket sera débloqué une fois que l'ensemble de la version sera livrée


## À lire avant de commencer

Quelques guidelines ont été données pour assurer la cohérence du projet ainsi que son modèle de données
- Dans ce projet, tu pourras retrouver des tickets Java et des tickets Front-End. Retrouve [ici](https://invivoo.sharepoint.com/:w:/s/Managersd'Expertise/EeWUsfMrHMdOgpooDoYeWCYBsczKABL8gNalyRRjTDFb_g?e=ebTLgZ) l'intégralité des user stories par persona qui ont permis de les générer.
- Pour donner de la cohérence au projet, le modèle de données, les apis disponible et la structure du projet Java ont été défini en amont. Si il y a besoin de les faire évoluer, merci de créer une conversation à ce sujet dans [dans le canal du projet](https://teams.microsoft.com/l/channel/19%3a4ad8360f9c4e4016a157bfe3f7ca968a%40thread.skype/VIV-Wallet?groupId=d5a0827f-1103-4e19-89f3-d85e7caeb167&tenantId=6d13640c-ba8f-4480-a2a0-0093bacdb7c1). Tu peux retrouver ces 3 éléments dans le document des [Technical Specifications](https://invivoo.sharepoint.com/:w:/s/Managersd'Expertise/ES5hwrPj9fdFj1g8w58NLvcBn2_JeJ9HslSdzdUwafGFpQ?e=KSssb3).

## Let's code 

### Pour lancer le server de développement

Run `mvn clean install` to build ViV-Wallet-app and move it to ViV-Wallet-api resources. Run it in sudo mode the first time to install the version of node used by the frontend-maven-plugin. 
Move to ViV-Wallet-api folder and run `mvn spring-boot:run` for a dev server. Navigate to `http://localhost:8080/`.