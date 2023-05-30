var doneCountdown = false;

function toTimeString(tStart, duration)
{
	if (tStart == null)
	{
		return "&nbsp;";
	} else {
		var d = dayText[tStart.getDay()];
		var h = tStart.getHours()
		var m = tStart.getMinutes()

		return d + " " + (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
	}
}

function RenderRow(name, tStart, duration)
{
	var htmlOut = "";

	if (Date.now() < (tStart.getTime() + duration))
	{
		htmlOut += "<div class=\"sessionRow\">";
		htmlOut += "<div class=\"sessionName\">"
		if (doneCountdown) htmlOut += "<span class=\"upcoming\">";;
		htmlOut += name;
		if (doneCountdown) htmlOut += "</span>";
		htmlOut += "</div>";
		if (Date.now() >= tStart.getTime())
		{
			htmlOut += "<div class=\"sessionTime\"><span class=\"active\">ACTIVE</span></div></div>";
			htmlOut += "<div class=\"sessionRow\"><div class=\"sessionCountdown\">" + formatCountdown((tStart.getTime() + duration) - Date.now()) + "</div>";
		} else {
			htmlOut += "<div class=\"sessionTime\">";
			if (doneCountdown) htmlOut += "<span class=\"upcoming\">";
			htmlOut += toTimeString(tStart, duration);
			if (doneCountdown) htmlOut += "</span>";
			htmlOut += "</div></div>";
			if (!doneCountdown)
			{
				htmlOut += "<div class=\"sessionRow\"><div class=\"sessionCountdown\">" + formatCountdown(tStart.getTime() - Date.now()) + "</div>";
			}
			doneCountdown = true;
		}
		htmlOut += "</div>";
	}

	return htmlOut;
}

function formatCountdown(duration)
{
	var d = 0;
	var h = 0;
	var m = 0;
	var s = 0;

	while (duration >= DAYS)
	{
		d++;
		duration -= DAYS;
	}
	while (duration >= HOURS)
	{
		h++;
		duration -= HOURS;
	}
	while (duration >= MINS)
	{
		m++;
		if (m == 60)
		{
			h++;
			m = 0;
		}
		duration -= MINS;
	}
	while (duration >= SECS)
	{
		s++;
		if (s == 60)
		{
			m++;
			s = 0;
		}
		duration -= SECS;
	}
	if (duration > 0) s++;
	if (s == 60)
	{
		m++;
		s = 0;
	}

	if (d > 0)
	{
		return d + "d " + h + ":" + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
	} else	if (h > 0) {
		return h + ":" + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
	} else {
		return m + ":" + (s < 10 ? "0" : "") + s;
	}
}

function Render()
{
	doneCountdown = false;

	var htmlOut = "<div id=\"sessionTitle\">F1 " + seasonYear + " - Round " + (roundNum < 10 ? "0" : "") + roundNum + "<br />";
	if (roundFlag != null) htmlOut += "<img src=\"" + roundFlag + "\" />";
	htmlOut += roundName + "</div>";

	htmlOut += "<div id=\"sessionList\">";
	for (const sessionData of sessionsData)
	{
		htmlOut += RenderRow(sessionData[0], sessionData[1], sessionData[2]);
	}
	htmlOut += "</div>";

	document.getElementById("outerContainer").innerHTML = htmlOut;
}
