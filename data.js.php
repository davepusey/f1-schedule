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

var roundNum = 14;
var roundName = "Hungarian Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg";

var sessionsData = [

    // 2025-08-01 FRI
    ["F3 Practice",     new Date(1754034900 * SECS),  45 * MINS],
    ["F2 Practice",     new Date(1754039100 * SECS),  45 * MINS],
    ["F1 Practice 1",   new Date(1754047800 * SECS),  60 * MINS],
    ["F3 Qualifying",   new Date(1754053200 * SECS),  30 * MINS],
    ["F2 Qualifying",   new Date(1754056500 * SECS),  30 * MINS],
    ["F1 Practice 2",   new Date(1754060400 * SECS),  60 * MINS],
    ["PSC Practice",    new Date(1754065500 * SECS),  45 * MINS],

    // 2025-08-02 SAT
    ["F3 Race 1",       new Date(1754121900 * SECS),  40 * MINS],
    ["PSC Qual",        new Date(1754126400 * SECS),  30 * MINS],
    ["F1 Practice 3",   new Date(1754130600 * SECS),  60 * MINS],
    ["F2 Race 1",       new Date(1754136900 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1754143200 * SECS),  60 * MINS],

    // 2025-08-03 SUN
    ["F3 Race 2",       new Date(1754202600 * SECS),  45 * MINS],
    ["F2 Race 2",       new Date(1754208000 * SECS),  60 * MINS],
    ["PSC Race",        new Date(1754214300 * SECS),  30 * MINS],
    ["F1 Race",         new Date(1754226000 * SECS), 180 * MINS]
];
