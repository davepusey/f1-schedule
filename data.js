const dayText = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const SECS = 1000;
const MINS = 60 * SECS;
const HOURS = 60 * MINS;
const DAYS = 24 * HOURS;

var roundNameBAH = "Bahrain Grand Prix";
var roundFlagBAH = "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg";

var roundNameSAU = "Saudi Arabian Grand Prix";
var roundFlagSAU = "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg";

var roundNameAUS = "Australian Grand Prix";
var roundFlagAUS = "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg";

var roundNameSAN = "San Marino Grand Prix";
var roundFlagSAN = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg";

var roundNameSPA = "Spanish Grand Prix";
var roundFlagSPA = "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg";

var roundNameMON = "Monaco Grand Prix";
var roundFlagMON = "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg";

var roundNameAZE = "Azerbaijan Grand Prix";
var roundFlagAZE = "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg";

var roundNameCAN = "Canadian Grand Prix";
var roundFlagCAN = "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg";

var roundNameGB  = "British Grand Prix";
var roundFlagGB  = "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg";

var roundNameAUT = "Austrian Grand Prix";
var roundFlagAUT = "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg";

var roundNameFRA = "French Grand Prix";
var roundFlagFRA = "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg";

var roundNameHUN = "Hungarian Grand Prix";
var roundFlagHUN = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg";

var roundNameBEL = "Belgian Grand Prix";
var roundFlagBEL = "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg";

var roundNameNET = "Dutch Grand Prix";
var roundFlagNET = "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg";

var roundNameITA = "Italian Grand Prix";
var roundFlagITA = "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg";

var roundNameSIN = "Singapore Grand Prix";
var roundFlagSIN = "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg";

var roundNameJAP = "Japanese Grand Prix";
var roundFlagJAP = "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg";

var roundNameUSA = "United States Grand Prix";
var roundFlagUSA = "https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg";

var roundNameMEX = "Mexican Grand Prix";
var roundFlagMEX = "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg";

var roundNameBRA = "Brazilian Grand Prix";
var roundFlagBRA = "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg";

var roundNameABU = "Abu Dhabi Grand Prix";
var roundFlagABU = "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg";

var roundNameQAT = "Qatar Grand Prix";
var roundFlagQAT = "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg";

var roundNameCHI = "Chinese Grand Prix";
var roundFlagCHI = "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg";

var roundNameRUS = "Russian Grand Prix";
var roundFlagRUS = "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg";

var roundNameVIE = "Vietnamese Grand Prix";
var roundFlagVIE = "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg";

var roundNameMIA = "Miami Grand Prix";
var roundFlagMIA = roundFlagUSA;

var roundNameLAS = "Las Vegas Grand Prix";
var roundFlagLAS = roundFlagUSA;

//----------------------------------------------------------------------------------------------------------------------

var seasonYear = 2024;

var roundNum = 0;
var roundName = "Bahrain Test";
var roundFlag = roundFlagBAH;

var sessionsData = [

	// 2024-02-21 WED
	["Day 1 AM",       new Date("2024-02-21T07:00:00Z"), 240 * MINS],
	["Day 1 PM",       new Date("2024-02-21T12:00:00Z"), 240 * MINS],

	// 2024-02-22 THU
	["Day 2 AM",       new Date("2024-02-22T07:00:00Z"), 180 * MINS],
	["Day 2 PM",       new Date("2024-02-22T11:00:00Z"), 310 * MINS],

	// 2024-02-23 FRI
	["Day 3",          new Date("2024-02-23T07:00:00Z"), 550 * MINS]
];

roundNum++;
roundName = roundNameBAH;
roundFlag = roundFlagBAH;

sessionsData = [

	// 2024-02-29 THU
	["F3 Practice",    new Date("2024-02-29T07:55:00Z"),  45 * MINS],
	["F2 Practice",    new Date("2024-02-29T09:05:00Z"),  45 * MINS],
	["F1 Practice 1",  new Date("2024-02-29T11:30:00Z"),  60 * MINS],
	["F3 Qualifying",  new Date("2024-02-29T13:00:00Z"),  30 * MINS],
	["F2 Qualifying",  new Date("2024-02-29T13:55:00Z"),  30 * MINS],
	["F1 Practice 2",  new Date("2024-02-29T15:00:00Z"),  60 * MINS],

	// 2024-03-01 FRI
	["F3 Race 1",      new Date("2024-03-01T10:15:00Z"),  40 * MINS],
	["F1 Practice 3",  new Date("2024-03-01T12:30:00Z"),  60 * MINS],
	["F2 Race 1",      new Date("2024-03-01T14:15:00Z"),  45 * MINS],
	["F1 Qualifying",  new Date("2024-03-01T16:00:00Z"),  60 * MINS],

	// 2024-03-02 SAT
	["F3 Race 2",      new Date("2024-03-02T09:00:00Z"),  45 * MINS],
	["F2 Race 2",      new Date("2024-03-02T10:30:00Z"),  60 * MINS],
	["F1 Race",        new Date("2024-03-02T15:00:00Z"), 180 * MINS]
];
