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

var roundNum = 5;
var roundName = "Saudi Arabian Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg";

var sessionsData = [

    // 2025-04-18 FRI
    ["F2 Practice",     new Date(1744969500 * SECS),  45 * MINS],
    ["F1A Practice",    new Date(1744974300 * SECS),  40 * MINS],
    ["F1 Practice 1",   new Date(1744983000 * SECS),  60 * MINS],
    ["F2 Qualifying",   new Date(1744988400 * SECS),  30 * MINS],
    ["F1 Practice 2",   new Date(1744995600 * SECS),  60 * MINS],
    ["F1A Qualifying",  new Date(1745001000 * SECS),  30 * MINS],

    // 2025-04-19 SAT
    ["F1A Race 1",      new Date(1745065200 * SECS),  30 * MINS],
    ["F1 Practice 3",   new Date(1745069400 * SECS),  60 * MINS],
    ["F2 Race 1",       new Date(1745075700 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1745082000 * SECS),  60 * MINS],

    // 2025-04-20 SUN
    ["F1A Race 2",      new Date(1745150700 * SECS),  30 * MINS],
    ["F2 Race 2",       new Date(1745155500 * SECS),  60 * MINS],
    ["F1 Race",         new Date(1745168400 * SECS), 180 * MINS]
];
