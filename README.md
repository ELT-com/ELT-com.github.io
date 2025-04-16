# ELT-com.github.io

"""Cars Drifting on Road"" by Dovydas Pranka under Pexels License. 
https://www.pexels.com/photo/cars-drifting-on-road-12644289/"

created and linked .CSS to .html file in class
Added header 
header {
    background-color: lightblue;
    padding: 10px;
    border-radius: 10px;
    border-style: solid;
    border-color: crimson;
}

added    body {
    background-color: darkslategray;
    font-family: Arial, Helvetica, sans-serif;
    margin: 1;
    padding: 20px;
}

added in class  h1 {
    color: crimson;
    font-family: Arial, Helvetica, sans-serif;
    font-size:xx-large ;
}
h2 { 
    color: yellow;
    font-family: Arial, Helvetica, sans-serif;
    font-size:large ; 
  }

  h1.title {
    color: yellow;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 70px;
  }

  h2.title {
    color: blue;
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;
  }

h3 {
    color: crimson;
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;
}

added APR 8, 2025
button{
  padding: 5px;
  margin: 5px;
  background-color: crimson;
  border-radius: 5px;
  font-size: x-large;
 }

 li {
    color: lightblue;
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;}

img.Logo {
    width: 400px;
    height: 100px;
}
/* created table.rank */
  table.rank {
  background-color: darkslategray;
  padding: 10px;
  border-radius: 10px;
  border-color: lightblue;
}

table.cars {
    background-color: darkslategray;
    padding: 10px;
    border-radius: 10px;
    border-style: solid;
    border-color: salmon;
    font-family: Arial, Helvetica, sans-serif;
    color: lightblue;
}

h2.brands {
  color: lightblue;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
}

.flexbox-container {
  display: flex;
  background-color: yellow;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  flex-wrap: wrap;
}

li.hyper {
  color: lightblue;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  list-style-type: none;
  border-color: crimson;
  border-radius: 5px;
  padding: 5px;
}

#idname {
  color: lightblue;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  list-style-type: none;
  border-color: crimson;
  border-radius: 5px;
  padding: 5px;
}


Attributions for swap cars "A Car Parked Beside airplane" by Bob Ward under Pexels License. 
https://www.pexels.com/photo/a-car-parked-beside-airplane-3647693/" and "Vintage Car in Drifting Competition" by Joaquin Delgado  under Pexels License. 
https://www.pexels.com/photo/vintage-car-in-drifting-competition-19795234/"

Linked .js to html file

added function the following during last class

showMessage() {

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

Added propper hover button functionality today APR 15, 2025 via 
document.getElementById('hoverButton').onmouseover = function() {
    this.style.background = 'darkslategrey'; // Change the button's background color
};

document.getElementById('hoverButton').onmouseleave = function() {
    this.style.background = 'white'; // Reset the button's background color
};
and 
button id="hoverButton" 
                onmouseover="this.style.background='darkslategrey'" 
                onmouseleave="this.style.background='white'">
            Hover Button
        /button>
commited and pushed to main branch