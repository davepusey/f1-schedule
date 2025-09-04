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

var roundNum = 16;
var roundName = "Italian Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg";

var sessionsData = [

    // 2025-09-05 FRI
    ["F3 Practice",     new Date(1757057700 * SECS),  45 * MINS],
    ["F2 Practice",     new Date(1757062800 * SECS),  45 * MINS],
    ["F1 Practice 1",   new Date(1757071800 * SECS),  60 * MINS],
    ["F3 Qual A",       new Date(1757077200 * SECS),  10 * MINS],
    ["F3 Qual B",       new Date(1757078400 * SECS),  10 * MINS],
    ["F2 Qualifying",   new Date(1757080500 * SECS),  30 * MINS],
    ["F1 Practice 2",   new Date(1757084400 * SECS),  60 * MINS],
    ["PSC Practice",    new Date(1757089800 * SECS),  45 * MINS],

    // 2025-09-06 SAT
    ["F3 Race 1",       new Date(1757142900 * SECS),  40 * MINS],
    ["PSC Qual",        new Date(1757147700 * SECS),  30 * MINS],
    ["F1 Practice 3",   new Date(1757154600 * SECS),  60 * MINS],
    ["F2 Race 1",       new Date(1757160900 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1757167200 * SECS),  60 * MINS],

    // 2025-09-07 SUN
    ["F3 Race 2",       new Date(1757225700 * SECS),  45 * MINS],
    ["F2 Race 2",       new Date(1757231100 * SECS),  60 * MINS],
    ["PSC Race",        new Date(1757238300 * SECS),  30 * MINS],
    ["F1 Race",         new Date(1757250000 * SECS), 180 * MINS]
];
