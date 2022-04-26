window.alert('Hi, ich funktioniere!');
window.alert('Es gibt ' + document.forms.length + ' Forms');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (xhttp.readyState == 4 && xhttp.status == 200) {

    var xmlDoc = xhttp.responseXML; //important to use responseXML here
}
xhttp.open("GET", "TestXml.xml", true);
xhttp.send();}
var node = xmlDoc.createElement("heyHo");
var elements = xmlDoc.getElementsByTagName("root");
elements[0].appendChild(node);