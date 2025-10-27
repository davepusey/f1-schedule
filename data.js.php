<?php
header("Content-Type: application/javascript");
?>

const dayText = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const SECS = 1000;
const MINS = 60 * SECS;
const HOURS = 60 * MINS;
const DAYS = 24 * HOURS;

//----------------------------------------------------------------------------------------------------------------------

var seasonYear = 2025;

var roundNum = 21;
var roundName = "Brazilian Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg";

var sessionsData = [

    // 2025-11-07 FRI
    ["F1 Practice 1",   new Date(1762525800 * SECS),  60 * MINS],
    ["F1 Sprint Qual",  new Date(1762540200 * SECS),  60 * MINS],

    // 2025-11-08 SAT
    ["F1 Sprint",       new Date(1762610400 * SECS),  90 * MINS],
    ["F1 Qualifying",   new Date(1762624800 * SECS),  60 * MINS],

    // 2025-11-09 SUN
    ["F1 Race",         new Date(1762707600 * SECS), 180 * MINS]
];
