const dayText = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const SECS = 1000;
const MINS = 60 * SECS;
const HOURS = 60 * MINS;
const DAYS = 24 * HOURS;

//----------------------------------------------------------------------------------------------------------------------

var seasonYear = 2024;

var roundNum = 22;
var roundName = "Las Vegas Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg";

var sessionsData = [

    // 2024-11-22 FRI
    ["F1 Practice 1",   new Date(1732242600 * SECS),  60 * MINS],
    ["F1 Practice 2",   new Date(1732255200 * SECS),  60 * MINS],

    // 2024-11-23 SAT
    ["F1 Practice 3",   new Date(1732329000 * SECS),  60 * MINS],
    ["F1 Qualifying",   new Date(1732341600 * SECS),  60 * MINS],

    // 2024-11-24 SUN
    ["F1 Race",         new Date(1732428000 * SECS), 180 * MINS]
];