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

var roundNum = 23;
var roundName = "Qatar Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg";

var sessionsData = [

    // 2025-11-28 FRI
    ["F2 Practice",     new Date(1764327900 * SECS),  45 * MINS],
    ["F1 Practice 1",   new Date(1764336600 * SECS),  60 * MINS],
    ["F2 Qualifying",   new Date(1764346200 * SECS),  30 * MINS],
    ["F1 Sprint Qual",  new Date(1764351000 * SECS),  60 * MINS],

    // 2025-11-29 SAT
    ["F1 Sprint",       new Date(1764424800 * SECS),  90 * MINS],
    ["F2 Race 1",       new Date(1764433200 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1764439200 * SECS),  60 * MINS],

    // 2025-11-30 SUN
    ["F2 Race 2",       new Date(1764504000 * SECS),  60 * MINS],
    ["F1 Race",         new Date(1764518400 * SECS), 180 * MINS]
];
