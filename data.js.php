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

var roundNum = 8;
var roundName = "Monaco Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg";

var sessionsData = [

    // 2025-05-22 THU
    ["F3 Practice",     new Date(1747912200 * SECS),  45 * MINS],
    ["F2 Practice",     new Date(1747918800 * SECS),  45 * MINS],
    ["PSC Practice",    new Date(1747924200 * SECS),  45 * MINS],

    // 2025-05-23 FRI
    ["F3 Qualifying A", new Date(1747991100 * SECS),  16 * MINS],
    ["F3 Qualifying B", new Date(1747992540 * SECS),  16 * MINS],
    ["F1 Practice 1",   new Date(1747999800 * SECS),  60 * MINS],
    ["F2 Qualifying A", new Date(1748005800 * SECS),  16 * MINS],
    ["F2 Qualifying B", new Date(1748007240 * SECS),  16 * MINS],
    ["F1 Practice 2",   new Date(1748012400 * SECS),  60 * MINS],
    ["PSC Qual",        new Date(1748018700 * SECS),  30 * MINS],

    // 2025-05-24 SAT
    ["F3 Race 1",       new Date(1748076300 * SECS),  40 * MINS],
    ["F1 Practice 3",   new Date(1748082600 * SECS),  60 * MINS],
    ["F2 Race 1",       new Date(1748088900 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1748095200 * SECS),  60 * MINS],

    // 2025-05-25 SUN
    ["F3 Race 2",       new Date(1748152800 * SECS),  45 * MINS],
    ["F2 Race 2",       new Date(1748158800 * SECS),  60 * MINS],
    ["PSC Race",        new Date(1748167200 * SECS),  30 * MINS],
    ["F1 Race",         new Date(1748178000 * SECS), 180 * MINS]
];
