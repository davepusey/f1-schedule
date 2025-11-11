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

var roundNum = 22;
var roundName = "Las Vegas Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg";

var sessionsData = [

    // 2025-11-21 FRI
    ["F1 Practice 1",   new Date(1763685000 * SECS),  60 * MINS],
    ["F1A Practice",    new Date(1763690400 * SECS),  40 * MINS],
    ["F1 Practice 2",   new Date(1763697600 * SECS),  60 * MINS],
    ["F1A Qualifying",  new Date(1763703000 * SECS),  30 * MINS],

    // 2025-11-22 SAT
    ["F1 Practice 3",   new Date(1763771400 * SECS),  60 * MINS],
    ["F1A Race 1",      new Date(1763777700 * SECS),  30 * MINS],
    ["F1 Qualifying",   new Date(1763784000 * SECS),  60 * MINS],

    // 2025-11-23 SUN
    ["F1A Race 2",      new Date(1763857200 * SECS),  30 * MINS],
    ["F1 Race",         new Date(1763870400 * SECS), 180 * MINS]
];
