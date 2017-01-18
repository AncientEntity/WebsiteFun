
function Breaking(amount) {
	console.log("Breaking for " + amount);
	document.write("<div>");
	for(i = 0; i < amount; i++) {
		document.write("<br />");
		
	}
	document.write("</div>");
	
}


function BottomInfo() {
	Breaking(4);
	document.write("<hr width='60%'/> ")
	document.write("<center><div>");
	document.write("	<p>");
	document.write("	This website was created using <strong>html</strong><br />		and thanks to <a href='http://github.com/'><strong>github</strong></a> we can host it freely.")
	document.write("	</p>");
	document.write("</div></center>");
	Breaking(1);
}

function TopMenu() {
	
	document.write("<center>");
	document.write("<em><h1 id='PageTitle'>Website Title</h1>");
	document.write("<h4>A website about SOMETHING</h4></em>");
	document.write("<hr />");
	document.write("<table cellwidth='50' border='0' width='500' >");
	document.write("	<tr>");
	document.write("		<th><a href='index.html'><h2 title='The Home.'>Home</h2></a></td>");
	document.write("		<th><a href='contact.html'><h2 title='The Contact.'>Contact</h2></a></td>");
	document.write("		<th><a href='about.html'><h2 title='The About.'>About</h2></a></td>");
	document.write("	</tr>");
	document.write("</table>");
	document.write("");
	document.write("<hr width='60%'/>");
	document.write("<br height='35' />");
	document.write("</center>");
	
}