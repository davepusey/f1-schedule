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

var roundNum = 4;
var roundName = "Bahrain Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg";

var sessionsData = [

    // 2025-04-11 FRI
    ["F3 Practice",     new Date(1744358100 * SECS),  45 * MINS],
    ["F2 Practice",     new Date(1744362300 * SECS),  45 * MINS],
    ["F1 Practice 1",   new Date(1744371000 * SECS),  60 * MINS],
    ["F3 Qualifying",   new Date(1744376400 * SECS),  30 * MINS],
    ["F2 Qualifying",   new Date(1744379700 * SECS),  30 * MINS],
    ["F1 Practice 2",   new Date(1744383600 * SECS),  60 * MINS],

    // 2025-04-12 SAT
    ["F3 Race 1",       new Date(1744452900 * SECS),  40 * MINS],
    ["F1 Practice 3",   new Date(1744461000 * SECS),  60 * MINS],
    ["F2 Race 1",       new Date(1744467300 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1744473600 * SECS),  60 * MINS],

    // 2025-04-13 SUN
    ["F3 Race 2",       new Date(1744538100 * SECS),  45 * MINS],
    ["F2 Race 2",       new Date(1744543500 * SECS),  60 * MINS],
    ["F1 Race",         new Date(1744556400 * SECS), 180 * MINS]
];
