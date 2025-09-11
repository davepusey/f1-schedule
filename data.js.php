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

var roundNum = 17;
var roundName = "Azerbaijan Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg";

var sessionsData = [

    // 2025-09-19 FRI
    ["F2 Practice",     new Date(1758261600 * SECS),  45 * MINS],
    ["F1 Practice 1",   new Date(1758270600 * SECS),  60 * MINS],
    ["F2 Qualifying",   new Date(1758276000 * SECS),  30 * MINS],
    ["F1 Practice 2",   new Date(1758283200 * SECS),  60 * MINS],

    // 2025-09-20 SAT
    ["F1 Practice 3",   new Date(1758357000 * SECS),  60 * MINS],
    ["F2 Race 1",       new Date(1758363300 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1758369600 * SECS),  60 * MINS],

    // 2025-09-21 SUN
    ["F2 Race 2",       new Date(1758438000 * SECS),  60 * MINS],
    ["F1 Race",         new Date(1758452400 * SECS), 180 * MINS]
];
