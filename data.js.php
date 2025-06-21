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

var roundNum = 11;
var roundName = "Austrian Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg";

var sessionsData = [

    // 2025-06-27 FRI
    ["F3 Practice",     new Date(1751010900 * SECS),  45 * MINS],
    ["F2 Practice",     new Date(1751015100 * SECS),  45 * MINS],
    ["F1 Practice 1",   new Date(1751023800 * SECS),  60 * MINS],
    ["F3 Qualifying",   new Date(1751029200 * SECS),  30 * MINS],
    ["F2 Qualifying",   new Date(1751032500 * SECS),  30 * MINS],
    ["F1 Practice 2",   new Date(1751036400 * SECS),  60 * MINS],
    ["PSC Practice",    new Date(1751042100 * SECS),  45 * MINS],

    // 2025-06-28 SAT
    ["F3 Race 1",       new Date(1751097900 * SECS),  40 * MINS],
    ["PSC Qual",        new Date(1751102400 * SECS),  30 * MINS],
    ["F1 Practice 3",   new Date(1751106600 * SECS),  60 * MINS],
    ["F2 Race 1",       new Date(1751112900 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1751119200 * SECS),  60 * MINS],

    // 2025-06-29 SUN
    ["F3 Race 2",       new Date(1751178600 * SECS),  45 * MINS],
    ["F2 Race 2",       new Date(1751184000 * SECS),  60 * MINS],
    ["PSC Race",        new Date(1751190300 * SECS),  30 * MINS],
    ["F1 Race",         new Date(1751202000 * SECS), 180 * MINS]
];
