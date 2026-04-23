<?php
header("Content-Type: application/javascript");
?>

const dayText = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const SECS = 1000;
const MINS = 60 * SECS;
const HOURS = 60 * MINS;
const DAYS = 24 * HOURS;

//----------------------------------------------------------------------------------------------------------------------

var seasonYear = 2026;

var roundNum = 4;
var roundName = "Miami Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg";

var sessionsData = [

    // 2026-05-01 FRI
    ["F2 Practice 1",   new Date(1777644000 * SECS),  45 * MINS],
    ["F1 Practice 1",   new Date(1777651200 * SECS),  90 * MINS],
    ["F1 Sprint Qual",  new Date(1777667400 * SECS),  60 * MINS],

    // 2026-05-02 SAT
    ["F2 Race 1",       new Date(1777730400 * SECS),  45 * MINS],
    ["F1 Sprint",       new Date(1777737600 * SECS),  90 * MINS],
    ["F1 Qualifying",   new Date(1777752000 * SECS),  60 * MINS],

    // 2026-05-03 SUN
    ["F2 Race 2",       new Date(1777825800 * SECS),  60 * MINS],
    ["F1 Race",         new Date(1777838400 * SECS), 180 * MINS]
];
