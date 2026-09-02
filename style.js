function turnOn()
{
    document.getElementById("bulb").classList.add("on");

    document.getElementById("status").innerHTML = "TORCH IS ON";

    document.getElementById("status").classList.add("on-status");
}


function turnOff()
{
    document.getElementById("bulb").classList.remove("on");

    document.getElementById("status").innerHTML = "TORCH IS OFF";

    document.getElementById("status").classList.remove("on-status");
}