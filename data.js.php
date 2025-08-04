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

var roundNum = 15;
var roundName = "Dutch Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg";

var sessionsData = [

    // 2025-08-29 FRI
    ["F1A Practice 1",  new Date(1756455000 * SECS),  40 * MINS],
    ["F1 Practice 1",   new Date(1756463400 * SECS),  60 * MINS],
    ["PSC Practice",    new Date(1756468800 * SECS),  45 * MINS],
    ["F1 Practice 2",   new Date(1756476000 * SECS),  60 * MINS],
    ["F1A Practice 2",  new Date(1756481400 * SECS),  40 * MINS],

    // 2025-08-30 SAT
    ["F1A Qualifying",  new Date(1756542300 * SECS),  30 * MINS],
    ["F1 Practice 3",   new Date(1756546200 * SECS),  60 * MINS],
    ["PSC Qual",        new Date(1756551600 * SECS),  30 * MINS],
    ["F1 Qualifying",   new Date(1756558800 * SECS),  60 * MINS],
    ["F1A Race 1",      new Date(1756566300 * SECS),  30 * MINS],

    // 2025-08-31 SUN
    ["F1A Race 2",      new Date(1756629600 * SECS),  30 * MINS],
    ["PSC Race",        new Date(1756634100 * SECS),  30 * MINS],
    ["F1 Race",         new Date(1756645200 * SECS), 180 * MINS]
];
