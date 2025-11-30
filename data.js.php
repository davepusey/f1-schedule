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

var roundNum = 24;
var roundName = "Abu Dhabi Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg";

var sessionsData = [

    // 2025-12-05 FRI
    ["F2 Practice",     new Date(1764918300 * SECS),  45 * MINS],
    ["F1 Practice 1",   new Date(1764927000 * SECS),  60 * MINS],
    ["F2 Qualifying",   new Date(1764932400 * SECS),  30 * MINS],
    ["F1 Practice 2",   new Date(1764939600 * SECS),  60 * MINS],

    // 2025-12-06 SAT
    ["F1 Practice 3",   new Date(1765017000 * SECS),  60 * MINS],
    ["F2 Race 1",       new Date(1765023300 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1765029600 * SECS),  60 * MINS],

    // 2025-12-07 SUN
    ["F2 Race 2",       new Date(1765098900 * SECS),  60 * MINS],
    ["F1 Race",         new Date(1765112400 * SECS), 180 * MINS]
];
