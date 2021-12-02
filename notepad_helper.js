console.log("You opened the console");
function sleep(time){
  var timeStamp = new Date().getTime();
  var endTime = timeStamp + time;
  while(true){
    if (new Date().getTime() > endTime){
      return;
    } 
  }
}
function loading(){
  var text = "";
  var i = 1;
  while (i < 101) {
    document.getElementById("loading").style.cssText = "width: "+i+"%";
    sleep(100)
    i++;
  }
  document.getElementById("loading").remove();
}
loading()
