// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function myFunction() {
    //document.getElementById("demo").innerHTML = "Paragraph changed";

    //document.write for testing purpose only, deletes all other HTML
    //  document.write(5 + 6);

    //window.
    alert("myFunction called");

    var fruits = ["Banana", "Apple", "Orange"];
    // var fLen = fruits.length;
    //var i;
    var text;

    text = "<ul>";
    fruits.forEach(forEachFunction);

    // for (i = 0; i < fLen; i++) {
    //   text += "<li>" + fruits[i] + "</li>";
    // }
    text += "</ul>";
    document.getElementById("arrayDemo").innerHTML = text;

    function forEachFunction(value) {
        text += "<li>" + value + "</li>";
    }
}

function ageFunction() {
    var age, voteable;
    age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        voteable = "Input is not a number";
    }
    else {
        voteable = (age < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("ageDemo").innerHTML = voteable;
}

/*
 * ColorFlipper
 */

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
   // console.log(document.body);
    //get random number between 0-3 
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);

}