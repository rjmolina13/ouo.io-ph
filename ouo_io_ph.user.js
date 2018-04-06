// ==UserScript==
// @name        ouo.io block-bypass 4 ph
// @namespace   http://ronanj.co.nr
// @description Redirect ouo.io to ph-safe ouo
// @copyright	2018, Ronanj Molina (ronanj.co.nr)
// @author	rjmolina13 - Ronanj T. Molina <rj.molina13@gmail.com>
// @homepageURL	https://github.com/rjmolina13/ouo.io-ph
// @supportURL	https://github.com/rjmolina13/ouo.io-ph
// @match    *://ouo.io/*
// @run-at   document-start
// @grant    none
// @version     0.1
// @icon	https://raw.githubusercontent.com/rjmolina13/ouo.io-ph/master/favicon.png
// @license MIT
// @updateURL	https://raw.githubusercontent.com/rjmolina13/ouo.io-ph/master/ouo_io_ph.js
// @collaborator rjmolina13
// ==/UserScript==
 

//-- Only redirect if the *path* ends in .html...
if (/\.html$/.test (location.pathname) ) {
    var newHost     = location.host.replace (/\.io$/, ".press");
    var plainPath   = location.pathname.replace (/\.html$/, "");
    var newURL      = location.protocol + "//" +
        newHost                  +
        plainPath                +
        location.search          +
        location.hash
    ;
    location.replace (newURL);
}
