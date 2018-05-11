// ==UserScript==
// @name         Play Agario on private Servers with Agar.io client.
// @version      0.1
// @description  With this userscript you can connect to private Servers with the original agar.io client.
// @author       FirstCodeReviewer
// @match        http://agar.io/
// @grant        none
// ==/UserScript==

var serverip = "SERVERIP";
var port = 443;

window.addEventListener('load', function() {
    core.disableIntegrityChecks(true);
    core.connect("ws://" +serverip + ":" + port);
}, false);
