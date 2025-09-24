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

var roundNum = 18;
var roundName = "Singapore Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg";

var sessionsData = [

    // 2025-10-03 FRI
    ["F1A Practice",    new Date(1759475400 * SECS),  40 * MINS],
    ["F1 Practice 1",   new Date(1759483800 * SECS),  60 * MINS],
    ["F1A Qualifying",  new Date(1759489200 * SECS),  30 * MINS],
    ["F1 Practice 2",   new Date(1759496400 * SECS),  60 * MINS],

    // 2025-10-04 SAT
    ["F1A Race 1",      new Date(1759561200 * SECS),  30 * MINS],
    ["F1 Practice 3",   new Date(1759570200 * SECS),  60 * MINS],
    ["F1 Qualifying",   new Date(1759582800 * SECS),  60 * MINS],

    // 2025-10-05 SUN
    ["F1A Race 2",      new Date(1759649100 * SECS),  30 * MINS],
    ["F1 Race",         new Date(1759665600 * SECS), 180 * MINS]
];
