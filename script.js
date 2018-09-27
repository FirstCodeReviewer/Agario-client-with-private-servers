// ==UserScript==
// @name         Play Agario on private Servers with Agar.io client.
// @version      0.2
// @description  With this userscript you can connect to private Servers with the original agar.io client.
// @author       FirstCodeReviewer
// @match        https://agar.io/*
// @grant        none
// ==/UserScript==

var serverip = "SERVERIP";
var port = 443;

//Time to wait to inject the script
var timeout = 5000;

window.addEventListener('load', function() {
    setTimeout(function() {
        core.disableIntegrityChecks(true);
        core.connect("wss://" +serverip + ":" + port);
    } , timeout);
}, false);
