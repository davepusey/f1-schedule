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

var roundNum = 3;
var roundName = "Japanese Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg";

var sessionsData = [

    // 2026-03-27 FRI
    ["F1 Practice 1",   new Date(1774578600 * SECS),  60 * MINS],
    ["F1 Practice 2",   new Date(1774591200 * SECS),  60 * MINS],

    // 2026-03-28 SAT
    ["F1 Practice 3",   new Date(1774665000 * SECS),  60 * MINS],
    ["F1 Qualifying",   new Date(1774677600 * SECS),  60 * MINS],

    // 2026-03-29 SUN
    ["F1 Race",         new Date(1774760400 * SECS), 180 * MINS]
];
