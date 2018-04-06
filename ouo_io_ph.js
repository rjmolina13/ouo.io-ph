// ==UserScript==
// @name        ouo.io block-bypass 4 ph
// @namespace   http://ronanj.co.nr
// @description Redirect ouo.io to ph-safe ouo
// @include     http://ouo.io/*
// @include     http://*.ouo.io/*
// @include     https://*.ouo.io/*
// @include     https://ouo.io/*
// @version     0.1
// @grant       none
// ==/UserScript==
 


var url = window.location.host;
 

if (url.match("//ouo.io") === null) {
    url = window.location.href;
    if  (url.match("//ouo.io") !== null){
        url = url.replace("//ouo.io", "//ouo.press");
    } else if (url.match("/*.html") !== null){
        url = url.replace("/*.html", " ");
    } else {
    	return;
    }
    console.log(url);
    window.location.replace(url);
}