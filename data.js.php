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

var roundNum = 2;
var roundName = "Chinese Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg";

var sessionsData = [

    // 2025-03-21 FRI
    ["F1A Practice",    new Date(1742519400 * SECS),  40 * MINS],
    ["F1 Practice 1",   new Date(1742527800 * SECS),  60 * MINS],
    ["F1A Qualifying",  new Date(1742537100 * SECS),  30 * MINS],
    ["F1 Sprint Qual",  new Date(1742542200 * SECS),  60 * MINS],

    // 2025-03-22 SAT
    ["F1 Sprint",       new Date(1742612400 * SECS),  90 * MINS],
    ["F1A Race 1",      new Date(1742622600 * SECS),  30 * MINS],
    ["F1 Qualifying",   new Date(1742626800 * SECS),  60 * MINS],

    // 2025-03-23 SUN
    ["F1A Race 2",      new Date(1742697900 * SECS),  30 * MINS],
    ["F1 Race",         new Date(1742713200 * SECS), 180 * MINS]
];
