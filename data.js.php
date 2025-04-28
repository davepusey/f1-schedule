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

var roundNum = 6;
var roundName = "Miami Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg";

var sessionsData = [

    // 2025-05-02 FRI
    ["F1A Practice 1",  new Date(1746194700 * SECS),  40 * MINS],
    ["F1 Practice 1",   new Date(1746203400 * SECS),  60 * MINS],
    ["F1A Practice 2",  new Date(1746213600 * SECS),  40 * MINS],
    ["F1 Sprint Qual",  new Date(1746217800 * SECS),  60 * MINS],

    // 2025-05-03 SAT
    ["F1A Qualifying",  new Date(1746282300 * SECS),  30 * MINS],
    ["F1 Sprint",       new Date(1746288000 * SECS),  90 * MINS],
    ["F1A Race 1",      new Date(1746298500 * SECS),  30 * MINS],
    ["F1 Qualifying",   new Date(1746302400 * SECS),  60 * MINS],

    // 2025-05-04 SUN
    ["F1A Race 2",      new Date(1746378300 * SECS),  30 * MINS],
    ["F1 Race",         new Date(1746388800 * SECS), 180 * MINS]
];
