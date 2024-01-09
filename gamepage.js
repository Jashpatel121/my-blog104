// generation of random value
var y= Math.floor(Math.random()* 10+1);
var geuss=1;
var player_name=localStorage.getItem("player_name");
function submit()
{
    var x=document.getElementById("geussField").value;
    if(x==y)

    {
        alert("Congragulations"+player_name+"You geussed it right in "+geuss+"geusses");
        geuss=1;
    }

    else if(x>y)
    {
        geuss++;
        alert("try a smaller number");
    }
    else
    {
        geuss++;
        alert("try a greater number");
    }
}

function play_again()
{
    y= Math.floor(Math.random()* 10+1);
}
// count of attempts
// until hit
  
// function for the number sent by the user