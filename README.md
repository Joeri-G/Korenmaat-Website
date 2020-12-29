# De Korenmaat Website

## Installeren [NL]

Clone de repository of download het zip archief

    $ git clone https://github.com/Joeri-G/Korenmaat-Website.git

Zorg er voor dat [node.js](https://nodejs.org) geinstalleerd is en gebruik de Node Package Manager om de dependencies te installeren.

    $ cd Korenmaat-Website
    $ npm install

Om eventuele aanpassingen te zien en te testen kan de ingebouwde test server gebruikt worden. Om deze op te starten moet naar de project root (de map met het `package.json` bestand) genavigeerd worden en moet het volgende uitgevoerd worden.

    $ npm start

Om de aanpassingen op een server te deployen moet de bron opnieuw gebuilt worden en geupload. Hiervoor gebruiken we `npm` in combinatie met het `build` script.

    npm run build

Dit maakt een nieuwe map genaamd `build` met alle benodigde bestanden. Als er naar een bestaande server gedeployed wordt kan het zijn dat sommige van de gegenereerde bestanden aan aanwezig zijn op de server. In dit geval moet er per bestand besloten worden welke versie op de server komt.
Een voorbeeld van deze dubbele bestanden zou `robots.txt` kunnen zijn. Dit bestand bevat instructies voor zoekmachines en webcrawlers. Het bestaande bestand is in dit geval waarschijnlijk uitgebreider.

Als de bestanden geupload zijn is het proces voltooid en hoeven er als het goed is geen weizigingen meer aan de server worden gemaakt.

## Install [EN]
Clone repository or download and extract the zip archive

    $ git clone https://github.com/Joeri-G/Korenmaat-Website.git


Make sure you have [node.js](https://nodejs.org) installed and use the Node Package Manager to install the dependencies

    $ cd Korenmaat-Website
    $ npm install

To view and test any changes you can use the built in test server. To start the server navigate to the project root (the directory with the `package.json` file) and run

    $ npm start

In order to deploy the changes to a webserver the files need to be built / compiled and uploaded.
In order to do this use the `npm` command in combination with the `build` script.

    $ npm run build

This wil create a directory named `build` with all the required files.
If you are deploying to an existing server some of these files might already be present, if this is the case you should individually decide what files should be kept and what files should be replaced.
An example of these duplicate files could be `robots.txt`. This file contains instructions for search engines and webcrawlers and the existing file is most likely more comprehensive.

After the new files have been uploaded everything should work just fine and no extra work should be necessary.
