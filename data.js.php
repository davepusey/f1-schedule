<?php
header("Content-Type: application/javascript");
?>

const dayText = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const SECS = 1000;
const MINS = 60 * SECS;
const HOURS = 60 * MINS;
const DAYS = 24 * HOURS;

//----------------------------------------------------------------------------------------------------------------------

var seasonYear = 2026;

var roundNum = 1;
var roundName = "Australian Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg";

var sessionsData = [

    // 2026-03-05 THU
    ["SC Race 1",       new Date(1772690100 * SECS),  40 * MINS],
    ["F3 Practice",     new Date(1772747400 * SECS),  45 * MINS],
    ["F2 Practice",     new Date(1772751600 * SECS),  45 * MINS],

    // 2026-03-06 FRI
    ["F1 Practice 1",   new Date(1772760600 * SECS),  60 * MINS],
    ["F3 Qualifying",   new Date(1772766000 * SECS),  30 * MINS],
    ["F2 Qualifying",   new Date(1772769300 * SECS),  30 * MINS],
    ["F1 Practice 2",   new Date(1772773200 * SECS),  60 * MINS],
    ["SC Race 2",       new Date(1772778300 * SECS),  40 * MINS],

    // 2026-03-07 SAT
    ["F3 Race 1",       new Date(1772842500 * SECS),  40 * MINS],
    ["F1 Practice 3",   new Date(1772847000 * SECS),  60 * MINS],
    ["F2 Race 1",       new Date(1772853000 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1772859600 * SECS),  60 * MINS],
    ["SC Race 3",       new Date(1772865300 * SECS),  40 * MINS],
    ["F3 Race 2",       new Date(1772920200 * SECS),  45 * MINS],
    ["SC Race 4",       new Date(1772925000 * SECS),  35 * MINS],

    // 2026-03-08 SUN
    ["F2 Race 2",       new Date(1772929500 * SECS),  60 * MINS],
    ["F1 Race",         new Date(1772942400 * SECS), 180 * MINS]
];
