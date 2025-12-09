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

var roundNum = 0;
var roundName = "Pre-Season Testing";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/0/0d/F1_%28registered_trademark%29.svg";

var sessionsData = [

    // TEST 1

    // 2025-01-26 MON
    ["T1 Day 1 AM",        new Date(Date.UTC(2026, 0, 26, 7, 0, 0)), 240 * MINS],
    ["T1 Day 1 PM",        new Date(Date.UTC(2026, 0, 26, 12, 0, 0)), 240 * MINS],

    // 2025-01-27 TUE
    ["T1 Day 2 AM",        new Date(Date.UTC(2026, 0, 27, 7, 0, 0)), 240 * MINS],
    ["T1 Day 2 PM",        new Date(Date.UTC(2026, 0, 27, 12, 0, 0)), 240 * MINS],

    // 2025-01-28 WED
    ["T1 Day 3 AM",        new Date(Date.UTC(2026, 0, 28, 7, 0, 0)), 240 * MINS],
    ["T1 Day 3 PM",        new Date(Date.UTC(2026, 0, 28, 12, 0, 0)), 240 * MINS],

    // 2025-01-29 THU
    ["T1 Day 4 AM",        new Date(Date.UTC(2026, 0, 29, 7, 0, 0)), 240 * MINS],
    ["T1 Day 4 PM",        new Date(Date.UTC(2026, 0, 29, 12, 0, 0)), 240 * MINS],

    // 2025-01-30 FRI
    ["T1 Day 5 AM",        new Date(Date.UTC(2026, 0, 30, 7, 0, 0)), 240 * MINS],
    ["T1 Day 5 PM",        new Date(Date.UTC(2026, 0, 30, 12, 0, 0)), 240 * MINS],

    // TEST 2

    // 2025-02-11 WED
    ["T2 Day 1 AM",        new Date(Date.UTC(2026, 1, 11, 7, 0, 0)), 240 * MINS],
    ["T2 Day 1 PM",        new Date(Date.UTC(2026, 1, 11, 12, 0, 0)), 240 * MINS],

    // 2025-02-12 THU
    ["T2 Day 2 AM",        new Date(Date.UTC(2026, 1, 12, 7, 0, 0)), 240 * MINS],
    ["T2 Day 2 PM",        new Date(Date.UTC(2026, 1, 12, 12, 0, 0)), 240 * MINS],

    // 2025-02-13 FRI
    ["T2 Day 3 AM",        new Date(Date.UTC(2026, 1, 13, 7, 0, 0)), 240 * MINS],
    ["T2 Day 3 PM",        new Date(Date.UTC(2026, 1, 13, 12, 0, 0)), 240 * MINS],

    // TEST 3

    // 2025-02-18 WED
    ["T3 Day 1 AM",        new Date(Date.UTC(2026, 1, 18, 7, 0, 0)), 240 * MINS],
    ["T3 Day 1 PM",        new Date(Date.UTC(2026, 1, 18, 12, 0, 0)), 240 * MINS],

    // 2025-02-19 THU
    ["T3 Day 2 AM",        new Date(Date.UTC(2026, 1, 19, 7, 0, 0)), 240 * MINS],
    ["T3 Day 2 PM",        new Date(Date.UTC(2026, 1, 19, 12, 0, 0)), 240 * MINS],

    // 2025-02-20 FRI
    ["T3 Day 3 AM",        new Date(Date.UTC(2026, 1, 20, 7, 0, 0)), 240 * MINS],
    ["T3 Day 3 PM",        new Date(Date.UTC(2026, 1, 20, 12, 0, 0)), 240 * MINS]
];
