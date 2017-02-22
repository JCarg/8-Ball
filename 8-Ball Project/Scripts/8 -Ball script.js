

  function GetValue(){ 
    var fortunes = ["bi", "fef", "fsdf", "sfds", "sfdfd", "fdsfs"];
    var randnum = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.getElementById("fortunesp").innerHTML = randnum;
 } 




