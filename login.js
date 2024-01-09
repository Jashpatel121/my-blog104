// Create the login function here.
function Login()
{
    player_name=document.getElementById("player_name").value;
    localStorage.setItem("player_name", playername);

    window.location="gamepage.html";
}