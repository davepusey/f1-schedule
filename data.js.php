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

var roundNum = 12;
var roundName = "British Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg";

var sessionsData = [

    // 2025-07-04 FRI
    ["F3 Practice",     new Date(1751615100 * SECS),  45 * MINS],
    ["F2 Practice",     new Date(1751619600 * SECS),  45 * MINS],
    ["F1 Practice 1",   new Date(1751628600 * SECS),  60 * MINS],
    ["F3 Qualifying",   new Date(1751634000 * SECS),  30 * MINS],
    ["F2 Qualifying",   new Date(1751637300 * SECS),  30 * MINS],
    ["F1 Practice 2",   new Date(1751641200 * SECS),  60 * MINS],
    ["F4 Practice",     new Date(1751647500 * SECS),  45 * MINS],

    // 2025-07-05 SAT
    ["F4 Qualifying",   new Date(1751699400 * SECS),  25 * MINS],
    ["F3 Race 1",       new Date(1751703300 * SECS),  40 * MINS],
    ["F1 Practice 3",   new Date(1751711400 * SECS),  60 * MINS],
    ["F2 Race 1",       new Date(1751717700 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1751724000 * SECS),  60 * MINS],
    ["F4 Race 1",       new Date(1751731200 * SECS),  25 * MINS],

    // 2025-07-06 SUN
    ["F4 Race 2",       new Date(1751786400 * SECS),  25 * MINS],
    ["F3 Race 2",       new Date(1751790600 * SECS),  45 * MINS],
    ["F2 Race 2",       new Date(1751796300 * SECS),  60 * MINS],
    ["F1 Race",         new Date(1751810400 * SECS), 180 * MINS]
];
