// ==UserScript==
// @name         LSS-Mission-Vehicle-Highlight
// @version      1.1.1
// @description  Highlights vehicles in alarm window
// @author       Lenni2004
// @include      https://www.leitstellenspiel.de/missions/*
// @include      *://missionchief.co.uk/missions/*
// @include      *://www.missionchief.co.uk/missions/*
// @include      *://missionchief.com/missions/*
// @include      *://www.missionchief.com/missions/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    const give_alert = false;
    const colors = {
        'ELW 2': '#0f0',
        'FüKw': '#00f',
        "ELW 1": "#0f0",
        "Polizeihubschrauber": "#00f",
        "NEF": "#FFFF00",
        "RTW": "#FFFF00",
        "KTW": "#FFFF00",
        "KTW Typ B": "#FFFF00",
        "Rettungshubschrauber": "#FFFF00",
        "FuStW (DGL)": "#00f",
        "ITW": "#FFFF00",
        "GW-San": "#FFFF00",
        "NAW": "#FFFF00",
        "GRTW": "#FFFF00",
        "AB-Einsatzleitung": "#0f0",
    };
    let types = Object.keys(colors);
    let hatFz = false;
    $('#mission_vehicle_at_mission tbody tr[id^="vehicle_row"], #mission_vehicle_driving tbody tr[id^="vehicle_row"]').each((_, row) => {
        let vehicleType = row.querySelector('small').innerText.replace(/^\(|\)$/g, '');
        types.forEach(type => {
            if (vehicleType == (type)) $(row).css('background-color', colors[type]) && !hatFz && give_alert && alert("Pommes und Bier auf´m Einsatz!");
        });
    });
})();
