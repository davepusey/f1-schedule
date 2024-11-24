const dayText = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const SECS = 1000;
const MINS = 60 * SECS;
const HOURS = 60 * MINS;
const DAYS = 24 * HOURS;

//----------------------------------------------------------------------------------------------------------------------

var seasonYear = 2024;

var roundNum = 23;
var roundName = "Qatar Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg";

var sessionsData = [

    // 2024-11-29 FRI
    ["F1A Practice 1",  new Date(1732874400 * SECS),  40 * MINS],
    ["F2 Practice",     new Date(1732878300 * SECS),  45 * MINS],
    ["F1 Practice 1",   new Date(1732887000 * SECS),  60 * MINS],
    ["F1A Practice 2",  new Date(1732892400 * SECS),  40 * MINS],
    ["F2 Qualifying",   new Date(1732896600 * SECS),  30 * MINS],
    ["F1 Sprint Qual",  new Date(1732901400 * SECS),  60 * MINS],

    // 2024-11-30 SAT
    ["F1A Qualifying",  new Date(1732969200 * SECS),  30 * MINS],
    ["F1 Sprint",       new Date(1732975200 * SECS),  90 * MINS],
    ["F2 Race 1",       new Date(1732983600 * SECS),  45 * MINS],
    ["F1 Qualifying",   new Date(1732989600 * SECS),  60 * MINS],
    ["F1A Race 1",      new Date(1732997100 * SECS),  30 * MINS],

    // 2024-12-01 SUN
    ["F2 Race 2",       new Date(1733056500 * SECS),  60 * MINS],
    ["F1 Race",         new Date(1733068800 * SECS), 180 * MINS]
];
