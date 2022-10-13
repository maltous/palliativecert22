function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JkIM3ZGex4":
        Script1();
        break;
      case "6fixZmvodWr":
        Script2();
        break;
      case "6R1o9yVO4bJ":
        Script3();
        break;
      case "5vpVn3V59eN":
        Script4();
        break;
      case "6oGQwLX8O05":
        Script5();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  window.print();
}

