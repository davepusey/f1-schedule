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

var roundNum = 1;
var roundName = "Australian Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg";

var sessionsData = [

    // 2025-03-13 THU
    ["SC Race 1",       new Date(1741848300 * SECS),  40 * MINS],
    ["F3 Practice",     new Date(1741902600 * SECS),  45 * MINS],
    ["F2 Practice",     new Date(1741906800 * SECS),  45 * MINS],

    // 2025-03-14 FRI
    ["F1 Practice 1",   new Date(1741915800 * SECS),  60 * MINS],
    ["F3 Qualifying",   new Date(1741921200 * SECS),  30 * MINS],
    ["SC Race 2",       new Date(1741923900 * SECS),  40 * MINS],
    ["F1 Practice 2",   new Date(1741928400 * SECS),  60 * MINS],
    ["F2 Qualifying",   new Date(1741933800 * SECS),  30 * MINS],

    // 2025-03-15 SAT
    ["F3 Race 1",       new Date(1741997700 * SECS),  40 * MINS],
    ["F1 Practice 3",   new Date(1742002200 * SECS),  60 * MINS],
    ["F2 Race 1",       new Date(1742008500 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1742014800 * SECS),  60 * MINS],
    ["SC Race 3",       new Date(1742020500 * SECS),  40 * MINS],
    ["F3 Race 2",       new Date(1742076000 * SECS),  45 * MINS],
    ["SC Race 4",       new Date(1742080800 * SECS),  30 * MINS],

    // 2025-03-16 SUN
    ["F2 Race 2",       new Date(1742085000 * SECS),  60 * MINS],
    ["F1 Race",         new Date(1742097600 * SECS), 180 * MINS]
];
