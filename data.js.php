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

var roundNum = 13;
var roundName = "Belgian Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg";

var sessionsData = [

    // 2025-07-25 FRI
    ["F3 Practice",     new Date(1753426500 * SECS),  45 * MINS],
    ["F2 Practice",     new Date(1753430700 * SECS),  45 * MINS],
    ["F1 Practice 1",   new Date(1753439400 * SECS),  60 * MINS],
    ["F3 Qualifying",   new Date(1753444800 * SECS),  30 * MINS],
    ["F2 Qualifying",   new Date(1753448100 * SECS),  30 * MINS],
    ["PSC Practice",    new Date(1753459200 * SECS),  45 * MINS],

    // 2025-07-26 SAT
    ["F3 Race 1",       new Date(1753514100 * SECS),  40 * MINS],
    ["PSC Qual",        new Date(1753518300 * SECS),  30 * MINS],
    ["F2 Race 1",       new Date(1753530300 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1753538400 * SECS),  60 * MINS],

    // 2025-07-27 SUN
    ["F3 Race 2",       new Date(1753597800 * SECS),  45 * MINS],
    ["F2 Race 2",       new Date(1753603200 * SECS),  60 * MINS],
    ["PSC Race",        new Date(1753609500 * SECS),  30 * MINS],
    ["F1 Race",         new Date(1753621200 * SECS), 180 * MINS]
];
