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
	["F3 Practice",    new Date(1715932500 * SECS),  45 * MINS],
	["F2 Practice",    new Date(1715936700 * SECS),  45 * MINS],
	["F1 Practice 1",  new Date(1715945400 * SECS),  60 * MINS],
	["F3 Qualifying",  new Date(1715951100 * SECS),  30 * MINS],
	["F2 Qualifying",  new Date(1715954400 * SECS),  30 * MINS],
	["F1 Practice 2",  new Date(1715958000 * SECS),  60 * MINS],
	["PSC Practice",   new Date(1715963400 * SECS),  45 * MINS],

	// 2024-05-18 SAT
	["F3 Race 1",      new Date(1716019500 * SECS),  40 * MINS],
	["PSC Qualifying", new Date(1716024000 * SECS),  30 * MINS],
	["F1 Practice 3",  new Date(1716028200 * SECS),  60 * MINS],
	["F2 Race 1",      new Date(1716034500 * SECS),  45 * MINS],
	["F1 Qualifying",  new Date(1716040800 * SECS),  60 * MINS],

	// 2024-05-19 SUN
	["F3 Race 2",      new Date(1716100200 * SECS),  45 * MINS],
	["F2 Race 2",      new Date(1716105600 * SECS),  60 * MINS],
	["PSC Race",       new Date(1716111900 * SECS),  30 * MINS],
	["F1 Race",        new Date(1716123600 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameMON;
roundFlag = roundFlagMON;

sessionsData = [

	// 2024-05-23 THU
	["F3 Practice",    new Date(1716462600 * SECS),  45 * MINS],
	["F2 Practice",    new Date(1716469200 * SECS),  45 * MINS],
	["PSC Practice",   new Date(1716474600 * SECS),  45 * MINS],

	// 2024-05-24 FRI
	["F3 Qual A",      new Date(1716541500 * SECS),  16 * MINS],
	["F3 Qual B",      new Date(1716542940 * SECS),  16 * MINS],
	["F1 Practice 1",  new Date(1716550200 * SECS),  60 * MINS],
	["F2 Qual A",      new Date(1716556200 * SECS),  16 * MINS],
	["F2 Qual B",      new Date(1716557640 * SECS),  16 * MINS],
	["F1 Practice 2",  new Date(1716562800 * SECS),  60 * MINS],
	["PSC Qual",       new Date(1716569100 * SECS),  30 * MINS],

	// 2024-05-25 SAT
	["F3 Race 1",      new Date(1716626700 * SECS),  40 * MINS],
	["F1 Practice 3",  new Date(1716633000 * SECS),  60 * MINS],
	["F2 Race 1",      new Date(1716639300 * SECS),  45 * MINS],
	["F1 Qualifying",  new Date(1716645600 * SECS),  60 * MINS],

	// 2024-05-26 SUN
	["F3 Race 2",      new Date(1716703200 * SECS),  45 * MINS],
	["F2 Race 2",      new Date(1716709200 * SECS),  60 * MINS],
	["PSC Race",       new Date(1716717600 * SECS),  30 * MINS],
	["F1 Race",        new Date(1716728400 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameCAN;
roundFlag = roundFlagCAN;

sessionsData = [

	// 2024-06-07 FRI
	["F1 Practice 1",  new Date(1717781400 * SECS),  60 * MINS],
	["F1 Practice 2",  new Date(1717794000 * SECS),  60 * MINS],

	// 2024-06-08 SAT
	["F1 Practice 3",  new Date(1717864200 * SECS),  60 * MINS],
	["F1 Qualifying",  new Date(1717876800 * SECS),  60 * MINS],

	// 2024-06-09 SUN
	["F1 Race",        new Date(1717956000 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameSPA;
roundFlag = roundFlagSPA;

sessionsData = [

	// 2024-06-21 FRI
	["F1A Practice",   new Date(1718952600 * SECS),  40 * MINS],
	["F3 Practice",    new Date(1718956500 * SECS),  45 * MINS],
	["F2 Practice",    new Date(1718960700 * SECS),  45 * MINS],
	["F1 Practice 1",  new Date(1718969400 * SECS),  60 * MINS],
	["F3 Qualifying",  new Date(1718974800 * SECS),  30 * MINS],
	["F2 Qualifying",  new Date(1718978100 * SECS),  30 * MINS],
	["F1 Practice 2",  new Date(1718982000 * SECS),  60 * MINS],
	["F1A Qualifying", new Date(1718987400 * SECS),  30 * MINS],

	// 2024-06-22 SAT
	["F3 Race 1",      new Date(1719045600 * SECS),  40 * MINS],
	["F1 Practice 3",  new Date(1719052200 * SECS),  60 * MINS],
	["F2 Race 1",      new Date(1719058500 * SECS),  45 * MINS],
	["F1 Qualifying",  new Date(1719064800 * SECS),  60 * MINS],
	["F1A Race 1",     new Date(1719072000 * SECS),  30 * MINS],

	// 2024-06-23 SUN
	["F1A Race 2",     new Date(1719125400 * SECS),  30 * MINS],
	["F3 Race 2",      new Date(1719129900 * SECS),  45 * MINS],
	["F2 Race 2",      new Date(1719135300 * SECS),  60 * MINS],
	["F1 Race",        new Date(1719147600 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameAUT;
roundFlag = roundFlagAUT;

sessionsData = [

	// 2024-06-28 FRI
	["F3 Practice",    new Date(1719557700 * SECS),  45 * MINS],
	["F2 Practice",    new Date(1719561900 * SECS),  45 * MINS],
	["F1 Practice 1",  new Date(1719570600 * SECS),  60 * MINS],
	["F3 Qualifying",  new Date(1719576000 * SECS),  30 * MINS],
	["F2 Qualifying",  new Date(1719579300 * SECS),  30 * MINS],
	["F1 Sprint Qual", new Date(1719585000 * SECS),  60 * MINS],
	["PSC Practice",   new Date(1719590400 * SECS),  45 * MINS],

	// 2024-06-29 SAT
	["F3 Race 1",      new Date(1719646200 * SECS),  40 * MINS],
	["F1 Sprint",      new Date(1719655200 * SECS),  90 * MINS],
	["F2 Race 1",      new Date(1719660600 * SECS),  45 * MINS],
	["PSC Qual",       new Date(1719665400 * SECS),  30 * MINS],
	["F1 Qualifying",  new Date(1719669600 * SECS),  60 * MINS],

	// 2024-06-30 SUN
	["F3 Race 2",      new Date(1719729000 * SECS),  45 * MINS],
	["F2 Race 2",      new Date(1719734400 * SECS),  60 * MINS],
	["PSC Race",       new Date(1719740700 * SECS),  30 * MINS],
	["F1 Race",        new Date(1719752400 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameGB;
roundFlag = roundFlagGB;

sessionsData = [

	// 2024-07-05 FRI
	["F3 Practice",    new Date(1720165200 * SECS),  45 * MINS],
	["F2 Practice",    new Date(1720170000 * SECS),  45 * MINS],
	["F1 Practice 1",  new Date(1720179000 * SECS),  60 * MINS],
	["F3 Qualifying",  new Date(1720185000 * SECS),  30 * MINS],
	["F2 Qualifying",  new Date(1720188300 * SECS),  30 * MINS],
	["F1 Practice 2",  new Date(1720191600 * SECS),  60 * MINS],
	["PSC Practice",   new Date(1720197600 * SECS),  45 * MINS],

	// 2024-07-06 SAT
	["F1 Practice 3",  new Date(1720261800 * SECS),  60 * MINS],
	["F2 Race 1",      new Date(1720268100 * SECS),  45 * MINS],
	["F1 Qualifying",  new Date(1720274400 * SECS),  60 * MINS],
	["PSC Qual",       new Date(1720280700 * SECS),  30 * MINS],
	["F3 Race 1",      new Date(1720285200 * SECS),  40 * MINS],

	// 2024-07-07 SUN
	["F3 Race 2",      new Date(1720336800 * SECS),  45 * MINS],
	["F2 Race 2",      new Date(1720342500 * SECS),  60 * MINS],
	["PSC Race",       new Date(1720349700 * SECS),  30 * MINS],
	["F1 Race",        new Date(1720360800 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameHUN;
roundFlag = roundFlagHUN;

sessionsData = [

	// 2024-07-19 FRI
	["F3 Practice",    new Date(1721375700 * SECS),  45 * MINS],
	["F2 Practice",    new Date(1721379900 * SECS),  45 * MINS],
	["F1 Practice 1",  new Date(1721388600 * SECS),  60 * MINS],
	["F3 Qualifying",  new Date(1721394300 * SECS),  30 * MINS],
	["F2 Qualifying",  new Date(1721397600 * SECS),  30 * MINS],
	["F1 Practice 2",  new Date(1721401200 * SECS),  60 * MINS],
	["PSC Practice",   new Date(1721406900 * SECS),  45 * MINS],

	// 2024-07-20 SAT
	["F3 Race 1",      new Date(1721461800 * SECS),  40 * MINS],
	["PSC Qual",       new Date(1721467200 * SECS),  30 * MINS],
	["F1 Practice 3",  new Date(1721471400 * SECS),  60 * MINS],
	["F2 Race 1",      new Date(1721477700 * SECS),  45 * MINS],
	["F1 Qualifying",  new Date(1721484000 * SECS),  60 * MINS],

	// 2024-07-21 SUN
	["F3 Race 2",      new Date(1721543100 * SECS),  45 * MINS],
	["F2 Race 2",      new Date(1721549100 * SECS),  60 * MINS],
	["PSC Race",       new Date(1721556300 * SECS),  30 * MINS],
	["F1 Race",        new Date(1721566800 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameBEL;
roundFlag = roundFlagBEL;

sessionsData = [

	// 2024-07-26 FRI
	["F3 Practice",    new Date(1721980500 * SECS),  45 * MINS],
	["F2 Practice",    new Date(1721984700 * SECS),  45 * MINS],
	["F1 Practice 1",  new Date(1721993400 * SECS),  60 * MINS],
	["F3 Qualifying",  new Date(1721999100 * SECS),  30 * MINS],
	["F2 Qualifying",  new Date(1722002400 * SECS),  30 * MINS],
	["F1 Practice 2",  new Date(1722006000 * SECS),  60 * MINS],
	["PSC Practice",   new Date(1722012300 * SECS),  45 * MINS],

	// 2024-07-27 SAT
	["F3 Race 1",      new Date(1722066600 * SECS),  40 * MINS],
	["PSC Qual",       new Date(1722072000 * SECS),  30 * MINS],
	["F1 Practice 3",  new Date(1722076200 * SECS),  60 * MINS],
	["F1 Qualifying",  new Date(1722088800 * SECS),  60 * MINS],
	["F2 Race 1",      new Date(1722096900 * SECS),  45 * MINS],

	// 2024-07-28 SUN
	["F3 Race 2",      new Date(1722148200 * SECS),  45 * MINS],
	["F2 Race 2",      new Date(1722153600 * SECS),  60 * MINS],
	["PSC Race",       new Date(1722159900 * SECS),  30 * MINS],
	["F1 Race",        new Date(1722171600 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameNET;
roundFlag = roundFlagNET;

sessionsData = [

	// 2024-08-23 FRI
	["F1A Practice 1", new Date(1724400600 * SECS),  40 * MINS],
	["F1 Practice 1",  new Date(1724409000 * SECS),  60 * MINS],
	["PSC Practice",   new Date(1724414400 * SECS),  45 * MINS],
	["F1 Practice 2",  new Date(1724421600 * SECS),  60 * MINS],
	["F1A Practice 2", new Date(1724427000 * SECS),  40 * MINS],

	// 2024-08-24 SAT
	["F1A Qualifying", new Date(1724487300 * SECS),  30 * MINS],
	["F1 Practice 3",  new Date(1724491800 * SECS),  60 * MINS],
	["PSC Qual",       new Date(1724497200 * SECS),  30 * MINS],
	["F1 Qualifying",  new Date(1724504400 * SECS),  60 * MINS],

	// 2024-08-25 SUN
	["F1A Race 1",     new Date(1724567400 * SECS),  30 * MINS],
	["F1A Race 2",     new Date(1724575200 * SECS),  30 * MINS],
	["PSC Race",       new Date(1724579700 * SECS),  30 * MINS],
	["F1 Race",        new Date(1724590800 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameITA;
roundFlag = roundFlagITA;

sessionsData = [

	// 2024-08-30 FRI
	["F3 Practice",    new Date(1725003300 * SECS),  45 * MINS],
	["F2 Practice",    new Date(1725008400 * SECS),  45 * MINS],
	["F1 Practice 1",  new Date(1725017400 * SECS),  60 * MINS],
	["F3 Qual A",      new Date(1725022800 * SECS),  13 * MINS],
	["F3 Qual B",      new Date(1725024060 * SECS),  13 * MINS],
	["F2 Qualifying",  new Date(1725026400 * SECS),  30 * MINS],
	["F1 Practice 2",  new Date(1725030000 * SECS),  60 * MINS],
	["PSC Practice",   new Date(1725035400 * SECS),  45 * MINS],

	// 2024-08-31 SAT
	["F3 Race 1",      new Date(1725089400 * SECS),  40 * MINS],
	["PSC Qual",       new Date(1725094500 * SECS),  30 * MINS],
	["F1 Practice 3",  new Date(1725100200 * SECS),  60 * MINS],
	["F2 Race 1",      new Date(1725106500 * SECS),  45 * MINS],
	["F1 Qualifying",  new Date(1725112800 * SECS),  60 * MINS],

	// 2024-09-01 SUN
	["F3 Race 2",      new Date(1725172500 * SECS),  45 * MINS],
	["F2 Race 2",      new Date(1725177900 * SECS),  60 * MINS],
	["PSC Race",       new Date(1725185100 * SECS),  30 * MINS],
	["F1 Race",        new Date(1725195600 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameAZE;
roundFlag = roundFlagAZE;

sessionsData = [

	// 2024-09-13 FRI
	["F2 Practice",    new Date(1726210800 * SECS),  45 * MINS],
	["F1 Practice 1",  new Date(1726219800 * SECS),  60 * MINS],
	["F2 Qualifying",  new Date(1726225200 * SECS),  30 * MINS],
	["F1 Practice 2",  new Date(1726232400 * SECS),  60 * MINS],

	// 2024-09-14 SAT
	["F1 Practice 3",  new Date(1726302600 * SECS),  60 * MINS],
	["F2 Race 1",      new Date(1726308900 * SECS),  45 * MINS],
	["F1 Qualifying",  new Date(1726315200 * SECS),  60 * MINS],

	// 2024-09-15 SUN
	["F2 Race 2",      new Date(1726385700 * SECS),  60 * MINS],
	["F1 Race",        new Date(1726398000 * SECS), 180 * MINS]
];
