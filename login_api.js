function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("username");
  if (user != "") {
    alert("Hi~ "+user+"Welcome To StarJs HomePage");
  } else {
     user = "UnnamedUser"
     user = prompt("Enter The Name：","");
     alert("Hi~ "+user+" Welcome To StarJs HomePage");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
