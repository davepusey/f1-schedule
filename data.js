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

roundNum++;
roundName = roundNameSAU;
roundFlag = roundFlagSAU;

sessionsData = [

	// 2024-03-07 THU
	["F2 Practice",    new Date(1709805300 * SECS),  45 * MINS],
	["F1A Practice",   new Date(1709809500 * SECS),  40 * MINS],
	["F1 Practice 1",  new Date(1709818200 * SECS),  60 * MINS],
	["F2 Qualifying",  new Date(1709823600 * SECS),  30 * MINS],
	["F1 Practice 2",  new Date(1709830800 * SECS),  60 * MINS],
	["F1A Qualifying", new Date(1709836200 * SECS),  30 * MINS],

	// 2024-03-08 FRI
	["F1A Race 1",     new Date(1709899800 * SECS),  30 * MINS],
	["F1 Practice 3",  new Date(1709904600 * SECS),  60 * MINS],
	["F2 Race 1",      new Date(1709910600 * SECS),  45 * MINS],
	["F1 Qualifying",  new Date(1709917200 * SECS),  60 * MINS],

	// 2024-03-09 SAT
	["F1A Race 2",     new Date(1709985900 * SECS),  30 * MINS],
	["F2 Race 2",      new Date(1709990700 * SECS),  60 * MINS],
	["F1 Race",        new Date(1710003600 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameAUS;
roundFlag = roundFlagAUS;

sessionsData = [

	// 2024-03-21 THU
	["SC Race 1",      new Date(1711003800 * SECS),  40 * MINS],

	// 2024-03-22 FRI
	["F3 Practice",    new Date(1711057800 * SECS),  45 * MINS],
	["F2 Practice",    new Date(1711062000 * SECS),  45 * MINS],
	["F1 Practice 1",  new Date(1711071000 * SECS),  60 * MINS],
	["F3 Qualifying",  new Date(1711076400 * SECS),  30 * MINS],
	["SC Race 2",      new Date(1711079400 * SECS),  40 * MINS],
	["F1 Practice 2",  new Date(1711083600 * SECS),  60 * MINS],
	["F2 Qualifying",  new Date(1711089000 * SECS),  30 * MINS],

	// 2024-03-23 SAT
	["F3 Race 1",      new Date(1711152900 * SECS),  40 * MINS],
	["F1 Practice 3",  new Date(1711157400 * SECS),  60 * MINS],
	["F2 Race 1",      new Date(1711163700 * SECS),  45 * MINS],
	["F1 Qualifying",  new Date(1711170000 * SECS),  60 * MINS],
	["SC Race 3",      new Date(1711175700 * SECS),  30 * MINS],

	// 2024-03-24 SUN
	["F3 Race 2",      new Date(1711231500 * SECS),  45 * MINS],
	["SC Race 4",      new Date(1711236000 * SECS),  30 * MINS],
	["F2 Race 2",      new Date(1711240500 * SECS),  60 * MINS],
	["F1 Race",        new Date(1711252800 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameJAP;
roundFlag = roundFlagJAP;

sessionsData = [

	// 2024-04-05 FRI
	["F1 Practice 1",  new Date(1712284200 * SECS),  60 * MINS],
	["F1 Practice 2",  new Date(1712296800 * SECS),  60 * MINS],

	// 2024-04-06 SAT
	["F1 Practice 3",  new Date(1712370600 * SECS),  60 * MINS],
	["F1 Qualifying",  new Date(1712383200 * SECS),  60 * MINS],

	// 2024-04-07 SUN
	["F1 Race",        new Date(1712466000 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameCHI;
roundFlag = roundFlagCHI;

sessionsData = [

	// 2024-04-19 FRI
	["F1 Practice 1",  new Date(1713497400 * SECS),  60 * MINS],
	["F1 Sprint Qual", new Date(1713511800 * SECS),  60 * MINS],

	// 2024-04-20 SAT
	["F1 Sprint",      new Date(1713582000 * SECS),  90 * MINS],
	["F1 Qualifying",  new Date(1713596400 * SECS),  60 * MINS],

	// 2024-04-21 SUN
	["F1 Race",        new Date(1713682800 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameMIA;
roundFlag = roundFlagMIA;

sessionsData = [

	// 2024-05-03 FRI
	["F1A Practice 1", new Date(1714744800 * SECS),  40 * MINS],
	["F1 Practice 1",  new Date(1714753800 * SECS),  60 * MINS],
	["F1A Practice 2", new Date(1714764000 * SECS),  40 * MINS],
	["F1 Sprint Qual", new Date(1714768200 * SECS),  60 * MINS],

	// 2024-05-04 SAT
	["F1A Qualifying", new Date(1714832700 * SECS),  30 * MINS],
	["F1 Sprint",      new Date(1714838400 * SECS),  90 * MINS],
	["F1A Race 1",     new Date(1714845900 * SECS),  30 * MINS],
	["F1 Qualifying",  new Date(1714852800 * SECS),  60 * MINS],

	// 2024-05-05 SUN
	["F1A Race 2",     new Date(1714928700 * SECS),  30 * MINS],
	["F1 Race",        new Date(1714939200 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameSAN;
roundFlag = roundFlagSAN;

sessionsData = [

	// 2024-05-17 FRI
	["F3 Practice", new Date(1715932500 * SECS), 45 * MINS],
	["F2 Practice", new Date(1715936700 * SECS), 45 * MINS],
	["F1 Practice 1", new Date(1715945400 * SECS), 60 * MINS],
	["F3 Qualifying", new Date(1715951100 * SECS), 30 * MINS],
	["F2 Qualifying", new Date(1715954400 * SECS), 30 * MINS],
	["F1 Practice 2", new Date(1715958000 * SECS), 60 * MINS],
	["PSC Practice", new Date(1715963400 * SECS), 45 * MINS],

	// 2024-05-18 SAT
	["F3 Race 1", new Date(1716019500 * SECS), 40 * MINS],
	["PSC Qualifying", new Date(1716024000 * SECS), 30 * MINS],
	["F1 Practice 3", new Date(1716028200 * SECS), 60 * MINS],
	["F2 Race 1", new Date(1716034500 * SECS), 45 * MINS],
	["F1 Qualifying", new Date(1716040800 * SECS), 60 * MINS],

	// 2024-05-19 SUN
	["F3 Race 2", new Date(1716100200 * SECS), 45 * MINS],
	["F2 Race 2", new Date(1716105600 * SECS), 60 * MINS],
	["PSC Race", new Date(1716111900 * SECS), 30 * MINS],
	["F1 Race", new Date(1716123600 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameMON;
roundFlag = roundFlagMON;

sessionsData = [

	// 2024-05-23 THU
	["F3 Practice", new Date(1716462600 * SECS), 45 * MINS],
	["F2 Practice", new Date(1716469200 * SECS), 45 * MINS],
	["PSC Practice", new Date(1716474600 * SECS), 45 * MINS],

	// 2024-05-24 FRI
	["F3 Qual A", new Date(1716541500 * SECS), 16 * MINS],
	["F3 Qual B", new Date(1716542940 * SECS), 16 * MINS],
	["F1 Practice 1", new Date(1716550200 * SECS), 60 * MINS],
	["F2 Qual A", new Date(1716556200 * SECS), 16 * MINS],
	["F2 Qual B", new Date(1716557640 * SECS), 16 * MINS],
	["F1 Practice 2", new Date(1716562800 * SECS), 60 * MINS],
	["PSC Qual", new Date(1716569100 * SECS), 30 * MINS],

	// 2024-05-25 SAT
	["F3 Race 1", new Date(1716626700 * SECS), 40 * MINS],
	["F1 Practice 3", new Date(1716633000 * SECS), 60 * MINS],
	["F2 Race 1", new Date(1716639300 * SECS), 45 * MINS],
	["F1 Qualifying", new Date(1716645600 * SECS), 60 * MINS],

	// 2024-05-26 SUN
	["F3 Race 2", new Date(1716703200 * SECS), 45 * MINS],
	["F2 Race 2", new Date(1716709200 * SECS), 60 * MINS],
	["PSC Race", new Date(1716717600 * SECS), 30 * MINS],
	["F1 Race", new Date(1716728400 * SECS), 180 * MINS]
];