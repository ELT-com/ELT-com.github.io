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
    let age = 25;
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


function changetoluxury()
{
    document.getElementById("carSwap").src = "pexels-wardmediauk-3647693.jpg";
}

function changetodrift()
{
    document.getElementById("carSwap").src = "pexels-joaquin-delgado-497073239-19795234.jpg";
}

document.getElementById('hoverButton').onmouseover = function() {
    this.style.background = 'darkslategrey'; // Change the button's background color
};

document.getElementById('hoverButton').onmouseleave = function() {
    this.style.background = 'white'; // Reset the button's background color
};
