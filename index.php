<!DOCTYPE html>
<html>
<head>
<title>F1 Schedule</title>
<link rel="stylesheet" href="main.css" />
</head>
<body>
<div id="outerContainer">You need to enable JavaScript to use this page.</div>
<script src="data.js.php"></script>
<script src="main.js"></script>
<script>
function RedrawPage()
{
	Render();
	setTimeout("RedrawPage()", 500);
}

RedrawPage();

function ReloadPage()
{
        //window.location = "index.html";
}

setTimeout("ReloadPage()",60000);
</script>
</body>
</html>
