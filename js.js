var yearOfBirth = 1995; // number
var arrayExample = ['Logistics MJG Service', 'McDonald\'s', 1]; // Array
var booleanExample = true; // maybe false
var graduatedUniversity = true;

console.log(arrayExample.length, 'arrayExample length');

console.log(arrayExample[0], ' ------ arrayExample FIRST ELEMENT');

// learn about data types in Javascript
// String, Number, Array, Object, Booean

var myName = "Anastasiia Korin"; // String


// Task: render 'experience duties' into element with id 'duties'
// Make it same structure as in html
// you can create <li> manually (easy) or using javascript in this file (harder)
// add text values into <li> using Javascript
// as a result you would have same list as the one in html







// TASK

let duties = document.getElementById('duties');
duties.style.background = 'red';
document.getElementById("duties").innerHTML = "Communicating effectively with clients and responding to their requirements.\
Planning routes and load scheduling for multi-drop deliveries.\ Allocating and recording resources and movements on the transport planning system.\ Ensuring all partners in the supply chain are working effectively and efficiently to ensure smooth operations.";

//let li = 'Communicating effectively with clients and responding to their requirements.';


// TASK (END)


///////////////
// ADD MY NAME TO HTML
///////////////

var myNameElementCollection = document.getElementsByClassName('about_me_name');

if (myNameElementCollection[0]) {
    myNameElementCollection[0].innerText = myName;
} else {
    console.log('there is no element');
}

