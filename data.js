const dayText = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const SECS = 1000;
const MINS = 60 * SECS;
const HOURS = 60 * MINS;
const DAYS = 24 * HOURS;

//----------------------------------------------------------------------------------------------------------------------

var seasonYear = 2024;

var roundNum = 21;
var roundName = "Brazilian Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg";

var sessionsData = [

    // 2024-11-01 FRI
    ["F1 Practice 1",   new Date(1730471400 * SECS),  60 * MINS],
    ["F1 Sprint Qual",  new Date(1730485800 * SECS),  60 * MINS],

    // 2024-11-02 SAT
    ["F1 Sprint",       new Date(1730556000 * SECS),  90 * MINS],

    // 2024-11-03 SUN
    ["F1 Qualifying",   new Date(1730629800 * SECS),  60 * MINS],
    ["F1 Race",         new Date(1730647800 * SECS), 180 * MINS]
];