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

var roundNum = 9;
var roundName = "Spanish Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_España.svg";

var sessionsData = [

    // 2025-05-30 FRI
    ["F3 Practice",     new Date(1748591700 * SECS),  45 * MINS],
    ["F2 Practice",     new Date(1748595900 * SECS),  45 * MINS],
    ["F1 Practice 1",   new Date(1748604600 * SECS),  60 * MINS],
    ["F3 Qualifying",   new Date(1748610000 * SECS),  30 * MINS],
    ["F2 Qualifying",   new Date(1748613300 * SECS),  30 * MINS],
    ["F1 Practice 2",   new Date(1748617200 * SECS),  60 * MINS],
    ["PSC Practice",    new Date(1748622600 * SECS),  45 * MINS],

    // 2025-05-31 SAT
    ["F3 Race 1",       new Date(1748678700 * SECS),  40 * MINS],
    ["PSC Qual",        new Date(1748683200 * SECS),  30 * MINS],
    ["F1 Practice 3",   new Date(1748687400 * SECS),  60 * MINS],
    ["F2 Race 1",       new Date(1748693700 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1748700000 * SECS),  60 * MINS],

    // 2025-06-01 SUN
    ["F3 Race 2",       new Date(1748759400 * SECS),  45 * MINS],
    ["F2 Race 2",       new Date(1748764800 * SECS),  60 * MINS],
    ["PSC Race",        new Date(1748771100 * SECS),  30 * MINS],
    ["F1 Race",         new Date(1748782800 * SECS), 180 * MINS]
];
