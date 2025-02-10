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

var roundNum = 0;
var roundName = "Bahrain Test";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg";

var sessionsData = [

    // 2025-02-26 WED
    ["Day 1 AM",        new Date(1740553200 * SECS), 240 * MINS],
    ["Day 1 PM",        new Date(1740571200 * SECS), 300 * MINS],

    // 2025-02-27 THU
    ["Day 2 AM",        new Date(1740639600 * SECS), 240 * MINS],
    ["Day 2 PM",        new Date(1740657600 * SECS), 240 * MINS],

    // 2025-02-28 FRI
    ["Day 3 AM",        new Date(1740726000 * SECS), 240 * MINS],
    ["Day 3 PM",        new Date(1740744000 * SECS), 240 * MINS]
];
