

function validateForm() {
    var name = document.myform.YourName.value;
    var email = document.myform.YourEmail.value;
    var message = document.myform.YourMessage.value;
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email  must be filled");
        return false;
    }
    if (message.length < 8) {
        alert("Message too short");
        return false;
    }
    if (email.value.match(mailformat)) {
        return true;
    } else {
        alert("Enter valid email");
    }
}



function dayNight() {
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("body").style.color = "#E6E8E9";
    document.getElementById("modeimg1").style.backgroundImage = "url('./images/nightmode.jfif')";
    //alert("Night mode on");//pop ups

}


function nightDay() {
    document.getElementById("body").style.backgroundColor = "darkgray";
    document.getElementById("body").style.color = "black";
    document.getElementById("modeimg1").style.backgroundImage = "url('./images/morning.jpeg')";
    // alert("Day mode on");//pop ups
}
/*
function morningmob() {
    document.getElementById("body").style.backgroundColor = "darkgray";
    document.getElementById("body").style.color = "black";
    document.getElementById("modeimg1").style.backgroundImage = "url('./images/morningmob.jpeg')";
}

///var x = window.matchMedia("(max-width: 800px)");
///dayNight(x) {
   // x.addListener(morningmob());
////}
*/

var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + '</b>';

// login pop 
$(document).ready(function(){
    $('#knowmorebtn').click(function(){
        $('#knowmorep').slideToggle();
    });
});



function submitData() {
    var name21 = document.getElementById("email").value;
    var pass21 = document.getElementById("pass").value;
    var name1 = "rajan98patol@gmail.com";
    var pass1 = "rajan98patol";
    if(name21==name1 && pass21==pass1){
        window.location.href = "https://i.stack.imgur.com/gqKFh.png";
        
    
    }else{
        alert('Email or Password was wrong')
    }

    
}




