<!DOCTYPE html>
<html lang = “en”>
<head>
 <meta charset = “UTF-8”>
	<title>Our Story</title>
	<script src="photojs.js"></script>
	<link rel="stylesheet" href="photostyle.css">
	<link href='https://fonts.googleapis.com/css?family=Jost' rel='stylesheet'>
</head>
<body>
	<h1>Our Photos</h1>
	<table>
		<thead>
			<th scope="col">Engagement</th>
			<th scope="col">Mary's Peak</th>
			<th scope="col">Wedding</th>
		</thead>
		<tr>
			<td><img class="preview" src="engagement.jpg" alt="Our engagement shoot at Hobbit Beach in June, 2018" onmouseover= "upDate(this)" onmouseout= "unDo()"></td>
			<td><img class="preview" src="marys.jpg" alt="Photoshoot with Alex and Daniel at Mary's Peak in Summer of 2018" onmouseover= "upDate(this)" onmouseout= "unDo()"></td>
			<td><img class="preview" src="wedding.jpg" alt="Our Wedding Day in Monmouth, OR on September 8th, 2018" onmouseover= "upDate(this)" onmouseout= "unDo()"></td>
		</tr>
	</table>
	<button onclick="message()">Guess our Anniversary!</button>
	<div id="msg">
		Hover over an image to see details!
	</div>
</body>
