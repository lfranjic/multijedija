function zoomGoal(){
    document.getElementById('goal').style.width="640px";
    document.getElementById('goal').style.height="480px";
}

function zoomStadium(){
    document.getElementById('stadium').style.width="640px";
    document.getElementById('stadium').style.height="480px";
}

function zoomPositions(){
    document.getElementById('positions').style.width="640px";
    document.getElementById('positions').style.height="480px";
}

function zoomTeam(){
    document.getElementById('team').style.width="640px";
    document.getElementById('team').style.height="480px";
}

function zoomGame(){
    document.getElementById('game').style.width="640px";
    document.getElementById('game').style.height="480px";
}

function zoomPitch(){
  document.getElementById('pitch').style.width="640px";
  document.getElementById('pitch').style.height="480px";
}

function zoomLeo(){
  document.getElementById('leo').style.width="480px";
  document.getElementById('leo').style.height="720px";
}

function zoomMario(){
  document.getElementById('mario').style.width="480px";
  document.getElementById('mario').style.height="720px";
}


function resetSize(){
    document.getElementById('pitch').style.width="300px";
    document.getElementById('pitch').style.height="240px";
    document.getElementById('goal').style.width="300px";
    document.getElementById('goal').style.height="240px";
    document.getElementById('stadium').style.width="300px";
    document.getElementById('stadium').style.height="240px";
    document.getElementById('game').style.width="300px";
    document.getElementById('game').style.height="240px";
    document.getElementById('team').style.width="300px";
    document.getElementById('team').style.height="240px";
    document.getElementById('positions').style.width="300px";
    document.getElementById('positions').style.height="240px";
    document.getElementById('mario').style.width="300px";
    document.getElementById('mario').style.height="240px";
    document.getElementById('leo').style.width="300px";
    document.getElementById('leo').style.height="240px";
}

function showMario()
{
  var x = document.getElementById("mariodropdown");
  if (x.style.display === "none")
  {
    x.style.display = "block";
  }
  else
  {
    x.style.display = "none";
  }
}

function showLeo()
{
  var x = document.getElementById("leodropdown");
  if (x.style.display === "none")
  {
    x.style.display = "block";
  }
  else
  {
    x.style.display = "none";
  }
}

