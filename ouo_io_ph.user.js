// ==UserScript==
// @name        ouo.io block-bypass 4 ph
// @namespace   http://ronanj.co.nr
// @description Redirect ouo.io to ph-safe ouo
// @author	Ronanj T. Molina <rj.molina13@gmail.com>
// @match    *://ouo.io/*
// @run-at   document-start
// @grant    none
// @version     0.1
// @icon	http://ouo.press/blog/favicon.png
// @license         GPLv3 - http://www.gnu.org/licenses/gpl-3.0.txt
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
