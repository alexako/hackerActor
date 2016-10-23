var sourceFile = 'https://raw.githubusercontent.com/alexako/CustomerManagement/master/CustomerRegistration/Menu.cs';
var url = 'https://gist.githubusercontent.com/alexako/6838e1facd6e7943d66da74793e94f53/raw/0f48c2bf09cd56d503ee0d5a202b9b3bb0e2baf2/asciidog.txt';
var code = null;
var index = 0;
var awesome = 0;
var awesomeMode = null;
var ascii = null;

function loadSource() {
  $.get(sourceFile, function(data) {
    code = data;
  })
  $.get(url, function(data) {
    ascii = data.split('\n');
  })
}

function generateCode(key) {
  if (key.keyCode != 122 && key.keyCode != 116) {
    key.preventDefault();
  }

  if (key.keyCode == 75) {
    if (awesome == 0) { awesome++; console.log("Nice!"); }
  }
  if (key.keyCode == 76) {
    if (awesome == 1) { awesome++; console.log("Dooope!"); }
    else { awesome = 0; }
  }
  if (key.keyCode == 85) {
    if (awesome == 2) { awesome++; console.log("What's going on?!"); }
    else { awesome = 0; }
  }
  if (key.keyCode == 68) {
    if (awesome == 3) { awesome++; console.log("I'm freaking out!!"); }
    else { awesome = 0; }
  }
  if (key.keyCode == 71) {
    if (awesome == 4) { awesome++; console.log("Almost there!"); }
    else { awesome = 0; }
  }
  if (key.keyCode == 69) {
    if (awesome == 5) {
      awesomeMode = "on";
    }
    awesome = 0;
  }

  if (code) {
    var content = $("#terminal").html();
    var newline = new RegExp("\n", "g");
    var space = new RegExp("\\s", "g");
    var tab = new RegExp("\\t", "g");

    index += Math.floor(Math.random() * 4) + 1;
    var typed = $("#terminal").text(code.substring(0, index)).html();
    $("#terminal").html(typed.replace(newline, "<br/>").replace(space, "&nbsp;").replace(tab, "&nbsp;&nbsp;&nbsp;&nbsp"));
    $("#terminal").append("<div id='cursor'></div>");
    window.scrollBy(0,75);
  }
  else {
    loadSource();
  }

  if (awesomeMode) {
    $("#terminal").html("");
    for (var i=0; i<ascii.length; i++) {
      $("#terminal").append("<div>" + ascii[i] + "</div");
    }
    awesomeMode = null;
  }
}

$(function() {
  $(document).keydown(
    function(event) {
      generateCode(event);
    }
  )
})
