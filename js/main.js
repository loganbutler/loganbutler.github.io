var message = "YOU SHALL NOT ENTER UNTIL YOU CLICK THE BUTTON FOOL!";

function whateverYouWantLiterallyAnythingYouWant(AnythingYouWant) {
    alert(AnythingYouWant);
}

whateverYouWantLiterallyAnythingYouWant(message)

document.getElementById('a_button').onclick = function() {
    whateverYouWantLiterallyAnythingYouWant("You clicked the button!");
    whateverYouWantLiterallyAnythingYouWant("You clicked the button again!");
    whateverYouWantLiterallyAnythingYouWant("You clicked the button again and again!");
    whateverYouWantLiterallyAnythingYouWant("You clicked the button again and again and again!");
}