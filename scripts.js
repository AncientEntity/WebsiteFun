
function Breaking(amount) {
	console.log("Breaking for " + amount);
	document.write("<div>");
	for(i = 0; i < amount; i++) {
		document.write("<br />");
		
	}
	document.write("</div>");
	
}




function BottomInfo() {
	document.write("<center><div>");
	Breaking(4);
	document.write("<hr width='60%'/> ");
	document.write("	<p>");
	document.write("	This website was created using <strong>html</strong><br />		and thanks to <a href='http://github.com/'><strong>github</strong></a> we can host it freely. <br /> Making all this possible.")
	document.write("	</p>");
	document.write("<br /> <a href='#Top'>Back To Top.</a>")
	Breaking(1);
	document.write("</div></center>");

}

function TopMenu() {
	
	document.write("<center>");
	document.write("<em><h1 id='PageTitle'>Website Title</h1>");
	document.write("<h4>A website about SOMETHING</h4></em>");
	document.write("<hr />");
	document.write("<table cellwidth='50' border='0' width='500' >");
	document.write("	<tr>");
	document.write("		<th><a href='index.html'><h2 title='The Home.'>Home</h2></a></th>");
	document.write("		<th><a href='blog.html'><h2 title='The Blog.'>Blog</h2></a></th>");
	document.write("		<th><a href='contact.html'><h2 title='The Contact.'>Contact</h2></a></th>");
	document.write("		<th><a href='about.html'><h2 title='The About.'>About</h2></a></th>");
	document.write("	</tr>");
	document.write("</table>");
	document.write("");
	document.write("<hr width='60%'/>");
	document.write("<br height='35' />");
	document.write("</center>");
	
}


