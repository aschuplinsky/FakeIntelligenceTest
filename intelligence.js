
function main()
{
  var colorEntered = document.getElementById("col").value;

  if (colorEntered != 'yellow') {
    document.getElementById("colorError").innerHTML="wrong color";
    document.getElementById("colorError").classList.add("hidden-message");
    document.getElementById("colorError").classList.remove("shown-message");

    document.getElementById("colorGroup").classList.add("has-error");
  } else{
    document.getElementById("colorGroup").classList.add("has-success");
    window.location.href="page2.html";
  }
}

function lettermain()
{
  var letterEntered = document.getElementById("let").value;

  if (letterEntered != '12') {
    document.getElementById("letterError").innerHTML="wrong answer";
    document.getElementById("letterError").classList.add("hidden-message");
    document.getElementById("letterError").classList.remove("shown-message");

    document.getElementById("letterGroup").classList.add("has-error");
  } else{
    document.getElementById("letterGroup").classList.add("has-success");
    window.location.href="page3.html";
  }
}

function numbermain()
{
  var numberEntered = document.getElementById("num").value;

  if (numberEntered != '42426246') {
    document.getElementById("numberError").innerHTML="wrong answer";
    document.getElementById("numberError").classList.add("hidden-message");
    document.getElementById("numberError").classList.remove("shown-message");

    document.getElementById("numberGroup").classList.add("has-error");
  } else{
    document.getElementById("numberGroup").classList.add("has-success");
    window.location.href="result.html";
  }
}
