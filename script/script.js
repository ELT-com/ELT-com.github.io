function showMessage() {

    let x = 5;
    let name =  "Evan";
    let age = 25;
    let bonus = age + 5;
    let school = "SADT";
    let message = "Hey! " + name + ", your age is " + age + ", and you are in " + school + ". You are qualified to be a developer!!!";
    alert(message);

}


function checkAge()
{
    let age = 17;
    if (age >= 18) {
        alert("You are an adult.");
    } else {
        alert("Slow down speed racer.");
    }
}

function showMany()
{
    for( let i=1; i<=10; i=i+1)
    {
        alert("don't close me! I'm lonely!"+i +" times");
    }
}
function changeColor(){
    document.getElementById("main").style.color = "black";
}

function changetoluxury()
{
    document.getElementById("carSwap").src = "https://vaughanfinetouch.com/wp-content/uploads/2021/07/lc1.jpg";
}

function changetodrift()
{
    document.getElementById("carSwap").src = "https://hackaday.com/wp-content/uploads/2021/01/Drifting.jpg";
}

