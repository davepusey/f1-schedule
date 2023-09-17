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

var roundNameMIA = "Miami Grand Prix";
var roundFlagMIA = "https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg";

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

var roundNameLAS = "Las Vegas Grand Prix";
var roundFlagLAS = "https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg";

//----------------------------------------------------------------------------------------------------------------------

var seasonYear = 2023;

var roundNum = 0;
var roundName = "Bahrain Test";
var roundFlag = roundFlagBAH;

var sessionsData = [
	["Day 1 AM", new Date(1677135600 * SECS), 255 * MINS],
	["Day 1 PM", new Date((1677153600 * SECS) + (15 * MINS)), 255 * MINS],

	["Day 2 AM", new Date(1677222000 * SECS), 255 * MINS],
	["Day 2 PM", new Date((1677240000 * SECS) + (15 * MINS)), 255 * MINS],

	["Day 3 AM", new Date(1677308400 * SECS), 255 * MINS],
	["Day 3 PM", new Date((1677326400 * SECS) + (15 * MINS)), 255 * MINS]
];

roundNum = 1;
roundName = roundNameBAH;
roundFlag = roundFlagBAH;

var sessionsData = [
	["F3 Practice", new Date(1677830100 * SECS), 45 * MINS],
	["F2 Practice", new Date(1677834300 * SECS), 45 * MINS],
	["F1 Practice 1", new Date(1677843000 * SECS), 60 * MINS],
	["F3 Qualifying", new Date(1677848400 * SECS), 30 * MINS],
	["F1 Practice 2", new Date(1677855600 * SECS), 60 * MINS],
	["F2 Qualifying", new Date(1677861000 * SECS), 30 * MINS],

	["F3 Race 1", new Date(1677921300 * SECS), 45 * MINS],
	["F1 Practice 3", new Date(1677929400 * SECS), 60 * MINS],
	["F2 Race 1", new Date(1677935700 * SECS), 45 * MINS],
	["F1 Qualifying", new Date(1677942000 * SECS), 60 * MINS],

	["F3 Race 2", new Date(1678006200 * SECS), 45 * MINS],
	["F2 Race 2", new Date(1678011600 * SECS), 60 * MINS],
	["F1 Race", new Date(1678028400 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameSAU;
roundFlag = roundFlagSAU;

var sessionsData = [
	["F2 Practice", new Date(1679050500 * SECS), 45 * MINS],
	["F1 Practice 1", new Date(1679059800 * SECS), 60 * MINS],
	["F2 Qualifying", new Date(1679065200 * SECS), 30 * MINS],
	["F1 Practice 2", new Date(1679072400 * SECS), 60 * MINS],

	["F1 Practice 3", new Date(1679146200 * SECS), 60 * MINS],
	["F2 Race 1", new Date(1679152200 * SECS), 45 * MINS],
	["F1 Qualifying", new Date(1679158800 * SECS), 60 * MINS],

	["F2 Race 2", new Date(1679231700 * SECS), 60 * MINS],
	["F1 Race", new Date(1679245200 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameAUS;
roundFlag = roundFlagAUS;

var sessionsData = [
	["SCars Race 1", new Date(1680158400 * SECS), 45 * MINS],

	["F3 Practice", new Date(1680213000 * SECS), 45 * MINS],
	["F2 Practice", new Date(1680217200 * SECS), 45 * MINS],
	["F1 Practice 1", new Date(1680226200 * SECS), 60 * MINS],
	["F3 Qualifying", new Date(1680231600 * SECS), 30 * MINS],
	["SCars Race 2", new Date(1680234600 * SECS), 35 * MINS],
	["F1 Practice 2", new Date(1680238800 * SECS), 60 * MINS],
	["F2 Qualifying", new Date(1680244200 * SECS), 30 * MINS],

	["F3 Race 1", new Date(1680306300 * SECS), 40 * MINS],
	["F1 Practice 3", new Date(1680312600 * SECS), 60 * MINS],
	["F2 Race 1", new Date(1680319200 * SECS), 45 * MINS],
	["F1 Qualifying", new Date(1680325200 * SECS), 60 * MINS],
	["SCars Race 3", new Date(1680330300 * SECS), 30 * MINS],

	["F3 Race 2", new Date(1680390300 * SECS), 45 * MINS],
	["SCars Race 4", new Date(1680394800 * SECS), 30 * MINS],
	["F2 Race 2", new Date(1680399300 * SECS), 60 * MINS],
	["F1 Race", new Date(1680411600 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameAZE;
roundFlag = roundFlagAZE;

var sessionsData = [
	["F2 Practice", new Date(1682665500 * SECS), 45 * MINS],
	["F1 Practice 1", new Date(1682674200 * SECS), 60 * MINS],
	["F2 Qualifying", new Date(1682679600 * SECS), 30 * MINS],
	["F1 Qualifying", new Date(1682686800 * SECS), 60 * MINS],

	["F1 Sprint Qual", new Date(1682760600 * SECS), 60 * MINS],
	["F2 Race 1", new Date(1682766900 * SECS), 45 * MINS],
	["F1 Sprint", new Date(1682775000 * SECS), 90 * MINS],

	["F2 Race 2", new Date(1682840100 * SECS), 60 * MINS],
	["F1 Race", new Date(1682852400 * SECS), 180 * MINS]
];

roundNum = 5;
roundName = roundNameMIA;
roundFlag = roundFlagMIA;

var sessionsData = [
	["F1 Practice 1", new Date(1683311400 * SECS), 60 * MINS],
	["F1 Practice 2", new Date(1683324000 * SECS), 60 * MINS],
	["FE @ Monaco", new Date(1683378180 * SECS), 180 * MINS],
	["F1 Practice 3", new Date(1683390600 * SECS), 60 * MINS],
	["F1 Qualifying", new Date(1683403200 * SECS), 60 * MINS],
	["F1 Race", new Date(1683487800 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameMON;
roundFlag = roundFlagMON;

var sessionsData = [
	["F3 Practice", new Date(1685014200 * SECS), 45 * MINS],
	["F2 Practice", new Date(1685019600 * SECS), 45 * MINS],
	["PSC Practice", new Date(1685025000 * SECS), 45 * MINS],

	["F3 Qual A", new Date(1685092200 * SECS), 16 * MINS],
	["F3 Qual B", new Date(1685093640 * SECS), 16 * MINS],
	["F1 Practice 1", new Date(1685100600 * SECS), 60 * MINS],
	["F2 Qual A", new Date(1685106600 * SECS), 16 * MINS],
	["F2 Qual B", new Date(1685108040 * SECS), 16 * MINS],
	["F1 Practice 2", new Date(1685113200 * SECS), 60 * MINS],
	["PSC Qual", new Date(1685119500 * SECS), 35 * MINS],

	["F3 Race 1", new Date(1685178000 * SECS), 40 * MINS],
	["F1 Practice 3", new Date(1685183400 * SECS), 60 * MINS],
	["F2 Race 1", new Date(1685189700 * SECS), 45 * MINS],
	["F1 Qualifying", new Date(1685196000 * SECS), 60 * MINS],

	["F3 Race 2", new Date(1685253600 * SECS), 45 * MINS],
	["F2 Race 2", new Date(1685259900 * SECS), 60 * MINS],
	["PSC Race", new Date(1685267700 * SECS), 30 * MINS],
	["F1 Race", new Date(1685278800 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameSPA;
roundFlag = roundFlagSPA;

var sessionsData = [
	["F3 Practice", new Date(1685692500 * SECS), 16 * MINS],
	["F2 Practice", new Date(1685696700 * SECS), 16 * MINS],
	["F1 Practice 1", new Date(1685705400 * SECS), 60 * MINS],
	["F3 Qualifying", new Date(1685710800 * SECS), 30 * MINS],
	["F2 Qualifying", new Date(1685714100 * SECS), 30 * MINS],
	["F1 Practice 2", new Date(1685718000 * SECS), 60 * MINS],

	["F3 Race 1", new Date(1685781000 * SECS), 40 * MINS],
	["F1 Practice 3", new Date(1685788200 * SECS), 60 * MINS],
	["F2 Race 1", new Date(1685794500 * SECS), 45 * MINS],
	["F1 Qualifying", new Date(1685800800 * SECS), 60 * MINS],

	["F3 Race 2", new Date(1685865300 * SECS), 45 * MINS],
	["F2 Race 2", new Date(1685870700 * SECS), 60 * MINS],
	["F1 Race", new Date(1685883600 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameCAN;
roundFlag = roundFlagCAN;

var sessionsData = [
	["F1 Practice 1", new Date(1686936600 * SECS), 60 * MINS],
	["F1 Practice 2", new Date(1686947400 * SECS), 90 * MINS],

	["F1 Practice 3", new Date(1687019400 * SECS), 60 * MINS],
	["F1 Qualifying", new Date(1687032000 * SECS), 60 * MINS],

	["F1 Race", new Date(1687111200 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameAUT;
roundFlag = roundFlagAUT;

var sessionsData = [
	["F3 Practice", new Date(1688111700 * SECS), 45 * MINS],
	["F2 Practice", new Date(1688115900 * SECS), 45 * MINS],
	["F1 Practice 1", new Date(1688124600 * SECS), 60 * MINS],
	["F3 Qualifying", new Date(1688130000 * SECS), 30 * MINS],
	["F2 Qualifying", new Date(1688133300 * SECS), 30 * MINS],
	["F1 Qualifying", new Date(1688137200 * SECS), 60 * MINS],
	["PSC Practice", new Date(1688142600 * SECS), 45 * MINS],

	["F3 Race 1", new Date(1688198400 * SECS), 40 * MINS],
	["F1 Sprint Qual", new Date(1688205600 * SECS), 60 * MINS],
	["F2 Race 1", new Date(1688211900 * SECS), 45 * MINS],
	["PSC Qual", new Date(1688216400 * SECS), 30 * MINS],
	["F1 Sprint", new Date(1688221800 * SECS), 90 * MINS],

	["F3 Race 2", new Date(1688279100 * SECS), 45 * MINS],
	["F2 Race 2", new Date(1688284500 * SECS), 60 * MINS],
	["PSC Race", new Date(1688290800 * SECS), 30 * MINS],
	["F1 Race", new Date(1688302800 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameGB;
roundFlag = roundFlagGB;

var sessionsData = [
	["F3 Practice", new Date(1688715900 * SECS), 45 * MINS],
	["F2 Practice", new Date(1688720700 * SECS), 45 * MINS],
	["F1 Practice 1", new Date(1688729400 * SECS), 60 * MINS],
	["F3 Qualifying", new Date(1688735400 * SECS), 30 * MINS],
	["F2 Qualifying", new Date(1688738700 * SECS), 30 * MINS],
	["F1 Practice 2", new Date(1688742000 * SECS), 60 * MINS],
	["PSC Practice", new Date(1688748000 * SECS), 45 * MINS],

	["F3 Race 1", new Date(1688804400 * SECS), 40 * MINS],
	["F1 Practice 3", new Date(1688812200 * SECS), 60 * MINS],
	["F2 Race 1", new Date(1688818500 * SECS), 45 * MINS],
	["F1 Qualifying", new Date(1688824800 * SECS), 60 * MINS],
	["PSC Qual", new Date(1688831100 * SECS), 30 * MINS],

	["F3 Race 2", new Date(1688887200 * SECS), 45 * MINS],
	["F2 Race 2", new Date(1688892900 * SECS), 60 * MINS],
	["PSC Race", new Date(1688900100 * SECS), 30 * MINS],
	["F1 Race", new Date(1688911200 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameHUN;
roundFlag = roundFlagHUN;

var sessionsData = [
	["F3 Practice", new Date(1689926100 * SECS), 45 * MINS],
	["F2 Practice", new Date(1689930300 * SECS), 45 * MINS],
	["F1 Practice 1", new Date(1689939000 * SECS), 60 * MINS],
	["F3 Qualifying", new Date(1689944700 * SECS), 30 * MINS],
	["F2 Qualifying", new Date(1689948000 * SECS), 30 * MINS],
	["F1 Practice 2", new Date(1689951600 * SECS), 60 * MINS],
	["PSC Practice", new Date(1689957300 * SECS), 45 * MINS],

	["F3 Race 1", new Date(1690012200 * SECS), 40 * MINS],
	["PSC Qual", new Date(1690017600 * SECS), 30 * MINS],
	["F1 Practice 3", new Date(1690021800 * SECS), 60 * MINS],
	["F2 Race 1", new Date(1690028100 * SECS), 45 * MINS],
	["F1 Qualifying", new Date(1690034400 * SECS), 60 * MINS],

	["F3 Race 2", new Date(1690093500 * SECS), 45 * MINS],
	["F2 Race 2", new Date(1690099500 * SECS), 60 * MINS],
	["PSC Race", new Date(1690106400 * SECS), 30 * MINS],
	["F1 Race", new Date(1690117200 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameBEL;
roundFlag = roundFlagBEL;

var sessionsData = [
	["F3 Practice", new Date(1690530900 * SECS), 45 * MINS],
	["F2 Practice", new Date(1690535100 * SECS), 45 * MINS],
	["F1 Practice 1", new Date(1690543800 * SECS), 60 * MINS],
	["F3 Qualifying", new Date(1690549200 * SECS), 30 * MINS],
	["F2 Qualifying", new Date(1690552500 * SECS), 30 * MINS],
	["F1 Qualifying", new Date(1690556400 * SECS), 60 * MINS],
	["PSC Practice", new Date(1690561800 * SECS), 45 * MINS],

	["F3 Race 1", new Date(1690617600 * SECS), 40 * MINS],
	["F1 Sprint Qual", new Date((1690624800 * SECS) + (35 * MINS)), 60 * MINS],
	["F2 Race 1", new Date(1690631100 * SECS), 45 * MINS],
	["PSC Qual", new Date(1690635600 * SECS), 30 * MINS],
	["F1 Sprint", new Date((1690641000 * SECS) + (35 * MINS)), 90 * MINS],

	["F3 Race 2", new Date(1690698600 * SECS), 45 * MINS],
	["F2 Race 2", new Date(1690704000 * SECS), 60 * MINS],
	["PSC Race", new Date(1690710300 * SECS), 30 * MINS],
	["F1 Race", new Date(1690722000 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameNET;
roundFlag = roundFlagNET;

var sessionsData = [
	["F2 Practice", new Date(1692950700 * SECS), 45 * MINS],
	["F1 Practice 1", new Date(1692959400 * SECS), 60 * MINS],
	["F2 Qualifying", new Date(1692964800 * SECS), 30 * MINS],
	["F1 Practice 2", new Date(1692972000 * SECS), 60 * MINS],
	["PSC Practice", new Date(1692977400 * SECS), 45 * MINS],

	["PSC Qual", new Date(1693036200 * SECS), 30 * MINS],
	["F1 Practice 3", new Date(1693042200 * SECS), 60 * MINS],
	["F2 Race 1", new Date(1693048500 * SECS), 45 * MINS],
	["F1 Qualifying", new Date(1693054800 * SECS), 60 * MINS],
	["PSC Race 1", new Date(1693062000 * SECS), 30 * MINS],

	["F2 Race 2", new Date(1693123200 * SECS), 60 * MINS],
	["PSC Race 2", new Date(1693130100 * SECS), 30 * MINS],
	["F1 Race", new Date(1693141200 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameITA;
roundFlag = roundFlagITA;

var sessionsData = [
	["F3 Practice", new Date(1693554000 * SECS), 45 * MINS],
	["F2 Practice", new Date(1693559100 * SECS), 45 * MINS],
	["F1 Practice 1", new Date(1693567800 * SECS), 60 * MINS],
	["F3 Qualifying", new Date(1693573500 * SECS), 30 * MINS],
	["F2 Qualifying", new Date(1693576800 * SECS), 30 * MINS],
	["F1 Practice 2", new Date(1693580400 * SECS), 60 * MINS],
	["PSC Practice", new Date(1693586100 * SECS), 45 * MINS],

	["F3 Race 1", new Date(1693639500 * SECS), 40 * MINS],
	["PSC Qual", new Date(1693644600 * SECS), 30 * MINS],
	["F1 Practice 3", new Date(1693650600 * SECS), 60 * MINS],
	["F2 Race 1", new Date(1693656900 * SECS), 45 * MINS],
	["F1 Qualifying", new Date(1693663200 * SECS), 60 * MINS],

	["F3 Race 2", new Date(1693721700 * SECS), 45 * MINS],
	["F2 Race 2", new Date(1693727700 * SECS), 60 * MINS],
	["PSC Race", new Date(1693734900 * SECS), 30 * MINS],
	["F1 Race", new Date(1693746000 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameSIN;
roundFlag = roundFlagSIN;

var sessionsData = [
	["F1 Practice 1", new Date(1694770200 * SECS), 60 * MINS],
	["F1 Practice 2", new Date(1694782800 * SECS), 60 * MINS],

	["F1 Practice 3", new Date(1694856600 * SECS), 60 * MINS],
	["F1 Qualifying", new Date(1694869200 * SECS), 60 * MINS],

	["F1 Race", new Date(1694952000 * SECS), 180 * MINS]
];

roundNum++;
roundName = roundNameJAP;
roundFlag = roundFlagJAP;

var sessionsData = [
	["F1 Practice 1", new Date(1695349800 * SECS), 60 * MINS],
	["F1 Practice 2", new Date(1695362400 * SECS), 60 * MINS],

	["F1 Practice 3", new Date(1695436200 * SECS), 60 * MINS],
	["F1 Qualifying", new Date(1695448800 * SECS), 60 * MINS],

	["F1 Race", new Date(1695531600 * SECS), 180 * MINS]
];
