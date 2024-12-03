const dayText = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const SECS = 1000;
const MINS = 60 * SECS;
const HOURS = 60 * MINS;
const DAYS = 24 * HOURS;

//----------------------------------------------------------------------------------------------------------------------

var seasonYear = 2024;

var roundNum = 24;
var roundName = "Abu Dhabi Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg";

var sessionsData = [

    // 2024-12-06 FRI
    ["F1A Practice",    new Date(1733464200 * SECS),  40 * MINS],
    ["F2 Practice",     new Date(1733468700 * SECS),  45 * MINS],
    ["F1 Practice 1",   new Date(1733477400 * SECS),  60 * MINS],
    ["F2 Qualifying",   new Date(1733482800 * SECS),  30 * MINS],
    ["F1 Practice 2",   new Date(1733490000 * SECS),  60 * MINS],
    ["F1A Qualifying",  new Date(1733495700 * SECS),  30 * MINS],

    // 2024-12-07 SAT
    ["F1A Race 1",      new Date(1733559300 * SECS),  30 * MINS],
    ["F1 Practice 3",   new Date(1733567400 * SECS),  60 * MINS],
    ["F2 Race 1",       new Date(1733573700 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1733580000 * SECS),  60 * MINS],
    ["F1A Race 2",      new Date(1733588100 * SECS),  30 * MINS],

    // 2024-12-08 SUN
    ["F1A Race 3",      new Date(1733642100 * SECS),  30 * MINS],
    ["F2 Race 2",       new Date(1733649900 * SECS),  60 * MINS],
    ["F1 Race",         new Date(1733662800 * SECS), 180 * MINS]
];
