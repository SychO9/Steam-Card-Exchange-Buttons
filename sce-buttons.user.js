// ==UserScript==
// @name         Steam Card Exchange Buttons
// @namespace    https://steamcommunity.com/id/SychO_Droid
// @updateURL    https://rawgit.com/SychO9/Steam-Card-Exchange-Buttons/master/sce-buttons.user.js
// @version      1.6
// @description  Fast Link To SCE Badge Page From Badge Progress Page.
// @author       SychO
// @icon         https://www.steamcardexchange.net/include/design/img/favicon_blue_small.png
// @match        http://steamcommunity.com/profiles/*
// @match        http://steamcommunity.com/id/*
// @match        https://steamcommunity.com/profiles/*
// @match        https://steamcommunity.com/id/*
// @grant        none
// ==/UserScript==

(function($) {
    $(document).ready(function(event) {
        'use strict';
        // CSS.
        var style = ".steam_card_ex {clear: both;} .steam_card_ex a {z-index: 4;position: relative;padding: 5px 11px;background: #00000075;display: inline-block;color: #a8a8a8;border-radius: 3px;margin: 10px 2px 0;}.steam_card_ex a:hover {background: #08306c;color: white;}";
        $("head").append("<style>"+style+"</style>");        
        // The Buttons.
        var array, appid;
        var name = window.location.pathname.match(/([^\/]*)\/*$/)[1];
        if(name=="badges") {
            array = $(".badge_row_overlay").attr("href").split('/');
            appid = array[6];
            $(".badge_current").append("<div class='steam_card_ex'><a target='_blank' href='http://www.steamcardexchange.net/index.php?inventorygame-appid-"+appid+"'>Steam Card Exchange</a><a target='_blank' href='http://www.steamcardexchange.net/index.php?gamepage-appid-"+appid+"'>Showcase</a></div>");
            $(".badge_row").hover(function() {
                //var array = $(this).find(".badge_row_overlay").attr("href").split('/');
                var appid2 = $(this).find("a.badge_row_overlay").attr("href").split('/')[6];
                $(this).find(".steam_card_ex a:first-child").attr("href", "https://www.steamcardexchange.net/index.php?inventorygame-appid-"+appid2);
                $(this).find(".steam_card_ex a:last-child").attr("href", "https://www.steamcardexchange.net/index.php?gamepage-appid-"+appid2);
            });
        } else {
            array = window.location.pathname.split('/');
            appid = array[4];
            $(".badge_current").append("<div class='steam_card_ex'><a target='_blank' href='https://www.steamcardexchange.net/index.php?inventorygame-appid-"+appid+"'>Steam Card Exchange</a><a target='_blank' href='http://www.steamcardexchange.net/index.php?gamepage-appid-"+appid+"'>Showcase</a></div>");
        }
        //$(".gamecards_inventorylink").append("<a target='_blank' class='btn_grey_grey btn_medium' href='https://www.steamcardexchange.net/index.php?inventorygame-appid-"+appid+"'><span>Steam Card Exchange</span></a>");
        // Your code here...
    });
})(jQuery);
