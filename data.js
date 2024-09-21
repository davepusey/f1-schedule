const dayText = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const SECS = 1000;
const MINS = 60 * SECS;
const HOURS = 60 * MINS;
const DAYS = 24 * HOURS;

//----------------------------------------------------------------------------------------------------------------------

var seasonYear = 2024;

var roundNum = 19;
var roundName = "United States Grand Prix";
var roundFlag = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg";

var sessionsData = [

    // 2024-10-18 FRI
    ["F1 Practice 1",   new Date(1729272600 * SECS),  60 * MINS],
    ["F1 Sprint Qual",  new Date(1729287000 * SECS),  60 * MINS],

    // 2024-10-19 SAT
    ["F1 Sprint",       new Date(1729360800 * SECS),  90 * MINS],
    ["F1 Qualifying",   new Date(1729375200 * SECS),  60 * MINS],

    // 2024-10-20 SUN
    ["F1 Race",         new Date(1729450800 * SECS), 180 * MINS]
];