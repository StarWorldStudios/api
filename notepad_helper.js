console.log("You opened the console");
function loading(){
  var text = "";
  var i = 1;
  while (i < 101) {
    setTimeout(`console.log(i)`, 1000)
    i++;
  }
}
