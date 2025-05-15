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

var roundNum = 7;
var roundName = "San Marino Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg";

var sessionsData = [

    // 2025-05-16 FRI
    ["F3 Practice",     new Date(1747382100 * SECS),  45 * MINS],
    ["F2 Practice",     new Date(1747386300 * SECS),  45 * MINS],
    ["F1 Practice 1",   new Date(1747395000 * SECS),  60 * MINS],
    ["F3 Qualifying",   new Date(1747400700 * SECS),  30 * MINS],
    ["F2 Qualifying",   new Date(1747404000 * SECS),  30 * MINS],
    ["F1 Practice 2",   new Date(1747407600 * SECS),  60 * MINS],
    ["PSC Practice",    new Date(1747413000 * SECS),  45 * MINS],

    // 2025-05-17 SAT
    ["F3 Race 1",       new Date(1747469100 * SECS),  40 * MINS],
    ["PSC Qual",        new Date(1747473600 * SECS),  30 * MINS],
    ["F1 Practice 3",   new Date(1747477800 * SECS),  60 * MINS],
    ["F2 Race 1",       new Date(1747484100 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1747490400 * SECS),  60 * MINS],

    // 2025-05-18 SUN
    ["F3 Race 2",       new Date(1747549800 * SECS),  45 * MINS],
    ["F2 Race 2",       new Date(1747555200 * SECS),  60 * MINS],
    ["PSC Race",        new Date(1747561500 * SECS),  30 * MINS],
    ["F1 Race",         new Date(1747573200 * SECS), 180 * MINS]
];