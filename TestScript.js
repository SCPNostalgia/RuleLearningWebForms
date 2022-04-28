<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
window.alert('Hi, ich funktioniere!');
window.alert('Es gibt ' + document.forms.length + ' Forms');

$(document).ready(function() {
    var url = 'https://github.com/SCPNostalgia/RuleLearningWebForms/blob/main/TestXml.xml';

    $.get(url, function(data) { 
        $('#code').text(data);
      }, 'text');
    });
window.alert(data);
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
// if (xhttp.readyState == 4 && xhttp.status == 200) {

//     var xmlDoc = xhttp.responseXML; //important to use responseXML here
// }
// xhttp.open("GET", "https://github.com/SCPNostalgia/RuleLearningWebForms/blob/main/TestXml.xml", true);
// xhttp.send();}
// var node = xmlDoc.createElement("heyHo");
// var elements = xmlDoc.getElementsByTagName("root");
// elements[0].appendChild(node);