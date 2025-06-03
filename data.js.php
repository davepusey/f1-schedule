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

var roundNum = 10;
var roundName = "Canadian Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg";

var sessionsData = [

    // 2025-06-13 FRI
    ["F1A Practice",    new Date(1749827100 * SECS),  40 * MINS],
    ["F1 Practice 1",   new Date(1749835800 * SECS),  60 * MINS],
    ["F1 Practice 2",   new Date(1749848400 * SECS),  60 * MINS],
    ["F1A Qualifying",  new Date(1749853800 * SECS),  30 * MINS],

    // 2025-06-14 SAT
    ["F1A Race 1",      new Date(1749906900 * SECS),  30 * MINS],
    ["F1 Practice 3",   new Date(1749918600 * SECS),  60 * MINS],
    ["F1A Race 2",      new Date(1749927000 * SECS),  30 * MINS],
    ["F1 Qualifying",   new Date(1749931200 * SECS),  60 * MINS],

    // 2025-06-15 SUN
    ["F1A Race 3",      new Date(1749999300 * SECS),  30 * MINS],
    ["F1 Race",         new Date(1750010400 * SECS), 180 * MINS]
];
