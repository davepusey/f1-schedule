const dayText = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const SECS = 1000;
const MINS = 60 * SECS;
const HOURS = 60 * MINS;
const DAYS = 24 * HOURS;

//----------------------------------------------------------------------------------------------------------------------

var seasonYear = 2024;

var roundNum = 20;
var roundName = "Mexican Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg";

var sessionsData = [

    // 2024-10-25 FRI
    ["F1 Practice 1",   new Date(1729881000 * SECS),  60 * MINS],
    ["F1 Practice 2",   new Date(1729893600 * SECS),  90 * MINS],

    // 2024-10-26 SAT
    ["F1 Practice 3",   new Date(1729963800 * SECS),  60 * MINS],
    ["F1 Qualifying",   new Date(1729976400 * SECS),  60 * MINS],

    // 2024-10-27 SUN
    ["F1 Race",         new Date(1730059200 * SECS), 180 * MINS]
];
