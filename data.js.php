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

var roundNum = 2;
var roundName = "Chinese Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg";

var sessionsData = [

    // 2026-03-13 FRI
    ["F1A Practice",    new Date(1773364200 * SECS),  40 * MINS],
    ["F1 Practice 1",   new Date(1773372600 * SECS),  60 * MINS],
    ["F1A Qualifying",  new Date(1773381900 * SECS),  30 * MINS],
    ["F1 Sprint Qual",  new Date(1773387000 * SECS),  60 * MINS],

    // 2026-03-14 SAT
    ["F1 Sprint",       new Date(1773457200 * SECS),  90 * MINS],
    ["F1A Race 1",      new Date(1773467100 * SECS),  30 * MINS],
    ["F1 Qualifying",   new Date(1773471600 * SECS),  60 * MINS],

    // 2026-03-15 SUN
    ["F1A Race 2",      new Date(1773542400 * SECS),  30 * MINS],
    ["F1 Race",         new Date(1773558000 * SECS), 180 * MINS]
];
